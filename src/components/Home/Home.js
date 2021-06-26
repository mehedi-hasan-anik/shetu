import React from "react";
import "./Home.css";
import Carousel from "../Carousel/index";
import OverviewArea from "../OverviewArea";
import AdvertiseArea from "../AdvertiseArea";
import AdvertiseArea2 from "../AdvertiseArea2";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import Band from "../Brand-area";
import ProductCategory from "../ProductCategory";
import ProductArea from "../ProductArea";
import Header from "../Header/index";
import SlickList from "../SlickList";

const Home = () => {
  return (
    <div className="home">
      <div className="">
        <Header />
        {/* <Carousel /> */}
        <SlickList/>
        <OverviewArea />
        <AdvertiseArea />
        <ProductArea />
        <AdvertiseArea2 />
        <ProductCategory />
        <Band />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
