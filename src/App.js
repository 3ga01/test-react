import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const Student = { username, email, password };

    await signUpStudent(Student);
  };

  async function signUpStudent(Student) {
    const response = await fetch(
      "https://pathfindr-e70a2615f0f7.herokuapp.com/signUpStudent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Student),
      }
    );

    const data = await response.text();
    if (response.status === 200) {
      console.log(`Response from server: ${data}`);
    } else {
      console.log(`Response from server: ${data}`);
    }
  }

  return (
    <div className="App">
      <h1>My React App</h1>
      <div className="form-block w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          // method="get"
          onSubmit={handleClick}
          className="form"
          data-wf-page-id="64b5124a00cf93214c44e4cc"
          data-wf-element-id="993c1d66-8f66-7c4a-9c26-70891fa45198"
          aria-label="Email Form"
        >
          <div className="text-center">
            <p>Sign up to get a mentor for your career.</p>
          </div>
          <div className="field-wrapper top">
            <input
              type="name"
              className="field-input w-input"
              maxLength="256"
              name="username"
              data-name="username"
              placeholder="Enter your username"
              id="username"
              data-ms-member="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-wrapper top">
            <input
              type="email"
              className="field-input w-input"
              maxLength="256"
              name="Email-3"
              data-name="Email 3"
              placeholder="Enter your email"
              id="Email-3"
              data-ms-member="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field-wrapper">
            <input
              type="password"
              className="field-input w-input"
              maxLength="256"
              name="Password-3"
              data-name="Password 3"
              placeholder="********"
              id="Password-3"
              data-ms-member="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Sign up"
            data-wait="Please wait..."
            className="button_form w-button"
            onSubmit={handleClick}
          />

          <a href="/login" className="text-sm">
            Already a member? Login here
          </a>
        </form>
      </div>
    </div>
  );
}

export default App;
