import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import CaseStudiesIndex from "./components/CaseStudies/";
import BCDS from "./components/CaseStudies/bcds";
import BCClientSuggestions from "./components/CaseStudies/bc-client-suggestions";
import OGCoa from "./components/CaseStudies/og-coa";

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/case-studies" exact component={CaseStudiesIndex} />
          <Route path="/bc-design-systems" exact component={BCDS} />
          <Route path="/bc-client-suggestions" exact component={BCClientSuggestions} />
          <Route path="/og-coa" exact component={OGCoa} />
        </Router>
    );
  }
}

export default App;
