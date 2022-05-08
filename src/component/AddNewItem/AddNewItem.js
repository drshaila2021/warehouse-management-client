import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [inventories, setInventories] = useState([]);
  //   console.log(inventories);
  // useEffect(() => {
  //   fetch("http://localhost:4001/inventory")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInventories(data);
  //     });
  // }, []);
  const navigate = useNavigate();
  const [user, loadind] = useAuthState(auth);

  // send data to server
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      picture: event.target.picture.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      itemSold: event.target.itemSold.value,
      supplierName: event.target.supplierName.value,
      description: event.target.description.value,
      user: user.email,
    };
    fetch("http://localhost:4001/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setInventories(result));
    navigate("/manageinventory");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body "
      >
        <h4 className="text-center text-secondary">Add New Item</h4>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="url"
            name="picture"
            className="form-control"
            placeholder="picture url"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="price"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="quantity"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="itemSold"
            className="form-control"
            placeholder="item sold"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="supplierName"
            className="form-control"
            placeholder="supplier name"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            placeholder="description"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
