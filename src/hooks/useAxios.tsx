import axios from "axios";

const instance = axios.create({
  baseURL: "https://sports-backend-coral.vercel.app/api/v1",
  // baseURL: "http://localhost:5003/api/v1",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
