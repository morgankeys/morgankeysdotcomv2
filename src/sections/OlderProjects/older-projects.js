import React from "react"
import { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import Navigation from "../../components/navigation"
import {PageColumn} from "../../components/page-column"
import SectionHeader from "../../components/section-header"
// import SideColumn from "../../components/side-column"

import {
  OGNetwork,
  HTUplink,
  HTEnterprise,
  HTUsageReport,
  HTAndroid,
  GradPIXD,
  YSIUsability,
  IntelHFE,
} from "./stories";

const OlderProjects = props => {
  let rootStyles = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 48px;
        

        @media (max-width: ${system.breakpoints.large}) {
          padding: 0 16px;
        }
    `

  return (
    <div css={rootStyles}>
      <Navigation />
      <PageColumn>
        <SectionHeader>
          <h2>Older Projects</h2>
        </SectionHeader>
        <OGNetwork />
        <HTUplink />
        <HTEnterprise />
        <HTUsageReport />
        <HTAndroid />
        <YSIUsability />
        <GradPIXD />
        <IntelHFE />
      </PageColumn>
    </div>
  )
};

export default OlderProjects