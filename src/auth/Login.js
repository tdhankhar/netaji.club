import React from "react";

// stylesheets
import "./stylesheets/login.css";

// components
import { ReactComponent as GithubIcon } from "../uploads/github.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <div className="login-header">
          <h1>Welcome</h1>
          <div></div>
          <p>
            This club is exclusively for engineers and developers who believe in
            the spirit of Netaji.
          </p>
        </div>
        <button className="github-login-btn btn btn-block">
          <GithubIcon className="github-login-icon" />
          Log in with GitHub
        </button>
        <div className="description">
          <p>
            If you don't have a <a href="https://www.github.com">GitHub</a>{" "}
            account, then go create one.
          </p>
        </div>
      </div>
      <div className="logo">netaji.club</div>
    </div>
  );
};

export default Login;
