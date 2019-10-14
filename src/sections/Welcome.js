import React from "react"

import styled from 'styled-components/macro'

import system from "../styles/system.js"

import HeroBeachImage from "./../assets/images/hero-image-beach.png"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  object-fit: cover;
  background: right / cover no-repeat url(${HeroBeachImage});
  display: flex;
`
const WelcomeText = styled.div`
  color: white;
  padding: 32px;
  max-width: 600px;
`

const Blurb = styled.p`
  font-size: 21px
  margin-top: 8px;

  @media (max-width: ${system.breakpoints.small}) {
    font-size: 18px
  }
`
const CTA = styled.a`
  font-size: 21px;
  text-decoration: none;
  color: white;
  font-weight: 400;

  &:visited {
    color: white;
    text-decoration: none;
  }
  &:active {
    color: ${system.colors.red}
  }
`

const Welcome = props => {
  return (
    <Container>
      <WelcomeText>
        <h1>Hi, I'm Morgan</h1>
        <Blurb>I’m a product designer who loves decision science, design technologies, and people. Most of all, people.</Blurb>
        <CTA href="/home">View case-studies »</CTA>
      </WelcomeText>
    </Container>

  )
}

export default Welcome;
