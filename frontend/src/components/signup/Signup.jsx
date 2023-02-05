import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const onChange = e => {
      if (e.target.name === 'username') {
        setUsername(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    };
  
    const onSignupClick = () => {
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
            <h1>Sign up</h1>
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
              onClick={onSignupClick}  
            >Sign up</Button>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }

export default Signup;