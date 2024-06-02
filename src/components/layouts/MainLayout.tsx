import * as React from "react";
import Category from "../main/Category";
import CardView from "../main/CardView";
import SortCategory from "../main/SortCategory";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <div className="flex">
      <aside className="w-[20%]">
        <Category></Category>
      </aside>
      <main className="w-[70%]">
        <CardView></CardView>
      </main>
      <aside className="w-[10%]">
        <SortCategory></SortCategory>
      </aside>
    </div>
  );
};

export default MainLayout;
