import { useState } from "react";

const Form = ({ data, result }) => {
  const [name, setName] = data.name;
  const [email, setEmail] = data.email;
  const [password, setPassword] = data.password;
  const [password2, setPassword2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      alert("Vos deux mots de passe sont différents !");
    } else {
      result(true);
    }
  };

  return (
    <div className="create">
      <h1>Create account</h1>
      <form className="input-container" onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          placeholder="your name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <p>E-mail</p>
        <input
          type="email"
          placeholder="name@mail.com"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p>Confirm your password</p>
        <input
          type="password"
          placeholder="password"
          name="password2"
          value={password2}
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
        />
        <input className="submit" type="submit" value="Envoyer"></input>
      </form>
    </div>
  );
};

export default Form;
