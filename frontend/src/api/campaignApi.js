import axios from "./axios";

export const getCampaigns = () => axios.get("/campaign/list");
export const createCampaign = (data) => axios.post("/campaign", data);