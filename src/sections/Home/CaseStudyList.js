import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

const List = styled.ul`
  font-size: 21px;
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 32px 0 48px;

  @media (max-width: ${system.breakpoints.large}) {
    font-size: 24px;
    text-align: center;
  }

  li {
    margin-bottom: 16px;

    a {
      color: ${system.colors.g90};
      cursor: pointer;
      
      font-size: 20px;
      font-weight: 300;
      text-decoration: none;

      @media (max-width: ${system.breakpoints.large}) {
        font-size: 18px;
      }

      &:visited {
        color: ${system.colors.g55};
      }

      &:hover {
        color: ${system.colors.blue2};
        font-weight: 400;
        // transition: all ease-out .1s;

      }
    }
  }
`

const CaseStudyList = props => {
    return (
        <List>
            <li><a href="/bc-design-systems">Design Systems at BuildingConnected</a></li>
            <li><a href="/bc-client-suggestions">Client Suggestions at BuildingConnected</a></li>
            <li><a href="/og-coa">OpenGov Chart of Accounts Manager</a></li>
        </List>
    )
}

export default CaseStudyList