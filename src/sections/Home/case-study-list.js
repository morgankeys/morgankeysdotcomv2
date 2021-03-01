import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import adsk from "./../../assets/images/autodesk-id/thumbnail.png"
import bcds from "./../../assets/images/bcds/0-bcds-hero@2x.png"
import bc_suggestions from "./../../assets/images/bc-client-suggestions/0-cs-hero@2x.png"
import og_coa from './../../assets/images/og-coa/CoA_demo.gif'

const CaseStudyCardContent = styled.div`
  align-items: start;
  align-content: start;
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
    font-size: 28px;
    font-family: ${system.fonts.display};
    line-height: 1.2;
    cursor: pointer;
  }
  p { 
    font-size: 18px;
    margin: 0;
    cursor: pointer;
  }
`

const CaseStudyCard = props => {
  const rootStyles = css`
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
  `
  return (
    <div css={rootStyles}>
      <a href={props.pageLink}>
        <CaseStudyCardContent>
          <img src={props.imgSrc} alt={props.imgAlt} />
          <div>
            <h3>{props.title}</h3>
            <p>{props.byline}</p>
          </div>
        </CaseStudyCardContent>
      </a>
    </div>
  )
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 21px;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 32px 0 48px;

  @media (max-width: ${system.breakpoints.large}) {
    font-size: 24px;
  }

  li {
    max-width: 520px;
    width: 100%;
    min-width: 400px;
    margin: 0 32px;
  }
`

const CaseStudyList = props => {
  return (
    <List>
      <li>
        <CaseStudyCard
          pageLink="/autodesk-id"
          imgSrc={adsk}
          imgAlt="Unification"
          title="Autodesk ID"
          byline="Integrating with a new platform"
        />
      </li>
      <li>
        <CaseStudyCard
          pageLink="/bc-design-systems"
          imgSrc={bcds}
          imgAlt="The BuildingConnected design system"
          title="Design Systems"
          byline="From styles to a system"
        />
      </li>
      <li>
        <CaseStudyCard
          pageLink="/bc-client-suggestions"
          imgSrc={bc_suggestions}
          imgAlt="Client Suggestions in BuildingConnected"
          title="Client Suggestions"
          byline="User engagement and prototyping"
        />
      </li>
      <li>
        <CaseStudyCard
          pageLink="/og-coa"
          imgSrc={og_coa}
          imgAlt="The OpenGov Chart of Accounts Manager"
          title="Chart of Accounts Manager"
          byline="A patented user interface"
        />
      </li>
    </List>
  )
}

export default CaseStudyList