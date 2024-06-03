import { cn } from "@/lib/utils";
import { GetPhotoCardListApi } from "@/src/api/GetPhotoCardListApi";
import Image from "next/image";
import * as React from "react";
import dayjs from "dayjs";

interface IProduct {
  id: string;
  content: string;
  created_at: string;
  views: number;
  price: number;
}

interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  const [data, setData] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await GetPhotoCardListApi();
      setData(response.result.products);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((item, index) => (
            <div key={item.id || index}>
              <div>
                <Image
                  src="/images/samplephotocard.png"
                  alt="sample"
                  width={230}
                  height={310}
                  className="rounded-xl"
                />
                <div className="p-2">
                  <p className={cn("text-primary text-xl font-medium")}>
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </p>
                  <p className="text-md font-medium">{item.content}</p>
                  <div className="flex text-xs text-gray-400">
                    <p className="pr-1">
                      {dayjs(item.created_at).format("YY.MM.DD")}
                    </p>
                    <p className="pr-1"> · </p>
                    <p className="pr-1">좋아요 0</p>
                    <p className="pr-1"> · </p>
                    <p>조회수 {item.views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardView;
