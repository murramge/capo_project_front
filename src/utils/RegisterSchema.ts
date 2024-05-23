import { z } from "zod";

export const registerSchema = z
  .object({
    userid: z.string(),
    email: z.string().email("유효하지 않은 이메일 주소입니다."),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/,
        "비밀번호는 숫자, 특수문자, 대소문자를 포함하여 8-16자여야 함."
      ),
    confirmPassword: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/,
        "비밀번호는 숫자, 특수문자, 대소문자를 포함하여 8-16자여야 함."
      ),
    phoneNumber: z
      .string()
      .regex(/^01[0-9]{9}$/, "유효하지 않은 전화번호 형식입니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });
