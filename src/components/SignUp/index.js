import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordCheckOne: "",
  passwordCheckTwo: "",
  error: null
};
/* Refactoring Required */
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {};

  onChange = e => {};
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    /* Data bidning missing */
    const {
      username,
      email,
      passwordCheckOne,
      passwordCheckTwo,
      errorm
    } = this.state;
    /*invalid check 함수 더 효율적인거 찾아보기*/
    const isInvalid = passwordCheckOne !== passwordCheckTwo || passwordCheckOne === '' || email === '' || username === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordCheckOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordCheckTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
      <button disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
