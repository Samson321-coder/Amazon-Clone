import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-89d6d/us-central1/api",
  // baseURL: "http://localhost:5000",
});

export { axiosInstance };
