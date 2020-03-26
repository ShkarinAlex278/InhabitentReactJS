import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  NavbarBrand
} from "react-bootstrap";
import logo from "./inhabitent-logo-tent-white.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About.js";
import Contacts from "../Pages/Contacts.js";
import Blog from "../Pages/Blog.js";
import Ajax from "../Pages/Ajax.js";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          //   fixed="top"
          // collapseOnSelect
          // expand="md"
          // bg="dark"
          variant="primary"
          // variant="dark"
        >
          <Container class="header">
            <NavbarBrand href="/">
              <img
                src={logo}
                height="30"
                widht="30"
                className="d-inline-block align-top"
                alt="logo image"
              />{" "}
            </NavbarBrand>
            <div class="menu">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="/"> Home </Nav.Link>
                  <Nav.Link href="/about"> About us </Nav.Link>
                  <Nav.Link href="/contacts"> Contacts </Nav.Link>
                  <Nav.Link href="/blog"> Blog </Nav.Link>
                  <Nav.Link href="/ajax"> Ajax </Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-light">Search</Button>{" "}
                </Form>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/ajax" component={Ajax} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;
