import UnAuthHeader from "@/src/common/header/UnAuthHeader";
import Introduce from "@/src/component/Login/Introduce";
import LoginForm from "@/src/component/Login/LoginForm";
import LoginLayout from "@/src/layouts/LoginLayout";
import * as React from "react";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return <LoginLayout></LoginLayout>;
};

export default Login;
