import * as React from "react";

import LoginForm from "../Account/LoginForm";
import RegisterLayout from "./RegisterLayout";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Heart {
  id: number;
  top: string;
  left: string;
  visible: boolean;
  delay: number;
}

interface Props {
  heartCount: number; // heartCount props 타입 정의
}

const AccountLayout: React.FunctionComponent<Props> = ({ heartCount }) => {
  const path = usePathname();

  const [hearts, setHearts] = React.useState<Heart[]>([]);

  // 초기화 및 애니메이션 시작 함수
  const initializeHearts = React.useCallback(() => {
    const newHearts: Heart[] = [];
    const showHearts = (index: number) => {
      if (index >= heartCount) return;

      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.map((heart, idx) =>
            idx === index ? { ...heart, visible: true } : heart
          )
        );
        showHearts(index + 1);
      }, newHearts[index].delay);
    };

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        top: `${Math.random() * 90}vh`,
        left: `${Math.random() * 80}vw`,
        visible: false,
        delay: Math.random() * 2000,
      });
    }
    setHearts(newHearts);

    showHearts(0);
  }, [heartCount]);

  React.useEffect(() => {
    initializeHearts();
  }, [initializeHearts, heartCount]);

  return (
    <div className="flex  justify-center items-center bg-[url('/images/contents.png')] bg-cover h-screen">
      <div className="heart-container relative w-[500px] h-[100%] pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute w-14 h-12 bg-center bg-no-repeat bg-cover bg-[url('/images/heart.png')] ${
              heart.visible ? "opacity-1" : "opacity-0"
            }`}
            style={{
              top: heart.top,
              left: heart.left,
              transition: "opacity 0.5s ease-in-out", // 투명도 전환 효과 적용
            }}></div>
        ))}
      </div>
      <Image
        src={"/images/authbackground.png"}
        alt="bg"
        width={500}
        height={200}></Image>
      <div className="absolute inset-0 flex justify-center items-center  pointer-events-auto">
        {path === "/auth/login" ? <LoginForm /> : <RegisterLayout />}
      </div>
      <div className="heart-container relative w-[500px] h-[100%] pointer-events-none"></div>
    </div>
  );
};

export default AccountLayout;
