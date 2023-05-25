import "./style.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutation";
import Auth from "../../utils/auth";
import { Checkbox } from "antd";


function LoginPage() {
  const [formState, setFromState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = response.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <div className="sign-wrap">
          <h1 className="text-center text-white">Login to GearHub</h1>
        <div className="login-box text-center">
          <form className="loginForm" onSubmit={handleFormSubmit}>
            <label htmlFor="email">
              <b>Email Address:</b>
            </label>
            <input
              className="email shadow-sm"
              type="text"
              placeholder="youremail@test.com"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label htmlFor="pwd">
              <b>Password</b>
            </label>
            <input
              className="password shadow-sm"
              type="password"
              placeholder="Enter Password"
              name="password"
              id="pwd"
              required
              onChange={handleChange}
            />
            <button className="shadow btn-Submit loginBtn" type="submit">
              Login
            </button>
            <Checkbox className="remember-me">Remember me</Checkbox>
          </form>
          <p className="signInBtn-text">
            Don't have an account?
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
