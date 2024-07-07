import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { leftArrow, rightArrow } from "@/src/utils/constants";
import Image from "next/image";
import * as React from "react";

interface ICategoryCardListViewProps {}

const CategoryCardListView: React.FunctionComponent<
  ICategoryCardListViewProps
> = (props) => {
  return (
    <div className="p-10">
      <div className="border rounded-xl flex">
        <div className={cn("bg-primary rounded-l-xl")}>
          <div className="p-6">
            <Image
              src="/images/eyesicon.png"
              alt="eyes"
              width={30}
              height={30}></Image>
            <div className="font-[GalmuriBold] text-white pt-4 text-sm tracking-wider ">
              <p className="pb-1">LET’S FIND YOUR</p>
              <p className="pb-1">PHOTOCARD IN THE</p>
              <p>SAME CATEGORY!</p>
            </div>
            <div>
              <div className="text-white flex pt-20">
                <Button>
                  <span className="font-[Galmuri] text-4xl">{leftArrow}</span>
                </Button>
                <span className="font-[GalmuriBold] text-xl mt-1"> 1 / 3 </span>
                <Button>
                  <span className="font-[Galmuri] text-4xl">{rightArrow}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 flex">
          <div className="mr-2">
            <Image
              src="/images/samplephotocard.png"
              alt="samplephotocard"
              width={120}
              height={200}
              className="rounded-xl"></Image>
            <div className="py-1">
              <span className={cn("text-primary font-extrabold")}>3,000원</span>
              <div className="max-w-[130px]  text-wrap text-sm">
                포토카드 이름 자리 입니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardListView;
