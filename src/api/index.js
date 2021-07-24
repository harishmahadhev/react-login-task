import axios from "axios";
const API = axios.create({
  baseURL: "https://dashboard-harish.herokuapp.com/",
});
export const signUp = (formdata) => API.post("/login/signup", formdata);
export const signIn = (formdata) => API.post("/login/signin", formdata);
export const forgot = (formdata) => API.post("/login/forgotpassword", formdata);
export const reset = (formdata) => API.post("/login/reset", formdata);
