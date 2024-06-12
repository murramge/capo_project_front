import axios from "axios";

export const CreatePhotocardApi = async (data: any) => {
  const refreshToken = localStorage.getItem("refreshToken");
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
    data: JSON.stringify(data),
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
