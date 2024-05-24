import axios from "axios";

export const loginUserApi = async (userData) => {
  console.log(userData);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(userData),
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
