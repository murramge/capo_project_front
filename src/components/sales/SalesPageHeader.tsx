import { Button } from "@/components/ui/button";
import * as React from "react";
import { useFormStore } from "../../utils/store";
import { CreatePhotocardApi } from "@/src/api/CreatePhotoCardApi";
import { useRouter } from "next/router";

interface ISalesPageHeaderProps {}

const SalesPageHeader: React.FunctionComponent<ISalesPageHeaderProps> = (
  props
) => {
  const { formData, thumbnailId, imageId } = useFormStore();
  const router = useRouter();
  const handleProductSale = async () => {
    try {
      const response = await CreatePhotocardApi({
        title: formData.productname,
        content: formData.description,
        category: formData.category,
        price: formData.price,
        thumbnail_id: thumbnailId,
        images: [imageId],
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
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
