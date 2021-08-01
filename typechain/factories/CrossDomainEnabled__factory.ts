/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CrossDomainEnabled,
  CrossDomainEnabledInterface,
} from "../CrossDomainEnabled";

const _abi = [
  {
    inputs: [],
    name: "CROSS_DOMAIN_MESSENGER",
    outputs: [
      {
        internalType: "contract iOVM_CrossDomainMessenger",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CrossDomainEnabled__factory {
  static readonly abi = _abi;
  static createInterface(): CrossDomainEnabledInterface {
    return new utils.Interface(_abi) as CrossDomainEnabledInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossDomainEnabled {
    return new Contract(address, _abi, signerOrProvider) as CrossDomainEnabled;
  }
}
