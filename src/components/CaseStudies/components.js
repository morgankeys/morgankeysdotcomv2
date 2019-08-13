import styled, { css } from "styled-components";

import system from "../../styles/system.js"

export const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: align-items;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
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