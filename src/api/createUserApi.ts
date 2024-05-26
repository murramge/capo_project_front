import axios from "axios";

export const createUserApi = async (userData) => {
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

export const idCheckDuplicates = async (userid) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/duplication-check/user-id/${userid}`,
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
