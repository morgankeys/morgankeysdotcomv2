import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles/App.css";
import Home from "./components/Home/Home";
import CaseStudies from "./components/CaseStudies";

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/case-studies" exact component={CaseStudies} />
        </Router>
    );
  }
}

export default App;
