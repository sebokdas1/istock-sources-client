import React, { useEffect, useState } from "react";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.ibb.co/kSjrrsd/computer.png",
    "https://i.ibb.co/ZKHcVbC/2nd.png",
    "https://i.ibb.co/DQRL07X/3rd.png",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <div className="mt-3">
      {/* <img
        style={{ borderRadius: "5px", width: "100%", height: "80vh" }}
        src="https://i.ibb.co/kSjrrsd/computer.png"
        alt=""
      /> */}
      <img
        className="w-[100%] h-[60vh]"
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
      />
    </div>
  );
};

export default Banner;
