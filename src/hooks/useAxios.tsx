import axios from "axios";

const instance = axios.create({
  baseURL: "http://188.245.99.15:5003/api/v1",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
