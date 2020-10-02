import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import AboutMe from "../../components/about-me"
import SectionHeader from "../../components/section-header"
import { PageColumn as MainColumn } from "../../components/page-column"
import CaseStudyList from "./case-study-list"

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

const OlderProjects = styled.div`
    margin: 32px;
    max-width: 440px;
`

const CTADiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0;
`
const CTAButton = styled.a`
    background-color: ${system.colors.g90};
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    padding: .66rem;
    cursor: pointer;

    &:hover{
      background-color: ${system.colors.hatRed};
      text-decoration: none;
    }
    &:active {
      color: #fff;
      background-color: ${system.colors.red};
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
          <OlderProjects>
            Want more? You can also view summaries of my projects from older jobs, internships, and grad school.
            <CTADiv>
              <CTAButton href="/older-projects">View older projects</CTAButton>
            </CTADiv>
          </OlderProjects>
        </div>
        <Footer>
          <p>Last updated October 2020</p>
        </Footer>
      </MainColumn>
    </div>
  )
};

export default HomePage