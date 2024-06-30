interface IregisterInputValue {
  type: "text" | "password";
  name: "userid" | "password" | "confirmPassword" | "phoneNumber";
  label: "아이디" | "이메일" | "비밀번호" | "비밀번호확인" | "휴대폰번호";
}

interface IregisterAuthInputValue {
  type: "email" | "text";
  name: "email" | "code";
  label: "이메일" | "인증번호";
}

export const registerInputValue: IregisterInputValue[] = [
  {
    type: "text",
    name: "userid",
    label: "아이디",
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

export const registerAuthInputvalue: IregisterAuthInputValue[] = [
  { type: "email", name: "email", label: "이메일" },
  { type: "text", name: "code", label: "인증번호" },
];
