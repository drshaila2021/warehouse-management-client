import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManageInventoryButton from "../ManageInventoryButton/ManageInventoryButton";

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4001/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);
  const {
    name,
    _id,
    quantity,
    description,
    itemSold,
    price,
    supplierName,
    picture,
  } = inventory;

  return (
    <div>
      <div className="col h-100 shadow-sm bg-body rounded w-50 mx-auto my-5">
        <div className="card h-100">
          <div className="card-title card-header bg-transparent text-center text-uppercase fw-bold">
            {name}
          </div>

          <img src={picture} className="card-img-top" alt="" />
          <div className="card-body text-center h-100">
            <p className="card-text">Item id: {_id}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text text-light badge bg-secondary fs-5">
              Quantity: {quantity}
            </p>

            <p className="card-text">Item Sold: {itemSold}</p>

            <p className="card-text">Supplier: {supplierName}</p>
            <p className="card-text"> Description: {description}</p>
          </div>

          <button className="text-light bg-secondary">Delivered</button>
        </div>
      </div>
      <ManageInventoryButton></ManageInventoryButton>
    </div>
  );
};

export default InventoryDetail;
