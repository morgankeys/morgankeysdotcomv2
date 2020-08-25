import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import AboutMe from "../../components/about-me"
import CaseStudyList from "./CaseStudyList"

import {
  OGNetwork,
  HTUplink,
  HTEnterprise,
  HTUsageReport,
  HTAndroid,
  GradPIXD,
  YSIUsability,
  IntelHFE,
} from "../../assets/content/stories";

const SideColumn = styled.div`
    min-width: 300px;
    width: 300px;
    // height: 100vh;
    // position: sticky;
    // top: -50%;

    @media (max-width: ${system.breakpoints.large}) {
      min-width: unset;
      width: 100%;
    }
`
const MainColumn = styled.div`
    flex: 3 1 300px;

    & >div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
    
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
          padding: 0 16px;
        }
    `

  const SectionHeader = styled.div`
    border-bottom: 1px solid ${system.colors.g05};
    padding-bottom: 8px;

    @media (min-width: ${system.breakpoints.large}) {
      margin-top: 48px;
    }

    h2 {
        color: ${system.colors.g90};
        display: inline-block;
        font-size: 18px;
        font-family: ${system.fonts.body};
        font-weight: 300;
        width: 100%;
        overflow: visible;
      }
  `

  return (
    <div css={rootStyles}>
      <SideColumn>
        <AboutMe />
      </SideColumn>
      <MainColumn>
        <div>
          <SectionHeader>
            <h2>Case Studies</h2>
          </SectionHeader>
          <CaseStudyList />
        </div>
        <div>
          <SectionHeader>
            <h2>Older Projects</h2>
          </SectionHeader>
          <OGNetwork />
          <HTUplink />
          <HTEnterprise />
          <HTUsageReport />
          <HTAndroid />
          <YSIUsability />          
        </div>
        <Footer>
          <p>Last updated Summer 2020</p>
        </Footer>
      </MainColumn>
    </div>
  )
};

export default HomePage