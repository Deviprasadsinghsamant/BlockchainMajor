import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x9AEccd72cA16360b41D99Bd2257f49463e236d1F"
);

export default instance;
