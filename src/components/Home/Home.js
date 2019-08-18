import React from "react"
// import BulletPoints from "./../../assets/content/bulletPoints"

import styled from 'styled-components'

import system from "../../styles/system.js"

import HeroBeachImage from "./../../assets/images/hero-image-beach.png"

import "./../../styles/system.scss"


const HomeContainer = styled.div`
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
  font-size: 18px
  margin-top: 8px;

  @media (max-width: ${system.breakpoints.small}) {
    font-size: 18px
  }
`
const CTA = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: white;

  &:visited {
    color: white;
    text-decoration: none;
  }
  &:active {
    color: ${system.colors.red}
  }
`

const Home = props => {
  return (
    <HomeContainer>
      <WelcomeText>
        <h1>Hi, I'm Morgan</h1>
        <Blurb>I’m a product designer who loves decision science, design technologies, and people. Most of all, people.</Blurb>
        <CTA href="/case-studies">View case-studies »</CTA>
      </WelcomeText>
    </HomeContainer>

  )
}

export default Home;
