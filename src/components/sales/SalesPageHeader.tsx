import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import { useFormStore } from "../../utils/store";

interface ISalesPageHeaderProps {}

const SalesPageHeader: React.FunctionComponent<ISalesPageHeaderProps> = (
  props
) => {
  const { formData } = useFormStore();

  const handleProductSale = () => {
    console.log("판매 등록:", formData);
  };

  return (
    <div className="flex pb-2 items-center justify-between border-b">
      <h1 className="text-md leading-6 font-bold">포토카드 판매하기</h1>
      <div className="flex gap-2">
        <Button onClick={handleProductSale}>판매하기</Button>
      </div>
    </div>
  );
};

export default SalesPageHeader;
