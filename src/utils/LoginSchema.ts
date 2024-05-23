import { z } from "zod";

export const loginSchema = z.object({
  userid: z.string(),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,16}$/,
      "비밀번호는 숫자, 특수문자, 대소문자를 포함하여 8-16자여야 함."
    ),
});
