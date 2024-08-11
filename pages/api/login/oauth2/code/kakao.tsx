import { useEffect } from "react";
import { useRouter } from "next/router";

const KakaoCallback = () => {
  const router = useRouter();
  const { code } = router.query;

  const getToken = async () => {
    try {
      const response = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
          redirect_uri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`,
          code: code as string,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch token");
      }

      const data = await response.json();
      localStorage.setItem("kakao_token", data.access_token);
      sendToken();
    } catch (err) {
      console.error("Error fetching Kakao token:", err);
    }
  };

  const sendToken = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("kakao_token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to authenticate with server");
      }

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      router.push("/"); // 로그인 후 홈 페이지로 리디렉션
    } catch (err) {
      console.error("Error sending token to server:", err);
    }
  };

  useEffect(() => {
    if (code) {
      getToken();
    }
  }, [code]);

  return <h2>로그인 중입니다..</h2>;
};

export default KakaoCallback;
