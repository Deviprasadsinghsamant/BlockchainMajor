import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // in the browser and MM is running
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // on the server or the user is not running MM
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/52639f3d45714cb09e5a8f55e298c08c"
  );
  web3 = new Web3(provider);
}

export default web3;
