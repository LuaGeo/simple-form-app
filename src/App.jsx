import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";
import Form from "./components/Form";

// fontawsome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import StepTwo from "./components/StepTwo";
library.add(faEye);

//-------------------

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [errorSign, setErrorSign] = useState("");

  const [showStepTwo, setShowStepTwo] = useState(false);

  const handleSUbmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne sont pas identiques");
      setErrorSign("border");
    } else {
      setShowStepTwo(true);
    }
  };

  return (
    <>
      {showStepTwo === false ? (
        <header>Create account</header>
      ) : (
        <header>Results</header>
      )}

      {showStepTwo === false ? (
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
      ) : (
        <StepTwo
          username={username}
          email={email}
          password={password}
          showStepTwo={showStepTwo}
          setShowStepTwo={setShowStepTwo}
        />
      )}

      <Footer tech="React" school="Le Reacteur" student="LuA" />
    </>
  );
}

export default App;
