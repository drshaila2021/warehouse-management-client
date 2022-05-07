import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RestockInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const { _id, name, quantity } = inventory;
  const handleRestock = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(inventory.quantity);
    const updatedQuantity = { quantity };
    fetch(`http://localhost:4001/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };
  return (
    <div>
      <div className="card-footer px-0 py-0 ">
        <form onSubmit={() => handleRestock()}>
          <input className="w-75" type="submit" value="Restock" />
          <input
            className="w-25 text-center"
            type="number"
            name="quantity"
            placeholder="quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default RestockInventory;
