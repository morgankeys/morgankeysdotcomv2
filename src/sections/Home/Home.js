import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import AboutMe from "../../components/about-me"
import { PageColumn as MainColumn } from "../../components/page-column"
import CaseStudyList from "./CaseStudyList"

const SideColumn = styled.div`
    min-width: 300px;
    width: 300px;

    @media (max-width: ${system.breakpoints.large}) {
      min-width: unset;
      width: 100%;
    }
`

const Footer = styled.div`
    color: ${system.colors.g55};
    font-size: 24px;
    margin: 96px 0;
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

const HomePage = props => {
  let rootStyles = css`
        display: flex;
        flex-wrap: wrap;
        padding: 0 48px;

        @media (max-width: ${system.breakpoints.large}) {
          padding: 0 16px;
        }
    `



  return (
    <div css={rootStyles}>
      <SideColumn>
        <AboutMe />
      </SideColumn>
      <MainColumn flex="3 3 300px">
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
          <div>
            <a href="/older-projects">Click here to see older projects.</a>
          </div>
        </div>
        <Footer>
          <p>Last updated October 2020</p>
        </Footer>
      </MainColumn>
    </div>
  )
};

export default HomePage