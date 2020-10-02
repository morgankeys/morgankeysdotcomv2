import React from "react";

//Images
import BCLogo from "./../../assets/images/bc-logo.svg"

import BCDSHero from "./../../assets/images/bcds/0-bcds-hero@2x.png"
import BCOverview from "./../../assets/images/bcds/1-buildingconnected-overview@2x.png"
import OldStyleguide from "./../../assets/images/bcds/2-old-styleguide@2x.png"
import ComponentsOutOfSync from "./../../assets/images/bcds/3-components-out-of-sync@2x.png"
import OriginalRepo from "./../../assets/images/bcds/4-original-bcds-repo@2x.png"
import BCCulture from "./../../assets/images/bcds/5-bc-culture@2x.png"
import DesignTools from "./../../assets/images/bcds/6-design-tools@2x.png"
import SketchMatchCode from "./../../assets/images/bcds/7-sketch-match-code@2x.png"
import Deliverables from "./../../assets/images/bcds/8-deliverables@2x.png"
import AbstractRepo from "./../../assets/images/bcds/9-bcds-abstract-repo@2x.png"
import Summary from "./../../assets/images/bcds/10-bc-logo@2x.png"


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

const BCDSCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Logo src={BCLogo} maxWidth={120} />
        <Headline>Design Systems at BuildingConnected</Headline>
        <HeroImg src={BCDSHero} maxWidth={870} />
      </HeroSection>
      <Section>
        <Text>
          <h3>BuildingConnected</h3>
          <p>BuildingConnected is a platform for bidding on commercial construction projects. I joined in the summer of 2017, working on the subcontractor product.</p>
          <p>Our focus was helping “subs” manage the influx of invitations from general contractors looking for cost estimates.</p>
        </Text>
        <ImageContainer>
          <Img src={BCOverview} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Existing Systems</h3>
          <p>The team already had some rudimentary systems in place. There was a Sketch file with interconnected symbols that served as our style guide. It provided a common set of options that could be mixed and matched, but little guidance on what patterns should be used and when.</p>
          <p>I’ve always enjoyed great tooling and loved the power of symbols to build mocks quickly. Symbols and systems allow you to focus on the feature at hand instead of reinventing the wheel every time.</p>
        </Text>
        <ImageContainer>
          <Img src={OldStyleguide} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Symbols vs Code</h3>
          <p>Over the years, code and symbols had begun to diverge. There was constant confusion over the specifics of UI designs.</p>
          <p>Even though the style guide only specified 4 possible font-treatments, every feature involved a back-and-forth about size and weight. Designers confused color usage, leading engineers to create conflicting SASS variables. The problems were myriad.</p>
          <p>The product moved forward through diligence and hard-work, but as the company grew, so did concerns about scalability.</p>
        </Text>
        <ImageContainer>
          <Img src={ComponentsOutOfSync} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Experimenting</h3>
          <p>By spring of 2018, I was becoming more and more interested in tooling and how we could improve our process. I learned about a library called React Sketch.app and began experimenting with ways to bring our code and designs better in sync.</p>
          <p>On my own time, I built an experimental app that could generate UI-button symbols from React as well as a simple style guide. I also included a copy of our team Sketch file in an effort to begin versioning it.</p>
          <p>Ultimately, our leadership team noticed my work and paired me with an engineer to work on design systems full time.</p>
        </Text>
        <ImageContainer>
          <Img src={OriginalRepo} />
        </ImageContainer>
      </Section>
      <Section >
        <Text>
          <h3>A note about culture</h3>
          <p>My previous company had a very different culture: every feature was white-boarded extensively, thoroughly discussed and debated with every team member. We built powerful products, but it sometimes meant a slower pace.</p>
          <p>BuildingConnected was much more focused on tangible impact and personal initiative. Your work needed to be thoughtful, but momentum was more important than debate. A deliverable today was more valuable than ideas for tomorrow. This meant more incremental improvements, but at a faster pace.</p>
          <p>There are pros and cons to both approaches, and BuildingConnected continues to evolve, but this was an important consideration for me.</p>
        </Text>
        <ImageContainer>
          <Img src={BCCulture} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Focusing on impact</h3>
          <p>Some design system projects aim to define the UI from the ground up. But with a narrow mandate, and given BuildingConnected’s preferece for the immediate, I made a conscious decision to focus on tools and integration as opposed to reinventing styles and patterns.</p>
          <p>I began to rebuild our Sketch symbols with built-in standards and started versioning these assets. Working closely with engineering, I recommended a tool for automatically generating documentation from our component library and together we launched an internal site. We then shared these resources with other teams as a source-of-truth, which they quickly adopted.</p>
        </Text>
        <ImageContainer>
          <Img src={DesignTools} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Creating a common language</h3>
          <p>Historically, confusion would arise if a designer selected a symbol override that engineering had not foreseen. Just because you could easily combine two things in Sketch, didn’t mean that it was easy to build. And without semantic guidelines on either side, styling logic became random and confusing.</p>
          <p>I carefully built symbols with naming-patterns and overrides that would imply usage. I then encouraged engineering to build in similar patterns in the API.</p>
        </Text>
        <ImageContainer>
          <Img src={SketchMatchCode} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Initial work and impact</h3>
          <p>By September, I had committed hundreds of symbols into a versioned “UI Kit” for designers. Other deliverables included:</p>
          <ul>
            <li>Documentation for new components with usage guidelines</li>
            <li>Standardized naming and usage patterns for colors</li>
            <li>Tools to programmatically generate colors for interaction states</li>
            <li>Symbol names designed to optimize the Sketch insert menu</li>
          </ul>
          <p>The team embraced these tools enthusiastically and provided valuable feedback. The system has helped speed up design cycles and streamline the design-development handoff.</p>
        </Text>
        <ImageContainer>
          <Img src={Deliverables} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Current work and evolution</h3>
          <p>Over the last few quarters, the system has grown to nearly 1,200 Sketch symbols and dozens of code components. There are also a myriad of documents and assets to help designers find what they need.</p>
          <p>The Sketch tools are used by all 9 Product Designers and both Design and Engineering lean on the style guide website regularly. My team has grown to a full-fledged Front-End Platform team with 3 engineers and a tech lead.</p>
          <p>Moving forward, we’ve started to expand our thinking beyond tooling to focus on cross-functional initiatives. I now coordinate “design rotations” where other designers spend a sprint doing maintenance work or creating new symbols. I also run workshops to train designers and to lead explorations on topics such as accessibility & color.</p>
        </Text>
        <ImageContainer>
          <Img src={AbstractRepo} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Future Work</h3>
          <p>The design system has done a lot to reduce confusion, accelerate hand-offs, and focus the team on building better components and standards.</p>
          <p>But it’s clear that new approaches will be necessary as the product and company continue to grow and evolve. Now that tools and processes are aligned, we can begin the deeper work of evaluating our UI patterns and improving styles, accesibility, and brand consistency.</p>
        </Text>
        <ImageContainer>
          <Img src={Summary} maxWidth={200} />
        </ImageContainer>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Summer 2019</p>
      </CaseStudyFooter>
    </CaseStudyContainer >
  );
};

export default BCDSCaseStudy;
