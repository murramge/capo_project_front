import Image from "next/image";
import * as React from "react";

interface IMyStoreProps {}

const MyStore: React.FunctionComponent<IMyStoreProps> = (props) => {
  return (
    <div className="w-full relative h-[200px] bg-[url('/images/mystorebackground.png')] bg-contain">
      <div className="absolute px-16 h-96 bg-white m-10 mt-20 rounded-xl drop-shadow-lg">
        <Image
          src="/images/profile.png"
          alt="profile"
          width={50}
          height={50}
          className="pt-10"></Image>
      </div>
    </div>
  );
};

export default MyStore;
