import React from "react";
import Button from "../components/atoms/button/Button";
import Input from "../components/atoms/input/Input";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__items">
          <img src="../assets/logo_login.png" alt="" srcset="" />
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
