import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./sections/Welcome";
import Home from "./sections/Home/Home";
import BCDS from "./sections/CaseStudies/bcds";
import BCClientSuggestions from "./sections/CaseStudies/bc-client-suggestions";
import OGCoa from "./sections/CaseStudies/og-coa";
import AutodeskIDCaseStudy from "./sections/CaseStudies/autodesk-unification";

import OlderProjects from "./sections/OlderProjects/older-projects"

import "./styles/system.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/autodesk-id" element={<AutodeskIDCaseStudy/>} />
          <Route path="/bc-design-systems" element={<BCDS/>} />
          <Route path="/bc-client-suggestions" element={<BCClientSuggestions/>} />
          <Route path="/og-coa" element={<OGCoa/>} />
          <Route path="/older-projects" element={<OlderProjects/>} />
          <Route path="*" element={<Navigate to="/welcome" />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
