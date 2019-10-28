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
  max-width: 440px;
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

        @media (max-width: ${system.breakpoints.large}) {
          width: 100px;
          
        }
    }

    a:hover {
      text-decoration: none;
    }

    a > div {
        align-items: flex-start;
        align-content: flex-start;
        color: ${system.colors.g90};
        cursor: pointer;
        display: flex;
        font-family: ${system.fonts.display};
        font-weight: 700;
        line-height: 1.0;
        justify-content: flex-start;
        padding: 16px;
        text-align: left;

        h3 {
          font-size: 18px;

          font-family: ${system.fonts.body};
          font-weight: 400;
          line-height: 1.2;

          @media (max-width: ${system.breakpoints.medium}) {
            font-size: 18px;
          }
        }
        p { 
          font-size: 16px;
          margin: 0;

          @media (max-width: ${system.breakpoints.medium}) {
            font-size: 16px;
          }
        }

      


    }
  }
`

const CaseStudyList = props => {
  return (
    <List>
      <li>
        <a href="/bc-design-systems">
          <div>
            <img src={bcds} />
            <div>
              <h3>Design Systems</h3>
              <p>at BuildingConnected</p>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="/bc-client-suggestions">
          <div>
            <img src={bc_suggestions} />
            <div>
              <h3>Client Suggestions </h3>
              <p>at BuildingConnected</p>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="/og-coa">
          <div>
            <img src={og_coa} />
            <div>
              <h3>Chart of Accounts Manager </h3>
              <p>at OpenGov</p>
            </div>
          </div>
        </a>
      </li>
    </List>
  )
}

export default CaseStudyList