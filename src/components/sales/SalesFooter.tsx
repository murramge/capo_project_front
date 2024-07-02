import Image from "next/image";
import * as React from "react";

interface ISalesFooterProps {}

const SalesFooter: React.FunctionComponent<ISalesFooterProps> = (props) => {
  return (
    <div className="border-t w-full h-[30px] flex items-center justify-center pt-2">
      <div className="pl-2">
        <Image
          src="/images/speaker.png"
          alt="speaker"
          width={25}
          height={25}></Image>
      </div>

      <div className="bg-contain bg-[url('/images/marqueebackground.png')] overflow-hidden w-full h-[25px]">
        <div className="relative w-[70%]  text-sm font-light font-[galmuri] ">
          <div className="absolute  whitespace-nowrap will-change-transform animate-marquee ">
            <div className="inline-block">☺ ☻ Welcome to capo world! ☻ ☺︎</div>
            <div className="inline-block">
              Sell and buy ​​photo cards of your favorite celebrities at capo!
            </div>
            <div className="inline-block">☺ ☻ ♥︎ 뉴진스 컴백 축하해 ♥ ☺ ☻</div>
            <div className="inline-block">
              ♥︎ 제로베이스원 김지웅 포카 0.05 급처해요 ♥ ☺ ☻
            </div>
            <div className="inline-block">
              Sell and buy ​​photo cards of your favorite celebrities at capo!
            </div>
            <div className="inline-block">
              ☺ ☻ ♥︎ 유라 상점 : 각종 아이돌 희귀 포카 많습니다 ♥ ☺ ☻
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFooter;
