import React, { Component } from "react";
import {
  Container,
  FormControl,
  FormText,
  Form,
  FormGroup,
  FormLabel,
  FormCheck,
  Button
} from "react-bootstrap";

class Findus extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center">Contact Us</h1>
        <Form>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Please enter your email here"
            ></FormControl>
            <FormText>We will never share your email anyone else</FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <Form.Label> Example text aria</Form.Label>
            <Form.Control as="textarea" rows="3"></Form.Control>
          </FormGroup>

          <FormGroup controlId="formBasicCheck">
            <FormCheck type="checkbox" label="Check me out"></FormCheck>
          </FormGroup>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Findus;
