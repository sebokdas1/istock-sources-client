import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Part from "./Part";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Parts.css";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch(`${process.env.REACT_APP_serverLink}/part`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 cols-gap-4">
        {parts?.slice(-6).map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
      <Link
        to="all-parts"
        className="flex items-center justify-end mt-2 text-xl text-blue-500 pr-5 showAllItem"
      >
        <span>Show All</span>
        <span className="ml-1 partslink">
          <BsArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Parts;
