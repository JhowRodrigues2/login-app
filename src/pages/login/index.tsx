import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import LoginIcon from "./loginIcon.svg";
import "./style.css";
export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Login Fail!");
      }
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <div className="fadeIn first">
          <img id="icon" src={LoginIcon} alt="User Icon" />
        </div>
        <form>
          <input
            id="login"
            className="fadeIn second"
            type="text"
            value={email}
            onChange={handleEmailInput}
            placeholder="Type your e-mail"
          />
          <input
            id="password"
            className="fadeIn third"
            type="password"
            value={password}
            onChange={handlePasswordInput}
            placeholder="Type your password"
          />
          <button
            onClick={handleLogin}
            className="fadeIn fourth"
            value="Log In"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
