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
      <img
        style={{ borderRadius: "5px", width: "100%", height: "80vh" }}
        src="https://i.ibb.co/J24XZRg/msi-gaming-accessories-general-20200212-banner-01-640.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
