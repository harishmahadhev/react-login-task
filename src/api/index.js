import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const signUp = (formdata) => API.post("/login/signup", formdata);
export const signIn = (formdata) => API.post("/login/signin", formdata);
