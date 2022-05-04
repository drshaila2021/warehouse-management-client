import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body ">
        <h4 className="text-center text-secondary">Sign In</h4>

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
          <button className="btn w-100 border">Sign in with oogle</button>
        </div>
        <p>
          New User ?
          <Link to="/signup">
            <button className="btn btn-secondary rounded ms-2"> Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
