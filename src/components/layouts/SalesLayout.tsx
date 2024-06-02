import * as React from "react";
import ImageUpload from "../sales/ImageUpload";
import SalesPageHeader from "../sales/SalesPageHeader";
import SalesForm from "../sales/SalesForm";

interface ISalesLayoutProps {}

const SalesLayout: React.FunctionComponent<ISalesLayoutProps> = (props) => {
  return (
    <div className="p-5">
      <SalesPageHeader></SalesPageHeader>
      <div className="flex">
        <aside className="w-[40%]">
          <ImageUpload></ImageUpload>
        </aside>
        <main className="w-[60%] p-10">
          <SalesForm></SalesForm>
        </main>
      </div>
    </div>
  );
};

export default SalesLayout;
