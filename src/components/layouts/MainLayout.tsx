import * as React from "react";
import Category from "../main/Category";
import CardView from "../main/CardView";
import SortCategory from "../main/SortCategory";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <div className="flex pt-5">
      <aside className="w-[13%] pl-5">
        <Category></Category>
      </aside>
      <main className="w-[85%] flex justify-center items-center">
        <CardView></CardView>
      </main>
      <aside className="w-[5%]">
        <SortCategory></SortCategory>
      </aside>
    </div>
  );
};

export default MainLayout;
