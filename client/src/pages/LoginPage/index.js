import "./style.css";
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function loginPage() {
  return (
    <main>
      <div className="wrap">
        <div className="login-box text-center">
          <h1>Login to GearHub</h1>
          <form className="loginForm">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              className="username shadow-sm"
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="password shadow-sm"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            <button className="shadow btn-Submit loginBtn" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have an account?
            <a className="signuplink" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default loginPage;
