import { CATEGORY } from "@/src/utils/constants";
import * as React from "react";

interface ICategoryProps {}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  const [categoryActive, setCategoryActive] = React.useState("");
  const onClickCategory = (e) => {
    const name = e.target.attributes["data-name"].value;
    categoryActive === name ? setCategoryActive("") : setCategoryActive(name);
  };

  return (
    <ul className="flex flex-col w-full h-full gap-2 list-none">
      <li
        key="all"
        data-name="all"
        className={`p-4 px-5 ${
          categoryActive === "all" ? "bg-gray-100 rounded-full" : ""
        }`}
        onClick={(e) => onClickCategory(e)}>
        전체
      </li>
      {CATEGORY.map((name) => (
        <li
          key={name.engname}
          data-name={name.engname}
          className={`p-4 px-5 ${
            categoryActive === name.engname ? "bg-gray-100 rounded-full" : ""
          }`}
          onClick={(e) => onClickCategory(e)}>
          {name.korname}
        </li>
      ))}
      <li
        key="barter"
        data-name="barter"
        className={`p-4 px-5 ${
          categoryActive === "barter" ? "bg-gray-100 rounded-full" : ""
        }`}
        onClick={(e) => onClickCategory(e)}>
        교환하기
      </li>
    </ul>
  );
};

export default Category;
