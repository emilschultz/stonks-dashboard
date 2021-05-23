import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../config/firebase";

const SignUp = ({ history }) => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <section>
      <h1>Sign up for stonks dashboard</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default withRouter(SignUp);
