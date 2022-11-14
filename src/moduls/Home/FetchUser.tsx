import { useState, Fragment, useEffect } from "react";
import Axios from "axios";
import Button from "../../components/Button";
type DataUserTypes = {
  name: {
    first: string;
    last: string;
  };
  email: string;
};

const FetchUser = () => {
  let [data, setData] = useState([]);

  const getData = async (): Promise<void> => {
    const res = await Axios.get("https://randomuser.me/api/");
    setData(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-xl">
        {data.map((user: DataUserTypes, index: number) => (
          <Fragment key={index}>
            <div className="flex flex-col items-center">
              <span>
                {user.name.first} {user.name.last}
              </span>
              <span>{user.email}</span>
            </div>{" "}
          </Fragment>
        ))}
      </h2>

      <Button
        onClick={getData}
        text="Get Data"
        style="bg-[#3B3486] py-2 px-4 rounded-lg text-[#FFE9B1]"
      />
    </div>
  );
};
export default FetchUser;
