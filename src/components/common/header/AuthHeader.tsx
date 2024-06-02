import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface IAuthHeaderProps {}

const AuthHeader: React.FunctionComponent<IAuthHeaderProps> = (props) => {
  return (
    <header className="p-3 flex">
      <Button variant="none">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={48}></Image>
      </Button>
      <Input
        icon="/icons/search.png"
        placeholder="키워드로 검색하기"
        className="rounded-full"></Input>
      <div className="flex gap-2 pl-10">
        <Button variant="outline">
          <div
            className={cn(
              "bg-primary w-6 h-6 rounded-full text-white p-1 mr-1 text-xs"
            )}>
            99
          </div>
          채팅하기
        </Button>
        <Button variant="outline">
          <div
            className={cn(
              "bg-primary w-14 h-6 rounded-full text-white p-1 mr-1 text-xs"
            )}></div>
          <Image
            src="/icons/arrowdown.png"
            alt="arrowdown"
            width={30}
            height={30}></Image>
        </Button>
        <Button>포토카드 판매하기</Button>
      </div>
    </header>
  );
};

export default AuthHeader;
