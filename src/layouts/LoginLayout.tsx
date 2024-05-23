import * as React from "react";
import Introduce from "../component/Login/Introduce";
import LoginForm from "../component/Login/LoginForm";

interface ILoginLayoutProps {}

const LoginLayout: React.FunctionComponent<ILoginLayoutProps> = (props) => {
  return (
    <>
      <div className="flex">
        <Introduce></Introduce>
        <LoginForm></LoginForm>
      </div>
    </>
  );
};

export default LoginLayout;
