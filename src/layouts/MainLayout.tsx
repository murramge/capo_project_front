import * as React from "react";
import Category from "../component/main/Category";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <div>
      <Category></Category>
    </div>
  );
};

export default MainLayout;
