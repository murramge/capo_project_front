import Image from "next/image";
import * as React from "react";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  const images = [
    "/images/LoadingImage/loading1.png",
    "/images/LoadingImage/loading2.png",
    "/images/LoadingImage/loading3.png",
    "/images/LoadingImage/loading4.png",
    "/images/LoadingImage/loading5.png",
    "/images/LoadingImage/loading6.png",
  ];
  return (
    <div className="flex justify-center h-screen ">
      <div className="relative w-[200px] h-[100px]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="loadingimage"
            className="absolute inset-0 w-full h-full animate-slide"
            style={{ animationDelay: `${index * 0.5}s` }}
            width={200}
            height={100}></Image>
        ))}
      </div>
    </div>
  );
};

export default Loading;
