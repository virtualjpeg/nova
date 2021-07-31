/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockCrossDomainMessenger,
  MockCrossDomainMessengerInterface,
} from "../MockCrossDomainMessenger";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "FailedRelayedMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "RelayedMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "SentMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "relayMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xDomainMessageSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633dbb202b146100465780636e296e4514610113578063e542f64014610144575b600080fd5b6101116004803603606081101561005c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561009457600080fd5b8201836020820111156100a657600080fd5b803590602001918460018302840111640100000000831117156100c857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903563ffffffff1691506101e79050565b005b61011b6101ec565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101116004803603606081101561015a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561019257600080fd5b8201836020820111156101a457600080fd5b803590602001918460018302840111640100000000831117156101c657600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16610208565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178255604051829187169086908690808383808284376040519201945060009350909150508083038183865af19150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559092509050816102e28261038e565b90610385576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561034a578181015183820152602001610332565b50505050905090810190601f1680156103775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050505050565b60606044825110156103d4575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201526104a1565b60048201805190926024019060208110156103ee57600080fd5b810190808051604051939291908464010000000082111561040e57600080fd5b90830190602082018581111561042357600080fd5b825164010000000081118282018810171561043d57600080fd5b82525081516020918201929091019080838360005b8381101561046a578181015183820152602001610452565b50505050905090810190601f1680156104975780820380516001836020036101000a031916815260200191505b5060405250505090505b91905056fea164736f6c6343000706000a";

export class MockCrossDomainMessenger__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockCrossDomainMessenger> {
    return super.deploy(overrides || {}) as Promise<MockCrossDomainMessenger>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCrossDomainMessenger {
    return super.attach(address) as MockCrossDomainMessenger;
  }
  connect(signer: Signer): MockCrossDomainMessenger__factory {
    return super.connect(signer) as MockCrossDomainMessenger__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCrossDomainMessengerInterface {
    return new utils.Interface(_abi) as MockCrossDomainMessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCrossDomainMessenger {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockCrossDomainMessenger;
  }
}
