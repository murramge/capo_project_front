import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthGuard = () => {
  // useEffect(() => {
  //   const isAuthenticated = !!localStorage.getItem("refreshToken");
  //   if (!isAuthenticated && !router.pathname.startsWith("/auth")) {
  //     router.push("/auth/login");
  //   }
  // }, []);
};

export const useLoginGuard = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   if (refreshToken) {
  //     router.replace("/");
  //   }
  // }, []);
};

export default useAuthGuard;
