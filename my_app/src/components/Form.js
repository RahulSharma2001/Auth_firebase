import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import app from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    if (user) {
      alert("Logged in successfully!");
      window.location.href = "/dashboard";
    } else {
      alert("Failed to log in.");
    }
  }

  return (
    <div>
      <h1>Authenticate </h1>
      <div className="App">
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Authenticate</button>
        </form>
      </div>
      <button>
        <NavLink to="/signup" style={{ color: "white" }}>
          SignUp
        </NavLink>
      </button>
    </div>
  );
}

export default Form;
