import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_serverLink}/part`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [parts]);
  return [parts];
};

export default useParts;
