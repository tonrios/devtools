import axios from "axios";

const apiKey = "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";

const apiGPT = axios.create({
  baseURL: "https://api.openai.com/v1/chat",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

apiGPT.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default apiGPT;
