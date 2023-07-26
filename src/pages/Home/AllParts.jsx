import React from "react";
import Part from "./Part";
import useParts from "../../Shared/useParts";

const AllParts = () => {
  const [parts] = useParts([]);
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
