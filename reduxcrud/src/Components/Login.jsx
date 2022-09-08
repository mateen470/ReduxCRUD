import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = loginName;
    const password = loginPassword;

    try {
      const loginDataRequest = await axios.post(
        "https://safetydevapis.safetytracker.be/public/api/login",
        { email, password }
      );

      localStorage.setItem("token", loginDataRequest.data.token);

      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login_rootDiv">
      <div className="form_container_login">
        <input
          type="email"
          value={loginName}
          onChange={(e) => {
            setLoginName(e.target.value);
          }}
          placeholder="ENTER EMAIL"
        />
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          placeholder="ENTER PASSWORD"
        />
      </div>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
