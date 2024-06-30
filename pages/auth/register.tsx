import { useLoginGuard } from "@/src/hooks/useAuthGuard";
import AccountLayout from "@/src/components/layouts/AccountLayout";
import * as React from "react";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  useLoginGuard();
  return <AccountLayout heartCount={12} />;
};

export default Register;
