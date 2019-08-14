import React from "react";

import styled, { css } from "styled-components";

import system from "../../styles/system.js"

import BackIcon from "./../../assets/icons/back-arrow.svg"

const NavHeight = "56px"

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NavHeight};
  border-bottom: 1px solid ${system.colors.g05};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: white;

  h1 {
    font-size: 32px;

    @media (max-width: ${system.breakpoints.small}) {
      font-size: 24px;
    }
  }

  a {
    height: 32px;
    object-fit: cover;
    position: absolute;
    left: 16px;
    cursor: pointer;

    @media (max-width: ${system.breakpoints.small}) {
      height: 24px;
    }

    img {
      height: 32px;
      cursor: pointer;

      @media (max-width: ${system.breakpoints.small}) {
        height: 24px;
      }
    }


  }
`
export const Navigation = props => {
  return (
    <NavBar>
      <a href="/case-studies"><img src={BackIcon} /></a>
      <h1>Morgan Keys</h1>
    </NavBar>
  )
}

{/* <div>
<ul>
  <li><a href="/bc-design-systems">Design Systems at BuildingConnected</a></li>
  <li><a href="/bc-client-suggestions">Client Suggestions at BuildingConnected</a></li>
  <li><a href="/og-coa">OpenGov Chart of Accounts Manager</a></li>
</ul>
</div> */}

export const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: align-items;
  align-items: center;
  flex-direction: column;
  padding: ${NavHeight} 16px 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Headline = styled.h1`
  margin-bottom: 48px;
  text-align: center;
`

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 112px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1200px;

  ${props =>
    props.alternate &&
    css`
      flex-direction: row-reverse;
    `}
`

export const Text = styled.div`
  padding-top: 24px;
  min-width: 300px;
  max-width: 510px;
`

export const ImageContainer = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: center;
  align-items: start;
  height: auto;
  width: 100%;
  max-width: 510px;

`

export const Img = styled.img`
  object-fit: contain;

    ${props => {
    if (props.maxWidth) {
      return css`
          max-width: ${props.maxWidth}px;
        `;
    } else {
      return css`
          max-width: 100%;
        `;
    }
  }};
`

export const Logo = styled(Img)`
  margin-top: 80px;
  margin-bottom: 40px;
`

export const HeroImg = styled(Img)`
    margin-bottom: 128px;
    width: 100%;
`
export const CaseStudyFooter = styled.footer`
    margin-bottom: 128px;
    width: 100%;
    text-align: center;
    color: ${system.colors.g55}
`