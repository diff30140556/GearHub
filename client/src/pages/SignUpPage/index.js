import "./style.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";

function SignUp() {
  const [formState, setFromState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      
      const token = response.data.addUser.token;
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
          <h1 className="text-center text-white">Sign Up to GearHub</h1>
        <div className="login-box text-center">
          <form className="loginForm" onSubmit={handleFormSubmit}>
            <label htmlFor="username">
              <b>Username:</b>
            </label>
            <input
              className="username shadow-sm"
              type="text"
              placeholder="username"
              name="username"
              id="username"
              required
              onChange={handleChange}
            />
            <label htmlFor="email">
              <b>Email Address:</b>
            </label>
            <input
              className="email shadow-sm"
              type="text"
              placeholder="youremail@gearhub.com"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label htmlFor="password">
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
              Sign Up
            </button>
          </form>
          <p className="signInBtn-text">
            Click here to return to login page
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
