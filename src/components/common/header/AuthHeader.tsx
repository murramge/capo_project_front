import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as React from "react";
import Image from "next/image";
import { usePhotoCardStore } from "@/src/utils/store";

import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
interface IAuthHeaderProps {}

const AuthHeader: React.FunctionComponent<IAuthHeaderProps> = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const { setSearchTerm, searchData } = usePhotoCardStore();
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    setSearchTerm(searchValue);
    searchData(searchValue);
  };
  return (
    <header className="p-3 flex ">
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
        <Button variant="outline">
          <div className={cn("px-2.5 py-0.5 bg-primary rounded-full mr-1")}>
            <span className="text-xs text-white">1</span>
          </div>
          채팅하기
        </Button>
        <Button variant="outline">
          <div className={cn("p-3 bg-primary rounded-full mr-1")}></div>
          프로필
        </Button>
        <Button onClick={() => router.push("/photocard/sales")}>
          포토카드 판매하기
        </Button>
      </div>
    </header>
  );
};

export default AuthHeader;
