import axios from "axios";

export const GetPhotoCardListApi = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fileDownloadApi = async (fileId: any) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/file/${fileId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchPhotoCardListApi = async (searchvalue: any) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards?search=${searchvalue}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CategoryCardListApi = async (categoryName: any) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards?category=${categoryName}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
