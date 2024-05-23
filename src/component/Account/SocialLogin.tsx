import { Button } from "@/components/ui/button";
import * as React from "react";

interface ISocialLoginProps {}

const SocialLogin: React.FunctionComponent<ISocialLoginProps> = (props) => {
  return (
    <>
      <span className="flex text-xs text-gray-400 justify-center pt-5">
        또는 아래 계정으로 간편 로그인하기
      </span>
      <div className="flex justify-center p-5">
        <Button variant="none">
          <img
            src="/icons/google.png"
            alt="google"
            width={110}
            height={48}></img>
        </Button>
        <Button variant="none">
          <img src="/icons/kakao.png" alt="kakao" width={110} height={48}></img>
        </Button>
        <Button variant="none">
          <img src="/icons/naver.png" alt="naver" width={110} height={48}></img>
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
