import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../context";
import logo from "../../logo.png";

export const Navbar = ({ route }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();

  const handleAuthClick = () => {
    if (token) {
      localStorage.clear();
      quizDispatch({
        type: "QUIT",
      });
    }
    navigate("/");
  };

  const handleEndGameClick = () => {
    quizDispatch({
      type: "QUIT",
    });
  };

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src={logo} alt="logo" />
        <h1 className="heading-title">
          {route === "home" || route === "login" ? (
            <Link to="/" className="link">
              Quizify
            </Link>
          ) : (
            "Quizify"
          )}
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          {route === "home" || route === "login" ? (
            <li className="list-item-inline">
              <Link to="/" className="link cursor">
                Home
              </Link>
            </li>
          ) : (
            ""
          )}

          {route === "home" && (
            <div className="list-item-inline">
              <Link
                to="/auth/login"
                className="link cursor"
                onClick={handleAuthClick}
              >
                {token ? "Logout" : "Login"}{" "}
              </Link>
              {!token && "/"}

              {!token && (
                <Link
                  to="/auth/register"
                  className="link cursor"
                  onClick={handleAuthClick}
                >
                  Register{" "}
                </Link>
              )}
            </div>
          )}

          {route === "result" && (
            <Fragment>
              <li className="list-item-inline">
                <Link
                  to="/"
                  className="link cursor"
                  onClick={handleEndGameClick}
                >
                  Home
                </Link>
              </li>
              <li className="list-item-inline">
                <span className="link cursor" onClick={handleAuthClick}>
                  Logout
                </span>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};
