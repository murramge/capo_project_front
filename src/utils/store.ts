import { create } from "zustand";
import { z } from "zod";
import { ProductSchema } from "@/src/utils/ProductSchema";
import {
  GetPhotoCardListApi,
  SearchPhotoCardListApi,
} from "../api/GetPhotoCardListApi";

interface FormState {
  formData: z.infer<typeof ProductSchema>;
  setFormData: (data: z.infer<typeof ProductSchema>) => void;
  thumbnailId: string;
  setThumbnailId: (id: string) => void;
  imageId: string;
  setImageId: (id: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formData: {
    productname: "",
    category: "",
    transaction: "",
    description: "",
    price: undefined,
  },
  setFormData: (data) => set({ formData: data }),
  thumbnailId: "",
  setThumbnailId: (id) => set({ thumbnailId: id }),
  imageId: "",
  setImageId: (id) => set({ imageId: id }),
}));

export const usePhotoCardStore = create((set) => ({
  data: [],
  searchTerm: "",
  setSearchTerm: (term: any) => set({ searchTerm: term }),
  fetchData: async () => {
    try {
      const response = await GetPhotoCardListApi();
      console.log(response);
      set({ data: response.result.products });
    } catch (error) {
      console.error(error);
    }
  },
  searchData: async (searchTerm: any) => {
    try {
      const response = await SearchPhotoCardListApi(searchTerm);
      console.log(response);
      set({ data: response.result.products });
    } catch (error) {
      console.error(error);
    }
  },
}));
