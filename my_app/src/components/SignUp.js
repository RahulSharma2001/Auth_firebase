import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      setResult("Success");
    } else {
      setResult("Failed Sign up");
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
        <label for="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for="email">Email: </label>
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label for="password">Password: </label>
        <input
          type="text"
          id="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit">Register</button>
      </form>
      <h3
        style={{
          color: result === "Success" ? "green" : "red",
          textAlign: "center",
        }}
      >
        {result}
      </h3>
      <button>
        <NavLink to="/" style={{ color: "white" }}>
          Sign In
        </NavLink>
      </button>
    </div>
  );
}

export default SignUp;
