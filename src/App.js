import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Welcome from "./sections/Welcome";
import Home from "./sections/Home/Home";
import BCDS from "./sections/CaseStudies/bcds";
import BCClientSuggestions from "./sections/CaseStudies/bc-client-suggestions";
import OGCoa from "./sections/CaseStudies/og-coa";
import AutodeskIDCaseStudy from "./sections/CaseStudies/autodesk-id";
import OlderProjects from "./sections/OlderProjects/older-projects"

import "./styles/system.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
          <Route path="/autodesk-id" exact component={AutodeskIDCaseStudy} />
          <Route path="/bc-design-systems" exact component={BCDS} />
          <Route path="/bc-client-suggestions" exact component={BCClientSuggestions} />
          <Route path="/og-coa" exact component={OGCoa} />
          <Route path="/older-projects" exact component={OlderProjects} />
          <Redirect to="/welcome" />
        </Switch>
      </Router>
    );
  }
}

export default App;
