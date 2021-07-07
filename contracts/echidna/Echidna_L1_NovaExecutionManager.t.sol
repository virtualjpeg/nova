// @unsupported: ovm
// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.7.6;

import "../L1_NovaExecutionManager.sol";
import "../mocks/MockCrossDomainMessenger.sol";

contract Echidna_L1_NovaExecutionManager {
    L1_NovaExecutionManager internal immutable executionManager;
    MockCrossDomainMessenger internal immutable mockCrossDomainMessenger;

    address internal constant L2_NovaRegistryAddress = address(1);

    constructor() {
        MockCrossDomainMessenger _mockCrossDomainMessenger = new MockCrossDomainMessenger();
        mockCrossDomainMessenger = _mockCrossDomainMessenger;
        executionManager = new L1_NovaExecutionManager(L2_NovaRegistryAddress, address(_mockCrossDomainMessenger));
    }

    function transferFromRelayer_should_always_be_not_executable(address token, uint256 amount) external {
        try executionManager.transferFromRelayer(token, amount) {
            // If the call succeeded, something is wrong:
            assert(false);
        } catch Error(string memory reason) {
            // If the called errored, it should be a NO_ACTIVE_EXECUTION/NOT_CURRENT_STRATEGY error. If not, something is wrong:
            bytes32 hashedReason = keccak256(abi.encodePacked(reason));
            assert(
                hashedReason == keccak256("NO_ACTIVE_EXECUTION") || hashedReason == keccak256("NOT_CURRENT_STRATEGY")
            );
        }
    }

    function exec_should_not_affect_currentExecHash_and_should_send_an_xDomainMessage(
        uint256 nonce,
        address strategy,
        bytes memory l1Calldata,
        address recipient,
        uint256 deadline
    ) external {
        try executionManager.exec(nonce, strategy, l1Calldata, recipient, deadline) {
            // ExecHash should always be reset:
            assert(executionManager.currentExecHash() == executionManager.DEFAULT_EXECHASH());

            // Relayer should be us and not reset:
            assert(executionManager.currentRelayer() == address(this));

            // xDomain constants should always be as expected:
            assert(mockCrossDomainMessenger.latestTarget() == L2_NovaRegistryAddress);
            assert(mockCrossDomainMessenger.latestSender() == address(executionManager));
            assert(mockCrossDomainMessenger.latestGasLimit() == executionManager.EXEC_COMPLETED_MESSAGE_GAS_LIMIT());
        } catch {
            // If it reverted, it should be because either;
            // - the deadline was in the past
            // - strategy == executionManager
            // - recipient == address(0)
            // - the calldata had transferFrom as the sig
            // - the calldata had sendMessage as the sig
            // If not, something is wrong:
            bytes4 calldataSig = SigLib.fromCalldata(l1Calldata);
            assert(
                deadline < block.timestamp ||
                    recipient == address(0) ||
                    strategy == address(executionManager) ||
                    calldataSig == iAbs_BaseCrossDomainMessenger.sendMessage.selector ||
                    calldataSig == IERC20.transferFrom.selector
            );
        }
    }
}
