import { z } from "zod";

export const ProductSchema = z.object({
  productname: z
    .string()
    .min(2, { message: "상품명은 최소 2글자 이상이어야 합니다" }),
  category: z.string({ message: "카테고리는 필수 입력 항목입니다." }),
  transaction: z.string({ message: "거래방식은 필수 입력 항목입니다." }),
  description: z
    .string()
    .min(10, { message: "설명은 최소 10글자 이상이어야 합니다." }),
  price: z
    .number()
    .min(0, { message: "가격은 숫자이어야 하며 0보다 커야 합니다." }),
  thumbnail_id: z.string(),
  images: z.array(z.string()),
});
