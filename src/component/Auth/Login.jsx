import "./Auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { loginHandler } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthLogin = () => {
  const navigate = useNavigate();
  const { number, password, authDispatch } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleNumberChange = (e) => {
    authDispatch({
      type: "NUMBER",
      payload: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    authDispatch({
      type: "PASSWORD",
      payload: e.target.value,
    });
  };
  const handleLoginClick = async (e) => {
    e.preventDefault();

    const result = await loginHandler(number, password);
    if (result.accessToken) {
      navigate("/");

      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: result.accessToken,
      });
      authDispatch({
        type: "USERNAME",
        payload: result.username,
      });
    } else {
      setErrorMessage(result.error);
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };
  const handleTestCredentialsClick = async () => {
    const { accessToken, username } = await loginHandler(6367556709, "Teja@1234");
    if (accessToken) {
      navigate("/");
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "USERNAME",
        payload: username,
      });
    } else {
      setErrorMessage("username or password is incorrect");
    }

    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };

  return (
    <div className="d-grid">
      <div className="login-auth d-flex direction-column justify-center">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleLoginClick}>
          <div className="form-container">
            <label className="form-label">Number</label>
            <input
              value={number}
              className="form-input lh-ls"
              placeholder="*******"
              onChange={handleNumberChange}
            />
          </div>
          <div className="form-container">
            <label className="form-label">Password</label>
            <input
              value={password}
              className="form-input lh-ls"
              placeholder="*******"
              onChange={handlePasswordChange}
            />
          </div>
          <li className="list-item-inline">
            <Link to="/auth/Signup" className="link cursor">
              Don't have an account ?{" "}
            </Link>
          </li>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="cta">
            <button className="button login-btn btn-margin cursor sign-up-btn">
              Login
            </button>
          </div>
        </form>
        <div>
          <button
            className="button login-btn btn-outline-primary btn-margin sign-up-btn"
            onClick={handleTestCredentialsClick}
          >
            Login with Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};
