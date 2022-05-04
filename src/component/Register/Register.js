import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body ">
        <h4 className="text-center text-secondary">Register Now..</h4>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Submit
        </button>
      </form>
      <div className="mx-auto d-block text-center border w-50 rounded shadow-sm">
        <div className="mb-2 p-3">
          {" "}
          <button className="btn w-100 border">Sign Up with Google</button>
        </div>
        <p>
          Already have an account ?
          <Link to="/signin">
            <button className="btn btn-secondary rounded ms-2"> Sign In</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
