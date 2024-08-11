import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import * as React from "react";
import Image from "next/image";

interface IUnAuthHeaderProps {}

const UnAuthHeader: React.FunctionComponent<IUnAuthHeaderProps> = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    console.log("검색어:", searchValue);
    // 여기에서 검색 로직을 추가하면 됩니다.
  };

  return (
    <header className="p-3 flex">
      <Button variant="none" onClick={() => router.push("/")}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={48}></Image>
      </Button>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        icon="/icons/search.png"
        placeholder="검색어를 입력해주세요"
        className="rounded-full"></Input>
      <div className="flex gap-2 pl-10">
        <Button onClick={() => router.push("/photocard/sales")}>
          포토카드 판매하기
        </Button>
        <Button variant="outline" onClick={() => router.push("/auth/login")}>
          로그인
        </Button>
        <Button variant="outline" onClick={() => router.push("/auth/register")}>
          회원가입
        </Button>
      </div>
    </header>
  );
};

export default UnAuthHeader;
