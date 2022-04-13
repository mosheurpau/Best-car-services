import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./Login.css";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title mt-5">Login</h2>

        <Form onSubmit={handleUserSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
            />
          </Form.Group>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <Button className="w-100 mb-3" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="form-link-p">
          New to Ema-John?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="line-group">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>

        <button className="google-login-btn">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
