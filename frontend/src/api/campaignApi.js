import axios from "./axios";

export const getCampaigns = async () => {
  const res = await axios.get("/campaigns/");
  return res.data;
};

export const createCampaign = async (data) => {
  const res = await axios.post("/campaigns/", data);
  return res.data;
};