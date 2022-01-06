import Escrow from "./artifacts/contracts/Escrow.sol/Escrow";
import { ethers } from "ethers";

//const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const provider = new ethers.providers.Web3Provider(window.ethereum);

export default async function deploy(arbiter, beneficiary, value) {
  await ethereum.request({ method: "eth_requestAccounts" });
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  return factory.deploy(arbiter, beneficiary, { value });
}
