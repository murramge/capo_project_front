import { Button } from "@/components/ui/button";
import * as React from "react";
import Image from "next/image";

interface ISocialLoginProps {}

const SocialLogin: React.FunctionComponent<ISocialLoginProps> = (props) => {
  const KakaoLogin = () => {
    const client_id = `${process.env.NEXT_KAKAO_CLIENT_ID}`;
    const redirect_uri = `${process.env.NEXT_KAKAO_REDIRECT_URL}`;

    const url = `https://kauth.kakao.com/oauth/authorize?scope=account_email&client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

    window.location.href = url;
  };

  const GoogleLogin = () => {
    const client_id = `${process.env.NEXT_GOOGLE_CLIENT_ID}`;
    const redirect_uri = "/";

    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${redirect_uri}&client_id=${client_id}`;
    window.location.href = url;
  };

  return (
    <>
      <span className="flex text-xs text-gray-400 justify-center pt-5">
        또는 아래 계정으로 간편 로그인하기
      </span>
      <div className="flex justify-center p-5">
        <Button variant="none" onClick={GoogleLogin}>
          <Image
            src="/icons/google.png"
            alt="google"
            width={110}
            height={48}></Image>
        </Button>
        <Button variant="none" onClick={KakaoLogin}>
          <Image
            src="/icons/kakao.png"
            alt="kakao"
            width={110}
            height={48}></Image>
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
