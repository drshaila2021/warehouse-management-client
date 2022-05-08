import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import logo from "../../images/GLogo.svg";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithaGoogle, user2, loading2, error2] =
    useSignInWithGoogle(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
    // console.log(error, error1);
  };
  if (user1) {
    console.log(user1);
    navigate("/");
    //navigate(from, { replace: true });
  }
  if (loading1) {
    return <Loading></Loading>;
  }
  let signInErrorElement;
  if (error || error2) {
    signInErrorElement = (
      <p className="text-danger text-center">
        {" "}
        {error?.message} {error2?.message}
      </p>
    );
  }

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast("Email is empty! Please provide ...");
    }
  };

  return (
    <div className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body ">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center text-secondary">Log In</h4>

        <div className="mb-3">
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Login
        </button>
      </form>
      {/* <img
        style={{ width: "50px" }}
        className="image-fluid"
        src={alternative}
        alt=""
      /> */}
      <p className="text-center my-3">
        Forget password ? Click
        <button
          className="btn-link border-0 rounded text-decoration-none"
          onClick={resetPassword}
        >
          {" "}
          Reset Password
        </button>
      </p>
      <p className="text-center">
        New User ? Please click
        <Link className="ms-2 text-decoration-none" to="/register">
          Register
        </Link>
      </p>

      <p className="text-center my-3 text-secondary">OR</p>
      <div>
        <div className="p-3">
          <button
            onClick={() => signInWithaGoogle()}
            className="btn w-100 border"
          >
            Log in with <img src={logo} alt="" />
            oogle
          </button>
        </div>
        {signInErrorElement}
      </div>
    </div>
  );
};

export default Login;
