import { CATEGORY } from "@/src/utils/constants";
import React, { useState } from "react";
import Image from "next/image";
import { usePhotoCardStore } from "@/src/utils/store";

interface ICategoryProps {}

const ListItem: React.FC<{
  name: string;
  active: boolean;
  onClick: (name: string) => void;
}> = ({ name, active, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li
      key={name}
      data-name={name}
      className={`p-4 px-5 ${active ? "bg-gray-100 rounded-full" : ""}`}
      onClick={handleClick}>
      <div className="flex gap-2">
        <div className="w-15 h-15 flex items-center">
          <Image
            src={`/icons/${name}.png`}
            alt={name}
            width={15}
            height={15}
            className="object-cover"
          />
        </div>
        <span>
          {name === "barter"
            ? "교환하기"
            : name === "ALL"
            ? "전체"
            : CATEGORY.find((category) => category.engname === name)?.korname}
        </span>
      </div>
    </li>
  );
};

const Category: React.FunctionComponent<ICategoryProps> = () => {
  const [categoryActive, setCategoryActive] = useState("");
  const { setCategoryName, categoryData } = usePhotoCardStore();

  const onClickCategory = (name: string) => {
    setCategoryName(name);
    categoryData(name);
    setCategoryActive((prev) => (prev === name ? "" : name));
  };

  return (
    <ul className="flex flex-col w-full h-full gap-2 list-none px-2">
      <ListItem
        name="ALL"
        active={categoryActive === "ALL"}
        onClick={onClickCategory}
      />
      {CATEGORY.map(({ engname }) => (
        <ListItem
          key={engname}
          name={engname}
          active={categoryActive === engname}
          onClick={onClickCategory}
        />
      ))}
      <ListItem
        name="barter"
        active={categoryActive === "barter"}
        onClick={onClickCategory}
      />
    </ul>
  );
};

export default Category;
