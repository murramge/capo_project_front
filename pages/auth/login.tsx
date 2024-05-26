import { useLoginGuard } from "@/src/hooks/useAuthGuard";
import AccountLayout from "@/src/layouts/AccountLayout";

import * as React from "react";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  useLoginGuard();
  return <AccountLayout></AccountLayout>;
};

export default Login;
