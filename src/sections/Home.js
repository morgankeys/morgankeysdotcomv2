import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../styles/system.js"

import AboutMe from "./../components/about-me"

import {
  storyImages,
  OGChartOfAccounts,
  OGNetwork,
  HTUplink,
  HTEnterprise,
  HTUsageReport,
  HTAndroid,
  GradPIXD,
  YSIUsability,
  TCSQualcomm
} from "./../assets/content/stories";

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

const SideColumn = styled.div`
    min-width: 300px;
    width: 300px;

    @media (max-width: ${system.breakpoints.large}) {
      min-width: unset;
      width: 100%;
    }
`
const MainColumn = styled.div`
    flex: 3 1 300px;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
    
      h2 {
        color: ${system.colors.hatRed};
        display: inline-block;
        font-size: 32px;
        margin-top: 48px;
        width: 100%;
      }
    }

    @media (max-width: ${system.breakpoints.large}) {
      width: 100%;
      align-items: start;

      div {
        align-items: center;
        text-align: left;

        h2 {
          text-align: center;
          margin-top: 24px;
        }
      }
    }
`

const Footer = styled.div`
    color: ${system.colors.g55};
    font-size: 24px;
    margin: 96px 0;
`

const HomePage = props => {
  let rootStyles = css`
        display: flex;
        flex-wrap: wrap;
        padding: 0 48px;

        @media (max-width: ${system.breakpoints.large}) {
          padding: 0 24px;
        }
    `

  return (
    <div css={rootStyles}>
      <SideColumn>
        <AboutMe />
      </SideColumn>
      <MainColumn>
        <div>
          <h2>Case Studies</h2>
          <List>
            <li><a href="/bc-design-systems">Design Systems at BuildingConnected</a></li>
            <li><a href="/bc-client-suggestions">Client Suggestions at BuildingConnected</a></li>
            <li><a href="/og-coa">OpenGov Chart of Accounts Manager</a></li>
          </List>
        </div>
        <div>
          <h2>Other Projects</h2>
          <OGChartOfAccounts />
          <OGNetwork />
          <HTUplink />
          <HTEnterprise />
          <HTUsageReport />
          <HTAndroid />
          <GradPIXD />
          <YSIUsability />
        </div>
        <Footer>
        <p>Last updated, Fall 2019</p>
      </Footer>
      </MainColumn>
    </div>
  )
};

export default HomePage