import axios from "./axios";

export const loginUser = (data) => axios.post("/login", data);
export const signupUser = (data) => axios.post("/signup", data);