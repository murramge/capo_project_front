import { GetPhotoCardListApi } from "@/src/api/GetPhotoCardListApi";
import Image from "next/image";
import * as React from "react";

interface ICardViewProps {}

const CardView: React.FunctionComponent<ICardViewProps> = (props) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await GetPhotoCardListApi();
      setData(response.result.products);
    };
    getData();
  }, []);

  return (
    data &&
    data.map((item) => (
      <div>
        <img
          src="https://storage.googleapis.com/storage/v1/b/photocard-f2e87.appspot.com/o/thumb_000011ef-2114-2434-a03e-b993b6a0e8dd"
          width={256}
          height={256}
          alt="Your image description"
        />
        <span>{item?.price}</span>
        <span>{item?.content}</span>
      </div>
    ))
  );
};

export default CardView;
