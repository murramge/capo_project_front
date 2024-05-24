import AuthHeader from "@/src/common/header/AuthHeader";
import UnAuthHeader from "@/src/common/header/UnAuthHeader";
import useAuthGuard from "@/src/hooks/useAuthGuard";
import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";

//TODO : Header 예외처리주기

export default function App({ Component, pageProps }: AppProps) {
  useAuthGuard();

  const isAuthenticated =
    typeof window !== "undefined" && !!localStorage.getItem("accessToken");
  return (
    <>
      {isAuthenticated ? <AuthHeader /> : <UnAuthHeader />}
      <Component {...pageProps} />
    </>
  );
}
