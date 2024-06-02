import { cn } from "@/lib/utils";
import { GetPhotoCardListApi } from "@/src/api/GetPhotoCardListApi";
import Image from "next/image";
import * as React from "react";
import dayjs from "dayjs";

interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await GetPhotoCardListApi();
      setData(response.result.products);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 pt-10 ">
        {data &&
          data.map((item) => (
            <div>
              <div>
                <Image
                  src="/images/samplephotocard.png"
                  alt="sample"
                  width={250}
                  height={310}
                  className="rounded-xl"></Image>
                {/* <img
          src="https://storage.googleapis.com/storage/v1/b/photocard-f2e87.appspot.com/o/thumb_000011ef-2114-2434-a03e-b993b6a0e8dd"
          width={256}
          height={256}
          alt="Your image description"
        /> */}
                <div className="p-2">
                  <p className={cn("text-primary text-xl font-medium")}>
                    {item?.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </p>
                  <p className="text-md font-medium">{item?.content}</p>
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
