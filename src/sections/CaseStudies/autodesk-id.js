import React from "react";

//Images
import BCLogo from "./../../assets/images/bc-logo.svg"
import CSHero from "./../../assets/images/bc-client-suggestions/0-cs-hero@2x.png"


//Styled-components
import {
  Navigation,
  CaseStudyContainer,
  HeroSection,
  Headline,
  Section,
  Text,
  ImageContainer,
  Img,
  Logo,
  HeroImg,
  CaseStudyFooter
} from "./components"

const AutodeskIDCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Logo src={BCLogo} maxWidth={120} />
        <Headline>Autodesk ID</Headline>
        <HeroImg src={CSHero} maxWidth={870} />
      </HeroSection>
      <Section>
        <Text>
          <h3>(Headline)</h3>
          <p>(content)</p>
        </Text>
        {/* <ImageContainer>
          <Img src={} maxWidth={330} />
        </ImageContainer> */}
      </Section>
      <Section alternate>
      <Text>
          <h3>(Headline)</h3>
          <p>(content)</p>
        </Text>
        {/* <ImageContainer>
          <Img src={} maxWidth={330} />
        </ImageContainer> */}
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Summer 2019</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  )
};

export default AutodeskIDCaseStudy;
