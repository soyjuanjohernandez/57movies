import React from "react";
import Button from "../components/atoms/button/Button";
import Input from "../components/atoms/input/Input";
import logo from "../assets/logo-login.svg";
import backgroundImg from "../assets/background_mobile.jpg";

const Login = () => {
  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="login__content">
        <div className="login__items">
          <img src={logo} alt="" srcset="" />
          <h1>Login in your account</h1>
          <Input />
          <Input />
          <Button />
        </div>
      </div>
      {/* <h1>Login</h1>  */}
    </div>
  );
};

export default Login;
