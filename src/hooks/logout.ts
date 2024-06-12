import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  localStorage.removeItem("refreshToken");
  router.push("/login");
};

export default Logout;
