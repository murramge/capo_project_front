import * as React from "react";

interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  return <div className="bg-red-500">main 컨텐츠</div>;
};

export default CardView;
