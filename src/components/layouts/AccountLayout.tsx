import * as React from "react";

import LoginForm from "../Account/LoginForm";
import RegisterForm from "../Account/RegisterForm"; // 새로운 회원가입 컴포넌트 추가
import { usePathname } from "next/navigation";
import Image from "next/image";

const AccountLayout: React.FunctionComponent = () => {
  const path = usePathname();

  return (
    <div className="flex relative justify-center items-center bg-[url('/images/contents.png')] bg-cover h-screen">
      <div className="heart-container relative w-40 h-40 pointer-events-none">
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "0px", left: "0px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "100px", right: "300px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "40px", right: "500px" }}></div>
      </div>
      <Image
        src={"/images/authbackground.png"}
        alt="bg"
        width={500}
        height={200}></Image>
      <div className="absolute inset-0 flex justify-center items-center  pointer-events-auto">
        {path === "/auth/login" ? <LoginForm /> : <RegisterForm />}
      </div>
      <div className="heart-container relative w-40 h-40 pointer-events-none">
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "100px", left: "100px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "150px", left: "200px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "200px", left: "300px" }}></div>

        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "50px", left: "350px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "20px", left: "0px" }}></div>
        <div
          className="heart absolute w-14 h-12 bg-[url('/images/heart.png')] animate-bounce"
          style={{ top: "0px", left: "500px" }}></div>
      </div>
    </div>
  );
};

export default AccountLayout;
