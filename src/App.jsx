import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";
import Form from "./components/Form";

// fontawsome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);

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

      <Form
        handleSUbmit={handleSUbmit}
        username={username}
        email={email}
        errorMessage={errorMessage}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        errorSign={errorSign}
        password={password}
        confirmPassword={confirmPassword}
      />

      <Footer tech="React" school="Le Reacteur" student="LuA" />
    </>
  );
}

export default App;
