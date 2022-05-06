import React from "react";

const RestockInventory = () => {
  return (
    <div>
      <div className="card-footer px-0 py-0 ">
        <form>
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
