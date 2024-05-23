import UnAuthHeader from "@/src/common/header/UnAuthHeader";
import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";

//TODO : Header 예외처리주기

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UnAuthHeader></UnAuthHeader>
      <Component {...pageProps} />
    </>
  );
}
