interface IregisterInputValue {
  type: "text" | "email" | "password";
  name: "userid" | "email" | "password" | "confirmPassword" | "phoneNumber";
  label: "아이디" | "이메일" | "비밀번호" | "비밀번호확인" | "휴대폰번호";
}

export const registerInputValue: IregisterInputValue[] = [
  {
    type: "text",
    name: "userid",
    label: "아이디",
  },
  {
    type: "email",
    name: "email",
    label: "이메일",
  },
  {
    type: "password",
    name: "password",
    label: "비밀번호",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "비밀번호확인",
  },
  {
    type: "text",
    name: "phoneNumber",
    label: "휴대폰번호",
  },
];
