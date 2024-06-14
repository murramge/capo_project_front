import { create } from "zustand";
import { z } from "zod";
import { ProductSchema } from "@/src/utils/ProductSchema";
import {
  CategoryCardListApi,
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

interface PhotoCardStore {
  data: any[];
  searchTerm: string;
  categoryName: string;
  setSearchTerm: (term: string) => void;
  setCategoryName: (name: string) => void;
  fetchData: () => Promise<void>;
  searchData: (term: string) => Promise<void>;
  categoryData: (name: string) => Promise<void>;
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

export const usePhotoCardStore = create<PhotoCardStore>((set) => ({
  data: [],
  searchTerm: "",
  categoryName: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
  setCategoryName: (name: string) => set({ categoryName: name }),
  fetchData: async () => {
    try {
      const response = await GetPhotoCardListApi();
      set({ data: response.result.products });
    } catch (error) {
      console.error(error);
    }
  },
  searchData: async (searchTerm: string) => {
    try {
      const response = await SearchPhotoCardListApi(searchTerm);
      set({ data: response.result.products });
    } catch (error) {
      console.error(error);
    }
  },
  categoryData: async (categoryName: string) => {
    try {
      const response = await CategoryCardListApi(categoryName);
      set({ data: response.result.products });
    } catch (error) {
      console.error(error);
    }
  },
}));
