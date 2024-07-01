import { useLoginGuard } from "@/src/hooks/useAuthGuard";
import AccountLayout from "@/src/components/layouts/AccountLayout";

import * as React from "react";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  useLoginGuard();
  return <AccountLayout heartCount={6} />;
};

export default Login;
