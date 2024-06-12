import { cn } from "@/lib/utils";
import {
  GetPhotoCardListApi,
  fileDownloadApi,
} from "@/src/api/GetPhotoCardListApi";
import Image from "next/image";
import * as React from "react";
import dayjs from "dayjs";
import { usePhotoCardStore } from "@/src/utils/store";

interface IProduct {
  id: string;
  content: string;
  created_at: string;
  views: number;
  price: number;
}

interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  const [url, setUrl] = React.useState<string[]>([]);

  const { data, fetchData } = usePhotoCardStore();

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const downloadData = async () => {
      const imageUrls = await Promise.all(
        data.map(async (d) => {
          const response = await fileDownloadApi(d.images[0].id);
          return response.result.image_url;
        })
      );
      setUrl(imageUrls); // 모든 이미지 URL을 한 번에 설정
    };
    downloadData();
  }, [data]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((item, index) => (
            <div key={item.id || index}>
              <div>
                <Image
                  src={url[index] ? `${url[index]}` : `/images/skleton.png`}
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
                  <p className="text-md font-medium">{item.title}</p>
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
