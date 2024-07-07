import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";

interface IWelcomeCapoProps {
  userid?: string; //TODO: test로 해놓음. 나중에 ?: -> : 로 해야함
}

const WelcomeCapo: React.FunctionComponent<IWelcomeCapoProps> = ({
  userid = "youmay",
}) => {
  const router = useRouter();
  return (
    <div>
      <Image
        src={"/images/welcomecapo.png"}
        alt="welcomecapo"
        width={400}
        height={200}></Image>
      <p className="text-center mt-5 font-bold">
        <span className={cn(" text-primary")}>{userid}</span>
        <span> 님</span>
      </p>
      <p className="text-center mb-5 font-bold">
        <span>CAPO에 오신 걸 환영합니다!</span>
      </p>
      <div className="flex justify-center items-center pt-5">
        <Button className="w-[80%]" onClick={() => router.push(`/auth/login`)}>
          로그인
        </Button>
      </div>
      <div className="flex justify-center items-center pt-2">
        <Button
          variant="none"
          className={cn(" text-primary underline")}
          onClick={() => router.push(`/`)}>
          메인
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCapo;
