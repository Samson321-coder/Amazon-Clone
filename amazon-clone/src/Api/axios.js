import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-89d6d/us-central1/api",

  // deployed version of firebase function
  // baseURL: "",

  // local instance of amazon-api/amazon server
  // baseURL: "http://localhost:5000",
  
  // deployed version of amazon-api/amazon server on render.com
  baseURL: "https://amazon-api-deploy-sqcn.onrender.com/",
});

export { axiosInstance };
