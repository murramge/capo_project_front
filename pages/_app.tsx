import AuthHeader from "@/src/components/common/header/AuthHeader";
import UnAuthHeader from "@/src/components/common/header/UnAuthHeader";
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
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [router.pathname]);
  return (
    <>
      {isAuthenticated ? <AuthHeader /> : <></>}
      <Component {...pageProps} />
    </>
  );
}
