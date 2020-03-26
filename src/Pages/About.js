import React, { Component } from "react";
import { Container, Nav, Tab, TabContainer, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="left-tab-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Disign</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    style={({ width: "100%" }, { height: "450px" })}
                    src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png"
                  />
                  <p>
                    A design is a plan or specification for the construction of
                    an object or system or for the implementation of an activity
                    or process, or the result of that plan or specification in
                    the form of a prototype, product or process.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    style={({ width: "100%" }, { height: "420px" })}
                    src="https://www.xfive.co/wp-content/uploads/2017/12/figma-prototype2-1675x1116.jpg"
                  />
                  <p>
                    A team is a group of individuals (human or non-human)
                    working together to achieve their goal. As defined by
                    Professor Leigh Thompson of the Kellogg School of
                    Management, "[a] team is a group of people who are
                    interdependent with respect to information, resources,
                    knowledge and skills and who seek to combine their efforts
                    to achieve a common goal".[1]
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    style={({ width: "100%" }, { height: "420px" })}
                    src="https://i.ytimg.com/vi/jp4HtueUsFg/maxresdefault.jpg"
                  />
                  <p>
                    "Mathematical programming" redirects here. For the
                    peer-reviewed journal, see Mathematical Programming.
                    "Optimization" and "Optimum" redirect here. For other uses,
                    see Optimization (disambiguation) and Optimum
                    (disambiguation).
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    style={({ width: "100%" }, { height: "420px" })}
                    src="https://miro.medium.com/max/3840/1*263G2KNfujZyGPlyC4q-OQ.png"
                  />
                  <p>
                    In computer programming, an application framework[1]
                    consists of a software framework used by software developers
                    to implement the standard structure of application
                    software.[2]
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    style={({ width: "80%" }, { height: "400px" })}
                    src="https://static.tildacdn.com/tild3833-3363-4233-b434-386532336631/01.png"
                  />
                  <p>
                    A library is a curated collection of sources of information
                    and similar resources, selected by experts and made
                    accessible to a defined community for reference or
                    borrowing, often in a quiet environment conducive to study
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}

export default About;
