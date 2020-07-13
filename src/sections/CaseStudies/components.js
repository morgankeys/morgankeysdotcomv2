import React from "react";

import styled, { css } from "styled-components/macro";

import system from "../../styles/system.js"

import BackIcon from "./../../components/back-icon"

import ZoomableImage from "../../components/zoomable-image"

const NavHeight = "56px"

const NavBar = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${system.colors.g05};
  display: flex;
  height: ${NavHeight};
  justify-content: center;
  left: 0;
  padding: 0 16px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

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
  }
`

export const Navigation = props => {
  return (
    <NavBar>
      <a href="/home"><BackIcon /></a>
      <h1>Morgan Keys</h1>
    </NavBar>
  )
}

export const CaseStudyContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: align-items;
  left: 0;
  padding: ${NavHeight} 16px 0 16px;
  position: absolute;
  right: 0;
  top: 0;
`

export const HeroSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Headline = styled.h1`
  margin-bottom: 48px;
  text-align: center;
`

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 112px;
  max-width: 1200px;
  width: 100%;

  ${props =>
    props.alternate &&
    css`
      flex-direction: row-reverse;
    `}
`

export const Text = styled.div`
  max-width: 510px;
  min-width: 300px;
  padding-top: 24px;

  h3 {
    color: ${system.colors.g90}
  }
  
  ul,li, p {
    color: ${system.colors.g75}
  }
`

const StyledImage = styled.div`
  align-items: start;
  display: flex;
  height: auto;
  justify-content: center;
  max-width: 510px;
  padding-top: 24px;
  width: 100%;
}
`

export const ImageContainer = props => {
  return (
    <ZoomableImage style={{"outline": "none"}}>
      <StyledImage>
        {props.children}
      </StyledImage>
    </ZoomableImage>
  )
}

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
  margin-bottom: 40px;
  margin-top: 80px;
`

export const HeroImg = styled(Img)`
    margin-bottom: 128px;
    width: 100%;
`
export const CaseStudyFooter = styled.footer`
    color: ${system.colors.g55}
    margin-bottom: 128px;
    text-align: center;
    width: 100%;
`