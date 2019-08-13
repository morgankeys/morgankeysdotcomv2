import React from "react";

import styled, { css } from "styled-components";

//Images
import ogLogo from "./../../assets/images/og-logo.svg";
import heroImage from "./og-coa/0-hero-image@2x.png";
import financeDirector from "./og-coa/1-finance-director@2x.png";
import opengovReport from "./og-coa/2-opengov-report@2x.png";
import animalTaxonomy from "./og-coa/3-animal-taxonomy@2x.png";
import oldCoaEditor from "./og-coa/4-old-coa-editor@2x.png";
import terry from "./og-coa/5-terry@2x.png";
import diagrams from "./og-coa/6-diagrams@2x.png";
import earlyConcept from "./og-coa/7-early-concept@2x.png";
import artifact from "./og-coa/8-artifact@2x.png";
import slotMachine from "./og-coa/9-slot-machine@2x.png";
import alpha from "./og-coa/10-alpha@2x.png";
import filters from "./og-coa/11-filters@2x.png";
import finalScreenshot from "./og-coa/12-final screenshot@2x.png";

const system = {
  breakpoints: {
    small: "24em",
    medium: "36em",
    large: "48em",
    xl: "60em"
  }
};


const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: align-items;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
`

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Headline = styled.h1`
  margin-bottom: 48px;
  text-align: center;
`

const Section = styled.section`
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

const Text = styled.div`
  padding-top: 24px;
  min-width: 300px;
  max-width: 510px;
`

const ImageContainer = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: center;
  align-items: start;
  height: auto;
  width: 100%;
  max-width: 510px;

`

const Img = styled.img`
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

const Logo = styled(Img)`
  margin-top: 80px;
  margin-bottom: 40px;
`

const HeroImg = styled(Img)`
    margin-bottom: 128px;
    width: 100%;
`



const CaseStudies = props => {
  return (
    <CaseStudyContainer>
      <HeroSection>
        <Logo src={ogLogo} maxWidth={120} />
        <Headline>OpenGov Chart of Accounts Manager</Headline>
        <HeroImg src={heroImage} maxWidth={870} />
      </HeroSection>
      <Section>
        <Text>
          <h3>Public servants</h3>
          <p>
            OpenGov’s primary users are the public servants who run local
            governments. This can include elected officials such as mayors, but
            the more common, day-to-day users are department heads, analysts,
            accountants, and finance directors.
          </p>
          <p>
            The bulk of my work focused on accounting and finance users. These
            users are risk-averse, detail oriented people. But they also take
            pride in their work and view it as their solemn mission to
            articulate financial data in a way that their staff and the public
            can understand.
          </p>
        </Text>
        <ImageContainer>
          <Img src={financeDirector} maxWidth={330} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Financial transparency</h3>
          <p>
            A chart of accounts is a long-standing, esoteric accounting tool,
            but it is essentially a series of taxonomies. Thus, an easy analogy
            for the average person would be the classification of animals: just
            as scientists place an animal into groups, one for each level,
            accountants do the same for transactions.
          </p>
          <p>
            The difference in accounting, though, is that they use multiple
            taxonomies for each transaction and the structure can vary from one
            organization to another, or even based on the kind of report.
          </p>
          <p>
            A small government might use three taxonomies, each with 2-3 levels.
            But more sophisticated govenernments could have 4-5 taxonomies, with
            up to six-levels. We often saw charts that tracked tens of thousands
            of types.
          </p>
        </Text>
        <ImageContainer>
          <Img src={opengovReport} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>The legacy solution</h3>
          <p>
            A chart of accounts is a long-standing, esoteric accounting tool,
            but it is essentially a series of taxonomies. Thus, an easy analogy
            for the average person would be the classification of animals: just
            as scientists place an animal into groups, one for each level,
            accountants do the same for transactions.
          </p>
          <p>
            The difference in accounting, though, is that they use multiple
            taxonomies for each transaction and the structure can vary from one
            organization to another, or even based on the kind of report.
          </p>
          <p>
            A small government might use three taxonomies, each with 2-3 levels.
            But more sophisticated govenernments could have 4-5 taxonomies, with
            up to six-levels. We often saw charts that tracked tens of thousands
            of types.
          </p>
        </Text>
        <ImageContainer>
          <Img src={animalTaxonomy} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>The legacy solution</h3>
          <p>
            OpenGov already had an existing tool for managing charts of
            accounts, built as an MVP in the early days of the start up.
          </p>
          <p>
            The tool made certain implementation assumptions that meant these
            taxonmies had to be handled separately. It also used a folder-like
            interface that did not actually represent the data well and, due to
            a lack of error-handling, even allowed users to make non-sensical
            edits and corrupt their data accidentally.
          </p>
          <p>
            When I was assigned to work on a chart of accounts manager redesign,
            there were things we couldn’t change, but we could improve the user
            interface.
          </p>
        </Text>
        <ImageContainer>
          <Img src={oldCoaEditor} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Listening and learning</h3>
          <p>
            Other than a background in math and a curiosity for data structures,
            I had little relevant experience to draw on for this project. My
            first step was to listen and learn.
          </p>
          <p>
            Luckily, we had retired finance directors on staff with decades of
            experience. We also had a team of technical support staff who were
            talking with customers on a daily basis, training them and solving
            technical challenges. I set up learnings sessions and made countless
            desk-visits.
          </p>
          <p>
            {" "}
            also took the opportunity to join customer calls and learn from
            customers directly. I listened for the kinds of questions they asked
            customer success and then asked questions of my own.
          </p>
        </Text>
        <ImageContainer>
          <Img src={terry} maxWidth={330} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Becoming an expert</h3>
          <p>
            Given the vast complexity of this tool and the data it was managing,
            I had to really grapple with the subject matter. I began diagraming
            concepts, at first just to help articulate ideas to myself.
          </p>
          <p>
            I shared these diagrams with the customers success teams for
            feedback. It prompted great discussions, but we also realized that
            these documents could be training tools. After all, I was not the
            only team member struggling to learn these concepts.
          </p>
          <p>
            The customer success team ultimately began distributing these
            documents to customers as well. Over the course of this project, and
            in my later work, I became one of the company’s chart of accounts
            experts.
          </p>
        </Text>
        <ImageContainer>
          <Img src={diagrams} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Early concepts</h3>
          <p>
            When I felt that I was beginning to grasp the concept of a chart of
            accounts, I looked for ways to better represent it in the interface.
            Inspired by a popular data-visualization library, I tried mocking up
            an interface that represented taxonomies as a dendrogram.
          </p>
          <p>
            It was an exciting approach, with the potential to give an
            unprecedented bird’s eye view of the chart of accounts. But there
            were serious problems.
          </p>
          <p>
            First, the tree like organization made it difficult to view the
            entire categorization for a type—something critically important in a
            taxonomy. Second, illustrating the connections meant that text was
            not packed tightly and it would be hard to see thousands of nodes in
            a readable way.
          </p>
        </Text>
        <ImageContainer>
          <Img src={earlyConcept} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Back to the drawing board</h3>
          <p>
            One of my favorite, under-appreciated research methods is artifact
            analysis. By analyzing the files and objects that people use to
            perform their work, you can learn valuable, tacit insights.
          </p>
          <p>
            I examined the spreadsheet files that users were uploading to
            OpenGov. I tried to understand the way information was laid out. I
            realized that spreadsheets did a great job of displaying taxonomies
            in a compact, readable, and easy to manipulate way. There was only
            one draw-back to the spreadsheet—the row-column grid required that
            labels be repeated to show when many categories were grouped under a
            parent, leading to visual noise.
          </p>
          <p>It occured to me, what if we could make something dynamic?</p>
        </Text>
        <ImageContainer>
          <Img src={artifact} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>A new concept</h3>
          <p>
            Imagining a dynamic spreadsheet, with columns automatically
            scrolling to show relationships, I mocked up the new concept. It was
            a difficult concept to communicate abstractly so I tried various
            methods to explain them. I tried Framer, animations, and even simple
            html/css prototypes. The concept became known as the “slot-machine”
            in reference to the way it synchronized.
          </p>
          <p>
            Eventually, I paired with an engineer who built an early alpha
            version for testing.
          </p>
        </Text>
        <ImageContainer>
          <Img src={slotMachine} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Usability testing</h3>
          <p>
            I travelled with OpenGov account mangers to visit local customers
            and test with live customers. I used a short pre-interview script
            and ran a standard task-based usability test. The goal was to assess
            if users could understand what the interface was communicating and
            if they could sucessfully perform basic editing and navigation
            tasks.
          </p>
          <p>
            The results were very positive. Especially considering the unique
            approach to visualization, it was exciting to see how naturally
            users picked it up.
          </p>
          <p>
            These tests provided important validation of the concept, but we
            later learned that there were limitations.
          </p>
        </Text>
        <ImageContainer>
          <Img src={alpha} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Working with Customer Success</h3>
          <p>
            OpenGov is an enterprise sales company, which means that account
            management and customer success play a huge and ongoing role in the
            customer experience. In fact many customers, due to busy schedules
            or a lack of tech savvy, relied entirely on customer success to
            handle the technical work necessary to set up their accounts. This
            included working with the Chart of Accounts Manager.
          </p>
          <p>
            And though I had spent many hours speaking with and learning from
            Customer Success, it became clear that they were the true
            power-users and I would need to learn their day-to-day workflows as
            well.
          </p>
          <p>
            Based on learnings from 1-on-1 work sessions, I designed several
            features that enhanced their ability to search and make bulk-edits.
            One such feature allowed users to apply multiple filters at
            different levels, meaning they could quickly target a set of items
            and then easily move them to a new parent.
          </p>
          <p>These features opened the door to the tool’s ultimate success.</p>
        </Text>
        <ImageContainer>
          <Img src={filters} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Impact</h3>
          <p>
            The new design replaced the old editor and became the workhorse of
            the OpenGov platform. It enabled Customer Success to efficiently
            support customers and make chart of accounts manipulation accesible
            to more end-users.
          </p>
          <p>
            Many users reported moments of delight when trying the new tool.
            They seemed to have small epiphanies, as if to say, “oh, right,
            that’s how it works”. I suspect, in the world of accounting
            software, this maybe one of the only tools that is actually fun to
            use.
          </p>
          <p>
            The tool also made some surprising achievements. First, even though
            the tool was typically packaged with the platform, one customer
            opted for a special contract, paying $42,000 for just the Chart of
            Accounts Manager. Second, the novelty of the user interface combined
            with some of the technical achievements in it’s engineering have
            qualified it for patent consideration—it is currently pending (
            <a href="https://patents.google.com/patent/US20170270697A1/en">
              US20170270697A1
            </a>
            ).
          </p>
        </Text>
        <ImageContainer>
          <Img src={finalScreenshot} />
        </ImageContainer>
      </Section>
      <footer>
        <p>Morgan Keys | Summer 2019</p>
      </footer>
    </CaseStudyContainer>
  );
};

export default CaseStudies;
