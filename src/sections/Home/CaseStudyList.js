import React from "react"
import styled from 'styled-components/macro'

import system from "../../styles/system.js"

import bcds from "./../../assets/images/bcds/0-bcds-hero@2x.png"
import bc_suggestions from "./../../assets/images/bc-client-suggestions/0-cs-hero@2x.png"
import og_coa from './../../assets/images/og-coa/CoA_demo.gif'

const List = styled.ul`
  font-size: 21px;
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 580px;
  margin: 32px 0 48px;

  @media (max-width: ${system.breakpoints.large}) {
    font-size: 24px;
  }

  li {
    margin-bottom: 32px;
    border-radius: 6px;    

    &:hover {
        background-color: ${system.colors.blue2}14;
        

        a {
            color: ${system.colors.blue2};
        }
    }

    img {
        width: 200px;
        margin-right: 24px;
        cursor: pointer;
        box-shadow: 0 0 2px 1px rgba(100,100,100,.1);
    }

    a {
        align-items: center;
        align-content: center;
        color: ${system.colors.g90};
        cursor: pointer;
        display: flex;
        font-family: ${system.fonts.display};
        font-size: 28px;
        font-weight: 700;
        text-decoration: none;
        line-height: 1.0;
        height: 120px;
        justify-content: space-around;
        padding: 16px;

      @media (max-width: ${system.breakpoints.large}) {
        // font-size: 20px;
        
      }


    }
  }
`

const CaseStudyList = props => {
    return (
        <List>
            <li><a href="/bc-design-systems"><img src={bcds} />Design Systems at BuildingConnected</a></li>
            <li><a href="/bc-client-suggestions"><img src={bc_suggestions} />Client Suggestions at BuildingConnected</a></li>
            <li><a href="/og-coa"><img src={og_coa} />OpenGov Chart of Accounts Manager</a></li>
        </List>
    )
}

export default CaseStudyList