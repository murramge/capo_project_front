import axios from "axios";

export const createUserApi = async (userData) => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/member`,
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
