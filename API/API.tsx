import axios from "axios";


//create axios instance
const Axios = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
