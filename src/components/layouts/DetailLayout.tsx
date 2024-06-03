import * as React from "react";
import CardView from "../detail/CardView";

interface IDetailLayoutProps {}

const DetailLayout: React.FunctionComponent<IDetailLayoutProps> = (props) => {
  return (
    <div className="flex">
      <div className="w-[60%]">
        <CardView></CardView>
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
};

export default DetailLayout;
