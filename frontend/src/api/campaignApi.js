import axios from "./axios";

export const getCampaigns = async () => {
  const res = await axios.get("/campaigns/");
  return res.data;
};