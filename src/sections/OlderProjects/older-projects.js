import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../../styles/system.js"

import Navigation from "../../components/navigation"
import {PageColumn} from "../../components/page-column"

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

const HomePage = props => {
  let rootStyles = css`
        display: flex;
        justify-content: center;
        padding: 0 48px;
        

        @media (max-width: ${system.breakpoints.large}) {
          padding: 0 16px;
        }
    `

  return (
    <div css={rootStyles}>
      <Navigation />
      <PageColumn>
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

export default HomePage