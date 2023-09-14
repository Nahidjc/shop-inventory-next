import { api } from "@/configs";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  config.headers.token = `${token}`;
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};

export const publicPatch = async (endpoint, body) => {
  const response = await axios.patch(`${api}${endpoint}`, body, config);
  return response.data;
};