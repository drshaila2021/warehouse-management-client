import React from "react";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import ManageInventoryButton from "../ManageInventoryButton/ManageInventoryButton";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <ManageInventoryButton></ManageInventoryButton>
    </div>
  );
};

export default Home;
