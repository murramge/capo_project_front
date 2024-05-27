import * as React from "react";

interface ICategoryProps {}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  const [activeCategory, setActiveCategory] = React.useState();

  return (
    <div>
      <ul className="flex flex-col w-full h-full gap-2 list-none">
        <li key="all" data-name="all" className=""></li>
      </ul>
    </div>
  );
};

export default Category;
