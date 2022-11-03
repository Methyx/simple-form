import "./App.css";
import { useState } from "react";

import StepTwo from "./components/StepTwo";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const data = {
    name: [name, setName],
    email: [email, setEmail],
    password: [password, setPassword],
  };
  return (
    <div className="App">
      {!valid ? (
        <Form data={data} setValid={setValid} />
      ) : (
        <StepTwo data={data} setValid={setValid} />
      )}
    </div>
  );
}

export default App;
