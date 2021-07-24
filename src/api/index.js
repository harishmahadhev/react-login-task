import axios from "axios";
const API = axios.create({
  baseURL: "https://dashboard-harish.herokuapp.com/",
});
export const signUp = (formdata) => API.post("/login/signup", formdata);
export const signIn = (formdata) => API.post("/login/signin", formdata);
