import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Part from "./Part";

const AllParts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("https://istock-sources-server.onrender.com/part").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:px-12">
      <h2 className="uppercase mt-5 text-center text-2xl text-green-400 font-bold">
        Products
      </h2>
      <div className="grid md:grid-cols-3 gap-4 cols-gap-4">
        {parts?.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default AllParts;
