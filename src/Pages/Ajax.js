import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About.js";
import Contacts from "../Pages/Contacts.js";
import Blog from "../Pages/Blog.js";

class Ajax extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/ajax" component={Ajax} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default Ajax;
