import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";

interface ISortCategoryProps {}

const SortCategory: React.FunctionComponent<ISortCategoryProps> = (props) => {
  const [selectedButton, setSelectedButton] = React.useState("최신순");

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="relative">
      <Image
        src="/images/sortbackground.png"
        alt="sortbackground"
        width={73}
        height={200}
        className="absolute inset-0"
      />
      <div className="absolute w-[73px]">
        <Button
          variant="none"
          size="sm"
          className={`px-4 pt-6 ${
            selectedButton === "최신순" ? "text-white" : "text-[#FFFFFF99]"
          }`}
          onClick={() => handleButtonClick("최신순")}>
          최신순
        </Button>
        <Button
          variant="none"
          size="sm"
          className={`px-4 pt-2 ${
            selectedButton === "인기순" ? "text-white" : "text-[#FFFFFF99]"
          }`}
          onClick={() => handleButtonClick("인기순")}>
          인기순
        </Button>
        <Button
          variant="none"
          size="sm"
          className={`px-4 pt-2 ${
            selectedButton === "조회순" ? "text-white" : "text-[#FFFFFF99]"
          }`}
          onClick={() => handleButtonClick("조회순")}>
          조회순
        </Button>
        <Button
          variant="none"
          size="sm"
          className={`px-4 pt-2 ${
            selectedButton === "고가순" ? "text-white" : "text-[#FFFFFF99]"
          }`}
          onClick={() => handleButtonClick("고가순")}>
          고가순
        </Button>
        <Button
          variant="none"
          size="sm"
          className={`px-4 pt-2 ${
            selectedButton === "저가순" ? "text-white" : "text-[#FFFFFF99]"
          }`}
          onClick={() => handleButtonClick("저가순")}>
          저가순
        </Button>
      </div>
    </div>
  );
};

export default SortCategory;
