import useAuthGuard from "@/src/hooks/useAuthGuard";
import AccountLayout from "@/src/layouts/AccountLayout";
import * as React from "react";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  useAuthGuard();
  return <AccountLayout></AccountLayout>;
};

export default Register;
