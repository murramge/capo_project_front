import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  localStorage.removeItem("accessToken");
  router.push("/login");
};

export default Logout;
