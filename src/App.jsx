import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [errorSign, setErrorSign] = useState("");

  const handleSUbmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
      setErrorSign("border");
    }
  };

  return (
    <>
      <header>Create account</header>
      <div className="app">
        <form onSubmit={handleSUbmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(event) => {
                // console.log(event.target.value);
                setUsername(event.target.value);
              }}
              value={username}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="toto@email.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={errorSign}
              type="password"
              id="password"
              placeholder="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input
              className={errorSign}
              type="password"
              id="confirmPassword"
              placeholder="password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              value={confirmPassword}
            />
          </div>
          <p>{errorMessage}</p>
          <button type="submit">Register</button>
        </form>
      </div>

      <Footer tech="React" school="Le Reacteur" student="LuA" />
    </>
  );
}

export default App;
