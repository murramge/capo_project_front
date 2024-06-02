import axios from "axios";

export const uploadFileApi = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  const accessToken = localStorage.getItem("accessToken");
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/file`,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
    data: formData,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
