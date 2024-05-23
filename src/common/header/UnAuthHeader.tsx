import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";

interface IUnAuthHeaderProps {}

const UnAuthHeader: React.FunctionComponent<IUnAuthHeaderProps> = (props) => {
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
        <Button variant="outline">로그인</Button>
        <Button variant="outline">회원가입</Button>
      </div>
    </header>
  );
};

export default UnAuthHeader;
