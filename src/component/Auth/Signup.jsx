import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useAuth } from "../../context";
import { signupHandler } from "../../services/auth-signup-service";

export const AuthSignup = () => {
  const navigate = useNavigate();
  const { username, email, password, number, confirmPassword, authDispatch } =
    useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleNumberChange = (event) => {
    authDispatch({
      type: "NUMBER",
      payload: event.target.value,
    });
  };

  const handleUsernameChange = (event) => {
    authDispatch({
      type: "USERNAME",
      payload: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    authDispatch({
      type: "EMAIL",
      payload: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    authDispatch({
      type: "PASSWORD",
      payload: event.target.value,
    });
  };

  const handleConfirmPasswordChange = (event) => {
    authDispatch({
      type: "CONFIRMPASSWORD",
      payload: event.target.value,
    });
  };

  const handleSignupClick = async (event) => {
    event.preventDefault();
    const result = await signupHandler(username, number, email, password);
    // console.log(accessToken)
    // console.log("sad")
    if (result.accessToken) {
      navigate("/");

      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: result.accessToken,
      });
      authDispatch({
        type: "USERNAME",
        payload: username,
      });
    } else {
      setErrorMessage(result.error);
    }
    //   authDispatch({
    //   type: "CLEAR_USER_DATA",
    // });
  };

  return (
    <div className="d-grid">
      <div className="login-auth d-flex direction-column justify-center">
        <h2 className="auth-title">Signup</h2>
        <form onSubmit={handleSignupClick}>
          <div className="form-container">
            <label className="form-label">Username</label>
            <input
              value={username}
              className="form-input lh-ls"
              // placeholder="TEJARAM"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-container">
            <label className="form-label">Mobile Number</label>
            <input
              value={number}
              className="form-input lh-ls"
              // placeholder="1234567890"
              onChange={handleNumberChange}
            />
          </div>
          <div className="form-container">
            <label className="form-label">Email</label>
            <input
              value={email}
              className="form-input lh-ls"
              // placeholder="1234567890"
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-container">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              className="form-input lh-ls"
              // placeholder="*******"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-container">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              className="form-input lh-ls"
              // placeholder="*******"
              onChange={handleConfirmPasswordChange}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="cta">
            <button className="button login-btn btn-margin cursor sign-up-btn">
              Signup
            </button>
          </div>
          <li className="list-item-inline text-align">
            <Link to="/auth/Login" className="link cursor">
              Already have an account? Sign In here
            </Link>
          </li>
        </form>
      </div>
    </div>
  );
};
