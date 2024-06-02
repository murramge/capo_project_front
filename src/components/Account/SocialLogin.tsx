import { Button } from "@/components/ui/button";
import * as React from "react";
import Image from "next/image";

interface ISocialLoginProps {}

const SocialLogin: React.FunctionComponent<ISocialLoginProps> = (props) => {
  return (
    <>
      <span className="flex text-xs text-gray-400 justify-center pt-5">
        또는 아래 계정으로 간편 로그인하기
      </span>
      <div className="flex justify-center p-5">
        <Button variant="none">
          <Image
            src="/icons/google.png"
            alt="google"
            width={110}
            height={48}></Image>
        </Button>
        <Button variant="none">
          <Image
            src="/icons/kakao.png"
            alt="kakao"
            width={110}
            height={48}></Image>
        </Button>
        <Button variant="none">
          <Image
            src="/icons/naver.png"
            alt="naver"
            width={110}
            height={48}></Image>
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
