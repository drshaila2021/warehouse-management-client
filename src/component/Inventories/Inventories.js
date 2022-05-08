import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://fast-chamber-69071.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-center my-5 text-secondary">Our Inventories </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
