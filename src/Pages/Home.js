import React, { Component } from "react";
// import CarouselBox from "../Components/CarouselBox";
import lightHouse from "../assets/images/home-hero.jpg";
import {
  Carousel,
  Container,
  CardDeck,
  Card,
  CardImg,
  Button,
  Row,
  Image,
  Col
} from "react-bootstrap";
// import { CardText, CardTitle } from "react-bootstrap/Card";

class Home extends Component {
  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col>
            <Image src={lightHouse} rounded />
          </Col>
        </Row>

        <h2>Our Team</h2>
        <CardDeck>
          <Card bg="warning" border="dark" text="dark">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ></Card.Img>
            <Card.Body>
              <Card.Title text="primary">Developers</Card.Title>
              <Card.Text>
                With the power of Xcode, the ease of Swift, and the
                revolutionary features of cutting-edge Apple technologies, you
                have the freedom to create your most innovative apps ever.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>

          <Card bg="success" border="dark" text="dark">
            <Card.Body>
              <Card.Title>Disign</Card.Title>
              <Card.Text>
                With the power of Xcode, the ease of Swift, and the
                revolutionary features of cutting-edge Apple technologies, you
                have the freedom to create your most innovative apps ever.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ></Card.Img>
          </Card>

          <Card bg="info" border="dark" text="dark">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ></Card.Img>
            <Card.Body>
              <Card.Title>UX/UI</Card.Title>
              <Card.Text>
                With the power of Xcode, the ease of Swift, and the
                revolutionary features of cutting-edge Apple technologies, you
                have the freedom to create your most innovative apps ever.
              </Card.Text>
              <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default Home;
