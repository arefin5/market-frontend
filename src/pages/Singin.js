import React from "react";
import { Form, Button } from "react-bootstrap";
const SinginForm = () => {
  return (
    <div className="Singin">
      <Form>
        <h4>Sing in to Fivver</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" size="md" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SinginForm;
