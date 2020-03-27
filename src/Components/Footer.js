import React, { Component } from "react";
import { Container, Navbar, CardDeck, Card } from "react-bootstrap";
import logoFooter from "./inhabitent-logo-text-dark.svg";

class Footer extends Component {
  render() {
    return (
      <Navbar
        //   fixed="top"
        collapseOnSelect
        expand="md"
        variant="primary"
      >
        <Container>
          <CardDeck className="back">
            <Card className="desk1">
              <Card.Body>
                <Card.Title text="primary">CONTACT INFO</Card.Title>
                <Card.Text>
                  <p>info@inhibiteny.com</p>
                  <p>778-456-7891</p>
                  <p>icons</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card bg="dark" border="dark" text="info">
              <Card.Body>
                <Card.Title text="primary">CONTACT INFO</Card.Title>
                <Card.Text>
                  <p>info@inhibiteny.com</p>
                  <p>778-456-7891</p>
                  <p>icons</p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card bg="dark" border="dark" text="dark" className="mg-20">
              {/* <Card.Img variant="top" src=""></Card.Img> */}
              <Card.Img
                src={logoFooter}
                height="60"
                widht="60"
                margin="40"
                className="d-inline-block align-top"
                alt="logo image"
              />{" "}
            </Card>
          </CardDeck>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
