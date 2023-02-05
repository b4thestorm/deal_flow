import React, {useState} from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = e => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onLoginClick = () => {
    const userData = {
      username,
      password
    };
    console.log(`Sign up ${userData.username} ${userData.password}`);
  };
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={username}
                  onChange={onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button 
              color="primary"
              onClick={onLoginClick}  
            >Login</Button>
            <p className="mt-2">
              Don't have account? <Link to="/signup">Sign up</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default Login;