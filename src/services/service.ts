import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const submitData = async (
  url: string,
  data: { id: string; pw: string }
): Promise<string> => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return "error";
  }
};
