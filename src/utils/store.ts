import { create } from "zustand";
import { z } from "zod";
import { ProductSchema } from "@/src/utils/ProductSchema";

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
