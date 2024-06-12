import axios from "axios";

export const GetPhotoCardListApi = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  try {
    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fileDownloadApi = async (fileId: any) => {
  const refreshToken = localStorage.getItem("refreshToken");
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/file/${fileId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  try {
    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchPhotoCardListApi = async (searchvalue: any) => {
  const refreshToken = localStorage.getItem("refreshToken");
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards?search=${searchvalue}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
