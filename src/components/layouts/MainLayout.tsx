import * as React from "react";
import Category from "../main/Category";
import CardView from "../main/CardView";
import SortCategory from "../main/SortCategory";
import {useEffect} from "react";
import {Cookies} from "react-cookie";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {

    useEffect(() => {
        const cookies = new Cookies();
        const userToken = cookies.get("accessToken");
        if (userToken) {
            localStorage.setItem('accessToken', userToken)
        }
    }, []);

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
