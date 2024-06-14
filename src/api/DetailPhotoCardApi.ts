import axios from "axios";

export const DetailPhotoCardApi = async (cardId: any) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/cards/${cardId}`,
    headers: {
      "Content-Type": "application/json",
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
