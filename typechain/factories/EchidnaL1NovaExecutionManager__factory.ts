/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EchidnaL1NovaExecutionManager,
  EchidnaL1NovaExecutionManagerInterface,
} from "../EchidnaL1NovaExecutionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "l1Calldata",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "exec_should_not_affect_currentExecHash_and_should_send_an_xDomainMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFromRelayer_should_always_be_not_executable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50600060405161001f906100c2565b604051809103906000f08015801561003b573d6000803e3d6000fd5b506001600160601b0319606082901b1660a0526040519091506001908290600090610065906100cf565b80846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050604051809103906000f0801580156100ab573d6000803e3d6000fd5b5060601b6001600160601b031916608052506100dc565b6104d38061099d83390190565b611d1480610e7083390190565b60805160601c60a05160601c610884610119600039508061015b5280610313528061047e5280610572528061064252806106d452506108846000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633698ab9f1461003b578063c421b9d214610076575b600080fd5b6100746004803603604081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610159565b005b610074600480360360a081101561008c57600080fd5b81359173ffffffffffffffffffffffffffffffffffffffff602082013516918101906060810160408201356401000000008111156100c957600080fd5b8201836020820111156100db57600080fd5b803590602001918460018302840111640100000000831117156100fd57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505073ffffffffffffffffffffffffffffffffffffffff8335169350505060200135610311565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633996e60a83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156101ea57600080fd5b505af19250505080156101fb575060015b61030b57610207610795565b8061021257506102fc565b6000816040516020018082805190602001908083835b6020831061026557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610228565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012090507f12f23d7716dd1a944157e91db7e5466415b0ae89675083fdd628b7311c6298748114806102ef57507f0da2cef0baa299da43eb01d5677caedf73b609d06e98f70950db32c90f012a3281145b6102f557fe5b5050610306565b3d6000803e3d6000fd5b61030d565bfe5b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663262d18f886868686866040518663ffffffff1660e01b8152600401808681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156103e25781810151838201526020016103ca565b50505050905090810190601f16801561040f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561043257600080fd5b505af1925050508015610443575060015b61057057600061045284610788565b905042821080610476575073ffffffffffffffffffffffffffffffffffffffff8316155b806104cc57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16145b8061051857507fffffffff0000000000000000000000000000000000000000000000000000000081167f3dbb202b00000000000000000000000000000000000000000000000000000000145b8061056457507fffffffff0000000000000000000000000000000000000000000000000000000081167f23b872dd00000000000000000000000000000000000000000000000000000000145b61056a57fe5b50610781565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371de9c106040518163ffffffff1660e01b815260040160206040518083038186803b1580156105d657600080fd5b505afa1580156105ea573d6000803e3d6000fd5b505050506040513d602081101561060057600080fd5b5051604080517feb714e19000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163eb714e19916004808301926020929190829003018186803b15801561068857600080fd5b505afa15801561069c573d6000803e3d6000fd5b505050506040513d60208110156106b257600080fd5b5051146106bb57fe5b3073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166341cd04206040518163ffffffff1660e01b815260040160206040518083038186803b15801561073857600080fd5b505afa15801561074c573d6000803e3d6000fd5b505050506040513d602081101561076257600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161461078157fe5b5050505050565b6020015190565b60e01c90565b600060443d10156107a557610874565b600481823e6308c379a06107b9825161078f565b146107c357610874565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d67ffffffffffffffff81602484011181841117156108115750505050610874565b8284019250825191508082111561082b5750505050610874565b503d8301602082840101111561084357505050610874565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01681016020016040529150505b9056fea164736f6c6343000706000a608060405234801561001057600080fd5b506104b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633dbb202b146100465780636e296e4514610113578063e542f64014610144575b600080fd5b6101116004803603606081101561005c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561009457600080fd5b8201836020820111156100a657600080fd5b803590602001918460018302840111640100000000831117156100c857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903563ffffffff1691506101e79050565b005b61011b6101ec565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101116004803603606081101561015a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561019257600080fd5b8201836020820111156101a457600080fd5b803590602001918460018302840111640100000000831117156101c657600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16610208565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178255604051829187169086908690808383808284376040519201945060009350909150508083038183865af19150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559092509050816102e28261038e565b90610385576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561034a578181015183820152602001610332565b50505050905090810190601f1680156103775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050505050565b60606044825110156103d4575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201526104a1565b60048201805190926024019060208110156103ee57600080fd5b810190808051604051939291908464010000000082111561040e57600080fd5b90830190602082018581111561042357600080fd5b825164010000000081118282018810171561043d57600080fd5b82525081516020918201929091019080838360005b8381101561046a578181015183820152602001610452565b50505050905090810190601f1680156104975780820380516001836020036101000a031916815260200191505b5060405250505090505b91905056fea164736f6c6343000706000a60e060405260028054610c3560861b6001600160801b0319909116600d176001600160801b03161790557ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6005553480156200005a57600080fd5b5060405162001d1438038062001d148339810160408190526200007d91620000f2565b600180546001600160a01b031916339081179091556040518391907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a2606090811b6001600160601b031990811660805293901b90921660a0525060e01b6001600160e01b03191660c05262000165565b60008060006060848603121562000107578283fd5b835162000114816200014c565b602085015190935062000127816200014c565b604085015190925063ffffffff8116811462000141578182fd5b809150509250925092565b6001600160a01b03811681146200016257600080fd5b50565b60805160601c60a05160601c60c05160e01c611b6a620001aa60003980610b7452806113aa5250806102b95280610a925250806103eb5280610a545250611b6a6000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806351211924116100cd578063a45421e711610081578063b7daba3611610066578063b7daba3614610287578063bf7e214f1461028f578063eb714e19146102975761016c565b8063a45421e71461026a578063a6d4b502146102725761016c565b80637a9e5e4b116100b25780637a9e5e4b1461024757806386b28c3c1461025a5780638da5cb5b146102625761016c565b8063512119241461022a57806371de9c101461023f5761016c565b8063262d18f811610124578063380174e011610109578063380174e0146101fa5780633996e60a1461020f57806341cd0420146102225761016c565b8063262d18f8146101d457806328119244146101e75761016c565b806313af40351161015557806313af4035146101a457806316be836c146101b957806317a459aa146101c15761016c565b8063069d7a6f146101715780630d1fdd341461018f575b600080fd5b61017961029f565b6040516101869190611ade565b60405180910390f35b6101976102b7565b60405161018691906117db565b6101b76101b2366004611620565b6102db565b005b6101976103e9565b6101b76101cf36600461168e565b61040d565b6101b76101e23660046116be565b610511565b6101b76101f536600461168e565b610c19565b610202610d1e565b60405161018691906118dc565b6101b761021d366004611643565b610d57565b61019761113b565b610232611157565b60405161018691906118a0565b610232611216565b6101b7610255366004611620565b61123a565b610197611344565b610197611360565b61017961137c565b61027a6113a8565b6040516101869190611afb565b6101b76110d0565b6101976113cc565b6102326113e8565b6002546fffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b610309336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b61037457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a250565b7f000000000000000000000000000000000000000000000000000000000000000081565b61043b336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b6104a657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600280546fffffffffffffffffffffffffffffffff8084167001000000000000000000000000000000000291161790556040517fabbdd4ac28cf4c177dfe6040161376471a0d8abeafae674e8a953218d2bc31b490610506908390611ade565b60405180910390a150565b60005a905081421115610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611a70565b60405180910390fd5b6005547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef146105b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610550906118ef565b6105e2336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b610618576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610550906119cb565b73ffffffffffffffffffffffffffffffffffffffff8316610665576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105509061195d565b73ffffffffffffffffffffffffffffffffffffffff86163014156106b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611aa7565b60006106f686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061153d92505050565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f23b872dd000000000000000000000000000000000000000000000000000000001415610774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611a02565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f3dbb202b0000000000000000000000000000000000000000000000000000000014156107f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611a02565b6000610835898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152503a9250611544915050565b6005819055600380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811633179091556004805473ffffffffffffffffffffffffffffffffffffffff8c169216821790556040519192506000918291906108a1908b908b906117af565b6000604051808303816000865af19150503d80600081146108de576040519150601f19603f3d011682016040523d82523d6000602084013e6108e3565b606091505b509150915081806109b95750604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f000000000000000000006020820152905161093191906024016118dc565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a000000000000000000000000000000000000000000000000000000000178152915190912082519183019190912014155b6109ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611a39565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef60055560005a6002546040519188036fffffffffffffffffffffffffffffffff808316360270010000000000000000000000000000000090930416919091010191507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633dbb202b907f0000000000000000000000000000000000000000000000000000000000000000907f9d21cd150000000000000000000000000000000000000000000000000000000090610ae99089908e908a159089906024016118a9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e085901b9092168252610b9c92917f00000000000000000000000000000000000000000000000000000000000000009060040161185b565b600060405180830381600087803b158015610bb657600080fd5b505af1158015610bca573d6000803e3d6000fd5b50505050837fd118217a540bf32db22ebd89e392054a9d0f5e30e6bfa753a87baa44ec0a60c633851584604051610c03939291906117fc565b60405180910390a2505050505050505050505050565b610c47336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b610cb257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600280547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff83161790556040517f4ca5451bbfb8d7f0ba4b6a4faed2872dbcb07253f32a52bd5456ce8b067ffadf90610506908390611ade565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525081565b610d85336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b610df057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff163314610e41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611926565b6005547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef1415610e9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611994565b600354604051600091829173ffffffffffffffffffffffffffffffffffffffff868116927f23b872dd0000000000000000000000000000000000000000000000000000000092610ef792909116903390889060240161182a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051610f8091906117bf565b6000604051808303816000865af19150503d8060008114610fbd576040519150601f19603f3d011682016040523d82523d6000602084013e610fc2565b606091505b5091509150816040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525090611036576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055091906118dc565b50805115611135578051602014156110d0578080602001905181019061105c919061166e565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000815250906110ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055091906118dc565b50611135565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290517f08c379a000000000000000000000000000000000000000000000000000000000815261055091906004016118dc565b50505050565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f000000000000000000006020820152905161119991906024016118dc565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a0000000000000000000000000000000000000000000000000000000001781529051902081565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef81565b611268336000357fffffffff00000000000000000000000000000000000000000000000000000000166113ee565b6112d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178083556040519116917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad91a250565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60025470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600073ffffffffffffffffffffffffffffffffffffffff831630141561141657506001611537565b60015473ffffffffffffffffffffffffffffffffffffffff8481169116141561144157506001611537565b60005473ffffffffffffffffffffffffffffffffffffffff1680611469576000915050611537565b604080517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008616604483015291519183169163b700961391606480820192602092909190829003018186803b15801561150757600080fd5b505afa15801561151b573d6000803e3d6000fd5b505050506040513d602081101561153157600080fd5b50519150505b92915050565b6020015190565b600084848484604051602001808581526020018473ffffffffffffffffffffffffffffffffffffffff1660601b815260140183805190602001908083835b602083106115bf57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611582565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052920193845250604080518085038152938201905282519201919091209998505050505050505050565b600060208284031215611631578081fd5b813561163c81611b38565b9392505050565b60008060408385031215611655578081fd5b823561166081611b38565b946020939093013593505050565b60006020828403121561167f578081fd5b8151801515811461163c578182fd5b60006020828403121561169f578081fd5b81356fffffffffffffffffffffffffffffffff8116811461163c578182fd5b60008060008060008060a087890312156116d6578182fd5b8635955060208701356116e881611b38565b9450604087013567ffffffffffffffff80821115611704578384fd5b818901915089601f830112611717578384fd5b813581811115611725578485fd5b8a6020828501011115611736578485fd5b602083019650809550505050606087013561175081611b38565b80925050608087013590509295509295509295565b6000815180845261177d816020860160208601611b0c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b600082516117d1818460208701611b0c565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9390931683529015156020830152604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600073ffffffffffffffffffffffffffffffffffffffff851682526060602083015261188a6060830185611765565b905063ffffffff83166040830152949350505050565b90815260200190565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015215156040830152606082015260800190565b60006020825261163c6020830184611765565b60208082526011908201527f414c52454144595f455845435554494e47000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f545f43555252454e545f5354524154454759000000000000000000000000604082015260600190565b6020808252600e908201527f4e4545445f524543495049454e54000000000000000000000000000000000000604082015260600190565b60208082526013908201527f4e4f5f4143544956455f455845435554494f4e00000000000000000000000000604082015260600190565b6020808252600c908201527f554e415554484f52495a45440000000000000000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f43414c4c444154410000000000000000000000000000000000604082015260600190565b6020808252600b908201527f484152445f524556455254000000000000000000000000000000000000000000604082015260600190565b6020808252600d908201527f504153545f444541444c494e4500000000000000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f53545241544547590000000000000000000000000000000000604082015260600190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b63ffffffff91909116815260200190565b60005b83811015611b27578181015183820152602001611b0f565b838111156111355750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611b5a57600080fd5b5056fea164736f6c6343000706000a";

export class EchidnaL1NovaExecutionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EchidnaL1NovaExecutionManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<EchidnaL1NovaExecutionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EchidnaL1NovaExecutionManager {
    return super.attach(address) as EchidnaL1NovaExecutionManager;
  }
  connect(signer: Signer): EchidnaL1NovaExecutionManager__factory {
    return super.connect(signer) as EchidnaL1NovaExecutionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EchidnaL1NovaExecutionManagerInterface {
    return new utils.Interface(_abi) as EchidnaL1NovaExecutionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EchidnaL1NovaExecutionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EchidnaL1NovaExecutionManager;
  }
}
