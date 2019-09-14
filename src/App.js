import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Welcome from "./sections/Welcome";
import Home from "./sections/Home";
import CaseStudiesIndex from "./sections/CaseStudies/";
import BCDS from "./sections/CaseStudies/bcds";
import BCClientSuggestions from "./sections/CaseStudies/bc-client-suggestions";
import OGCoa from "./sections/CaseStudies/og-coa";

import "./styles/system.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/case-studies" exact component={CaseStudiesIndex} />
          <Route path="/home" exact component={Home} />
          <Route path="/bc-design-systems" exact component={BCDS} />
          <Route path="/bc-client-suggestions" exact component={BCClientSuggestions} />
          <Route path="/og-coa" exact component={OGCoa} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
