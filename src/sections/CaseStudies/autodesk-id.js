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

const AutodeskIDCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Logo src={ADSKhero} maxWidth={400} />
        <Headline>Autodesk ID</Headline>
      </HeroSection>
      <Section>
        <Text>
          <h3>Unifying the platform</h3>
          <p>After joining Autodesk via acquisition, I was asked to lead an initiative to evaluate ways of integrating BuildingConnected with the larger Autodesk ecosystem. I led a team of two designers, a UX researcher, a product manager, and an engineer. Over the course of 8 weeks, I created the project plan, worked with our software architect to understand technical details, planned and facilitated design workshops, created and tested prototypes, and helped drive the team toward consensus. The project delivered not only a carefully reasoned recommendation, but also an implementation plan that put the user-experience first.</p>
          <p>Ultimately, the plan created a roadmap for migrating BuildingConnected's 1 million+ users into the Autodesk Construction Cloud.</p>
          <p>(This case study is currently a work in progress. Check back soon for more details.)</p>
        </Text>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Fall 2019</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  )
};

export default AutodeskIDCaseStudy;
