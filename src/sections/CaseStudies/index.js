import React from "react";

import styled from "styled-components/macro"

import system from "../../styles/system.js"

const CaseStudyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 128px;

  h1 {
    display: inline-block;
    width: 100%;
  }
`
const List = styled.ul`
  font-size: 21px;
  list-style: none;
  width: 100%;
  padding: 0;
  
  
  li {
    margin-bottom: 16px;
    font-weight: 300;

    a {
      color: ${system.colors.g90};
      text-decoration: none;
      cursor: pointer;

      &:visited {
        color: ${system.colors.g55};
      }

      &:hover {
        color: ${system.colors.red}
      }
    }
  }
`

const CaseStudyIndex = props => {
  return (
    <CaseStudyList>
      <h1>Case studies</h1>
      <List>
        <li><a href="/bc-design-systems">Design Systems at BuildingConnected</a></li>
        <li><a href="/bc-client-suggestions">Client Suggestions at BuildingConnected</a></li>
        <li><a href="/og-coa">OpenGov Chart of Accounts Manager</a></li>
      </List>
    </CaseStudyList>
  )
};

export default CaseStudyIndex;
