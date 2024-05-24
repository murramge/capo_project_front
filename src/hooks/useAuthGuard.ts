import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("accessToken");
    if (!isAuthenticated && !router.pathname.startsWith("/auth")) {
      router.push("/auth/login");
    }
  }, []);
};

export default useAuthGuard;
