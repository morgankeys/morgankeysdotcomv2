import React from "react";

import styled, { css } from "styled-components";

//Images
import ogLogo from "./../../assets/images/og-logo.png"
import heroImage from "./../../assets/images/og-coa/0-hero-image@2x.png"
import financeDirector from "./../../assets/images/og-coa/1-finance-director@2x.png"
import opengovReport from "./../../assets/images/og-coa/2-opengov-report@2x.png"
import animalTaxonomy from "./../../assets/images/og-coa/3-animal-taxonomy@2x.png"
import oldCoaEditor from "./../../assets/images/og-coa/4-old-coa-editor@2x.png"
import terry from "./../../assets/images/og-coa/5-terry@2x.png"
import diagrams from "./../../assets/images/og-coa/6-diagrams@2x.png"
import earlyConcept from "./../../assets/images/og-coa/7-early-concept@2x.png"
import artifact from "./../../assets/images/og-coa/8-artifact@2x.png"
import slotMachine from "./../../assets/images/og-coa/9-slot-machine@2x.png"
import alpha from "./../../assets/images/og-coa/10-alpha@2x.png"
import filters from "./../../assets/images/og-coa/11-filters@2x.png"
import finalScreenshot from "./../../assets/images/og-coa/12-final screenshot@2x.png"

//Styled-components
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

const BCClientSuggestionsCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <HeroSection>
        <Logo src={null} maxWidth={120} />
        <Headline>OpenGov Chart of Accounts Manager</Headline>
        <HeroImg src={null} maxWidth={870} />
      </HeroSection>
      <Section>
        <Text>
          <h3>Public servants</h3>
          <p>

          </p>
        </Text>
        <ImageContainer>
          <Img src={null} maxWidth={330} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Future Work</h3>
          <p>The design system has done a lot to reduce confusion, accelerate hand-offs, and focus the team on building better components and standards.</p>
          <p>But it’s clear that new approaches will be necessary as the product and company continue to grow and evolve. Now that tools and processes are aligned, we can begin the deeper work of evaluating our UI patterns and improving styles, accesibility, and brand consistency.</p>
        </Text>
        <ImageContainer>
          <Img src={null} />
        </ImageContainer>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Summer 2019</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  )
};

export default BCClientSuggestionsCaseStudy;
