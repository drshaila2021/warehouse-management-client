import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Inventories from "../Inventories/Inventories";
import ManageInventoryButton from "../ManageInventoryButton/ManageInventoryButton";
import OtherServices from "../OtherServices/OtherServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <ManageInventoryButton></ManageInventoryButton>
      <OtherServices></OtherServices>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
