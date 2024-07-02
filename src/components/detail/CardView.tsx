import * as React from "react";
import { usePathname } from "next/navigation";
import { DetailPhotoCardApi } from "@/src/api/DetailPhotoCardApi";
import { fileDownloadApi } from "@/src/api/GetPhotoCardListApi";
import Image from "next/image";
import { cn } from "@/lib/utils";

import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import Loading from "../common/Loading";
interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/")[2] : null;
  const [data, setData] = React.useState<any>(null);
  const [url, setUrl] = React.useState<string>("");
  const keyword = [
    "키워드",
    "키워드",
    "키워드",
    "키워드",
    "키워드",
    "키워드",
    "키워드",
    "키워드",
  ];

  React.useEffect(() => {
    if (!id) return; // id가 null인 경우 API 호출을 하지 않습니다.

    const fetchData = async () => {
      try {
        const response = await DetailPhotoCardApi(id);
        setData(response.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  React.useEffect(() => {
    if (!data || !data.images || data.images.length === 0) return; // data가 유효하지 않은 경우 처리하지 않습니다.

    const downloadData = async () => {
      try {
        const response = await fileDownloadApi(data.images[0].id);
        setUrl(response.result.image_url);
      } catch (error) {
        console.log(error);
      }
    };
    downloadData();
  }, [data]);

  if (!data) {
    return (
      <div>
        <Loading></Loading>
      </div>
    ); // 데이터가 없을 때 로딩 상태 표시
  }

  return (
    <div className="flex my-10 border-t px-40 py-10">
      <div className="w-[60%]">
        <div>
          <div>
            <div className="flex">
              {url && (
                <Image
                  src={url}
                  alt="image"
                  width={280}
                  height={600}
                  className="rounded-xl"
                />
              )}
              <div className="px-10">
                <p className="text-2xl font-bold">{data.title}</p>
                <p className={cn("text-3xl text-primary py-2 font-bold")}>
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </p>
                <p className="text-[18px] py-5">{data.content}</p>
                <div className="grid grid-cols-6 gap-2">
                  {keyword.map((word, index) => (
                    <div className="p-1 border rounded-md" key={index}>
                      <span className="text-sm text-gray-500">#{word}</span>
                    </div>
                  ))}
                </div>
                <div className="flex pt-10 text-sm text-gray-500">
                  <p className="pr-1">
                    {dayjs(data.created_at).format("YY.MM.DD")}
                  </p>
                  <p className="pr-1"> · </p>
                  <p>조회수 {data.views}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%]">
        <div className="w-[80%] flex items-center gap-5 p-2.5 border rounded-full border-gray-300 mb-5">
          <div className="px-2">
            <Image
              src="/icons/likeicon.png"
              alt="like"
              width={18}
              height={16}></Image>
          </div>
          <div className="w-[80%] flex justify-between">
            <span>좋아요</span>
            <p>{data.views}</p>
          </div>
        </div>
        <Button
          size="lg"
          className="w-[80%] flex items-center gap-5 p-3 rounded-full mb-20">
          <span className="text-lg">채팅하기</span>
        </Button>
        <div className="w-[80%] px-2 py-1 border-b">
          <span className="text-sm font-bold">판매자의 포카상점</span>
        </div>
        <div className="flex items-center mt-5">
          <div className={cn("p-4 bg-primary rounded-full w-1")}></div>
          <span className="px-2">{data.member.nickname}</span>
        </div>
      </div>
    </div>
  );
};

export default CardView;
