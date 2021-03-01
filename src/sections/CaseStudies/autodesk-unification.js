import React from "react";

//Images
import ADSKhero from "./../../assets/images/autodesk-id/hero.png"

//Styled-components
import Navigation from "../../components/navigation"
import {
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

const AutodeskUnificationCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Headline>Autodesk Unification</Headline>
        <Logo src={ADSKhero} maxWidth={600} />    
      </HeroSection>
      <Section>
      <h3>Background</h3>
      <p>Autodesk acquired BuildingConnected with the goal of building an end-to-end SAAS platform for the commercial construction process. Already strong in the design space with tools such as Revit and AutoCAD, BuildingConnected and other acquired products could bring data and workflow management solutions that would rival competitors like ProCore.</p>
      <p>But the first step in this long-term vision was integrating user accounts. In the Fall of 2019, I was asked to lead an initiative to evaluate how BuildingConnected might integrate with Autodesk’s authentication platform, known as Autodesk ID.</p>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Winter 2021</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  )
};

export default AutodeskUnificationCaseStudy;
