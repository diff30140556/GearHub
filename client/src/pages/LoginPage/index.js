import "./style.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutation";
import Auth from "../../utils/auth";
import { Checkbox, Alert } from "antd";
import { Container, Row, Col } from "react-bootstrap";

function LoginPage() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const [errMessage, setErrMessage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = response.data.login?.token;

      if (token) {
        Auth.login(token);
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log(error);
  return (
    <main>
      <div className="sign-wrap">
        <Container>
          <h1 className="text-center text-white">Login to GearHub</h1>
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={4}>
              <div className="login-box text-center">
                <form className="loginForm" onSubmit={handleFormSubmit}>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <label htmlFor="email">
                        <b>Email Address:</b>
                      </label>
                      <input
                        className="email shadow-sm form-control"
                        type="text"
                        placeholder="youremail@test.com"
                        name="email"
                        id="email"
                        required
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <label htmlFor="pwd">
                        <b>Password</b>
                      </label>
                      <input
                        className="password shadow-sm form-control"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        id="pwd"
                        required
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <button
                        className="shadow btn-Submit loginBtn"
                        type="submit"
                      >
                        Login
                      </button>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <Checkbox className="remember-me">Remember me</Checkbox>
                    </Col>
                  </Row>
                  {error && errMessage && (
                    <Row className="mb-3">
                      <Col xs={12}>
                        <Alert
                          message={errMessage}
                          type="error"
                          className="alert-box"
                          onClose={() => setErrMessage("")}
                        />
                      </Col>
                    </Row>
                  )}
                </form>
                <p className="signInBtn-text">
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default LoginPage;
