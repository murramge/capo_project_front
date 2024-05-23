import * as React from "react";
import Introduce from "../component/Account/Introduce";
import LoginForm from "../component/Account/LoginForm";
import RegisterForm from "../component/Account/RegisterForm"; // 새로운 회원가입 컴포넌트 추가
import { usePathname } from "next/navigation";

const AccountLayout: React.FunctionComponent = () => {
  const path = usePathname();

  return (
    <div className="flex">
      <Introduce />
      {path === "/auth/login" && <LoginForm />}
      {path === "/auth/register" && <RegisterForm />}
    </div>
  );
};

export default AccountLayout;
