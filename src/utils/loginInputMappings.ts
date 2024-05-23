interface IregisterInputValue {
  type: "text" | "password";
  name: "userid" | "password";
  label: "아이디" | "비밀번호";
}

export const loginInputValue: IregisterInputValue[] = [
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
];
