import Form from "./components/Form";
import SubmitForm from "./components/SubmitForm";
import TextArea from "./components/TextArea";
import { useState } from "react";
import "./style.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <Form
        id="fullName"
        children="FullName :"
        value={fullName}
        func={(e) => setFullName(e.target.value)}
      />
      <Form
        id="email"
        children="Email :"
        value={email}
        func={(e) => setEmail(e.target.value)}
      />
      <Form
        id="password"
        children="password :"
        value={password}
        func={(e) => setPassword(e.target.value)}
      />
      <TextArea
        id="address"
        children="Address :"
        value={address}
        func={(e) => setAddress(e.target.value)}
      />
      <SubmitForm
        onClick={() => {
          setFullName("");
          setEmail("");
          setPassword("");
          setAddress("");
        }}
      />

      <h3>FullName: {fullName}</h3>
      <h3>Email: {email}</h3>
      <h3>Password: {password}</h3>
      <h3>Address: {address}</h3>
    </div>
  );
}

export default App;
