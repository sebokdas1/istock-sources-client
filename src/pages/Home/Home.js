import React from "react";
import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import Catagory from "./Catagory";
import GenShow from "./GenShow";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner />
      <Parts />
      <GenShow />
      <Summary />
      <Reviews />
      <Catagory />
      <Footer></Footer>
    </div>
  );
};

export default Home;
