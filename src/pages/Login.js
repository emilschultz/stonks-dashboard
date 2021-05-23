import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../config/firebase.js";
import { AuthContext } from "../config/Auth.js";

import "../components/Login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <section className="section__container">
      <div className="text__container">
        <h1 className="heading">Hello</h1>
        <p className="text"> Please sign in to your account</p>
      </div>
      <div className="form__container">
        <form className="form" onSubmit={handleLogin}>
          <label className="form__label">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="email@example.com"
            />
          </label>
          <label className="form__label">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
          <button className="login__button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default withRouter(Login);
