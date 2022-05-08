import React from "react";
import { Button } from "react-bootstrap";

const OtherServices = () => {
  return (
    <div className="my-5">
      <h2 className="text-secondary  text-center my-5 mt-5">Other Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body bg-light">
              <h5 className="card-title">Delivery Services</h5>

              <p className="card-text">
                We have our own cargo and van for tranportation.We also provide
                free delevery services in minimum purchase.
              </p>
              <Button className="bg-secondary">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body bg-light">
              <h5 className="card-title">Furniture Setup</h5>

              <p className="card-text">
                We have our own team for set up your furniture in minimum
                purchase.
              </p>
              <Button className="bg-secondary">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body bg-light">
              <h5 className="card-title">Protection Plan</h5>

              <p className="card-text">
                We provide furniture protection plan.we also provide 0% interest
                rate in your monthly payment also.
              </p>
              <Button className="bg-secondary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h4 className="text-center">
          1.Free Delivery and Cargo service... <Button>Learn More</Button>
        </h4>
      </div>

      <h4 className="text-center">
        1.Free Delivery and Cargo service... <Button>Learn More</Button>
      </h4>
      <h4 className="text-center">
        1.Free Delivery and Cargo service... <Button>Learn More</Button>
      </h4> */}
    </div>
  );
};

export default OtherServices;
