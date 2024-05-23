import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { cn } from "@/lib/utils";
interface IAuthHeaderProps {}

const AuthHeader: React.FunctionComponent<IAuthHeaderProps> = (props) => {
  return (
    <header className="p-3 flex">
      <Button variant="none">
        <img src="/images/logo.png" alt="logo" width={150} height={48}></img>
      </Button>
      <Input
        icon="/icons/search.png"
        placeholder="키워드로 검색하기"
        className="rounded-full"></Input>
      <div className="flex gap-2 pl-10">
        <Button>포토카드 판매하기</Button>
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
          <img src="/icons/arrowdown.png" width={30}></img>
        </Button>
      </div>
    </header>
  );
};

export default AuthHeader;
