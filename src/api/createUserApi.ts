import axios from "axios";

export const createUserApi = async (userData: any) => {
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

export const idCheckDuplicatesApi = async (userid: any) => {
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

export const verifyEmailApi = async (useremail: any) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/email`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(useremail),
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CheckverifyEmailApi = async (
  useremail: any,
  verificationCode: any
) => {
  console.log(useremail, verificationCode);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/email/${verificationCode}?user_email=${useremail}`,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
