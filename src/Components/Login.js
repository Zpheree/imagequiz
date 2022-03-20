import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import local_temp_store from '../data_access_layer/local_temp_storage';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [err, setErrors] = useState("");
  const navigate = useNavigate();

  let onEmailChange = (e) => {
    setEmail(e.target.value);
    if (err) setErrors(null);
  }

  let onPasswordChange = (e) => {
    setPass(e.target.value);
    if (err) setErrors(null);
  }

  let onSubmitHandler = (e) => {
    e.preventDefault();

    let found = local_temp_store.customers.find(x =>
      (x.email.toLowerCase() === email.toLowerCase()) && (x.password === password));

    if (found) {
      props.customerLoggedIn(email);
      navigate('/');
    } else {
      setErrors("No user with this email and password");
    }
  }

  return (
    <Form onSubmit={onSubmitHandler} className="form">

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange}
      isInvalid={ err }/>
    </Form.Group>
    <Form.Group controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange}
       isInvalid={ err }/>

       <Form.Control.Feedback type="invalid" className="error">
         {err}
       </Form.Control.Feedback>
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;