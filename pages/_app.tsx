import AuthHeader from "@/src/common/header/AuthHeader";
import UnAuthHeader from "@/src/common/header/UnAuthHeader";
import useAuthGuard from "@/src/hooks/useAuthGuard";
import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useAuthGuard();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [router.pathname]);
  return (
    <>
      {isAuthenticated ? <AuthHeader /> : <UnAuthHeader />}
      <Component {...pageProps} />
    </>
  );
}
