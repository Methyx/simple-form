import "./App.css";
import { useState } from "react";

import StepTwo from "./components/StepTwo";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name: [name, setName],
    email: [email, setEmail],
    password: [password, setPassword],
  };
  const [valid, setValid] = useState(false);
  return (
    <div className="App">
      {!valid ? (
        <Form data={data} result={setValid} />
      ) : (
        <StepTwo data={data} result={setValid} />
      )}
    </div>
  );
}

export default App;
