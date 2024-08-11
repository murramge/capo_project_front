import * as React from "react";
import ImageUpload from "../sales/ImageUpload";
import SalesPageHeader from "../sales/SalesPageHeader";
import SalesForm from "../sales/SalesForm";
import useAuthGuard from "@/src/hooks/useAuthGuard";
import SalesFooter from "../sales/SalesFooter";

interface ISalesLayoutProps {}

const SalesLayout: React.FunctionComponent<ISalesLayoutProps> = (props) => {
  // useAuthGuard();
  return (
    <div>
      <div className="p-5">
        <SalesPageHeader></SalesPageHeader>
      </div>
      <div className="flex h-[78vh] p-5">
        <aside className="w-[40%]">
          <ImageUpload></ImageUpload>
        </aside>
        <main className="w-[60%] p-10">
          <SalesForm></SalesForm>
        </main>
      </div>
      <footer>
        <SalesFooter></SalesFooter>
      </footer>
    </div>
  );
};

export default SalesLayout;
