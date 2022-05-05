import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/inventory")
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h3>Our Items {inventories.length}</h3>
      {inventories.map((inventory) => (
        <Inventory key={inventory._id} inventory={inventory}></Inventory>
      ))}
    </div>
  );
};

export default Inventories;
