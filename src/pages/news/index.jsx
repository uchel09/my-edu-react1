import { useState } from "react";
import MyInput from "../../components/element/Input";
import BaseLayout from "../../components/layouts/BaseLayout";

const NewsPage = () => {
  const [search, setSearch] = useState("");

  console.log(search)

  return (
    <BaseLayout>
      <div className="w-[90%] bg-blue-300 mx-auto mt-[20px] flex flex-col">
        <div className="w-full flex">
          <MyInput
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="w-[200px] bg-blue-400">Search </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default NewsPage;
