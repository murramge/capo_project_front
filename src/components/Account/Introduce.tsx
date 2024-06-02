import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface IIntroduceProps {}

const Introduce: React.FunctionComponent<IIntroduceProps> = (props) => {
  return (
    <aside className="flex w-6/12 h-screen justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold pb-5">
          <span className={cn("text-primary")}>최애 포토카드 </span>
          거래를 위한 간편 서비스
        </h1>
        <h4 className="text-md text-stone-500 pb-5">
          <p>최애 포카를 얻기 위해 여러 중고사이트를 방문할 필요 있나요?</p>
          <p>
            capo에서 비대면으로 빠르고 간편하게 최애 포토카드를 거래해보세요
          </p>
        </h4>
        <div className="pt-10">
          <Image
            src="/images/testimage.jpg"
            alt="testimage"
            width={500}
            height={400}></Image>
        </div>
      </div>
    </aside>
  );
};

export default Introduce;
