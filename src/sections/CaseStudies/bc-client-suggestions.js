import React from "react";

//Images
import BCLogo from "./../../assets/images/bc-logo.svg"
import CSHero from "./../../assets/images/bc-client-suggestions/0-cs-hero@2x.png"
import Estimator from "./../../assets/images/bc-client-suggestions/1-estimator@2x.png"
import WinButLose from "./../../assets/images/bc-client-suggestions/2-win-but-lose@2x.png"
import BCNetwork from "./../../assets/images/bc-client-suggestions/3-bc-network@2x.png"
import FramerPrototype from "./../../assets/images/bc-client-suggestions/4-framer-prototype@2x.png"
import ModalMock from "./../../assets/images/bc-client-suggestions/5-modal-mock@2x.png"
import OverviewImpact from "./../../assets/images/bc-client-suggestions/6-overview-impact@2x.png"
import EvolvingProduct from "./../../assets/images/bc-client-suggestions/7-evolving-product@2x.png"
import Summary from "./../../assets/images/bc-client-suggestions/8-bc-logo@2x.png"

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

const BCClientSuggestionsCaseStudy = props => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Logo src={BCLogo} maxWidth={120} />
        <Headline>Client Suggestions at BuildingConnected</Headline>
        <HeroImg src={CSHero} maxWidth={870} />
      </HeroSection>
      <Section>
        <Text>
          <h3>Building for builders</h3>
          <p>BuildingConnected’s Bid Board product is built primarily for subcontractors, specifically estimators and bid-coordinators. Their job is to handle a high volume of invites from general contractors. They must carefully read through project files, determine whether an opportunity is worth their time, and submit a bid in hopes of landing new business.</p>
          <p>Keeping a healthy pipeline of projects is critical to their business and choosing to compete for the wrong project can mean many wasted person-hours. But even a great bid-proposal can be rejected for reasons outside of their control.</p>
        </Text>
        <ImageContainer>
          <Img src={Estimator} maxWidth={330} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>The problem</h3>
          <p>In many cases, the general contractor who sent an invite is not the only company working on the job. They may be competing with another GC to win the contract from the property owners. The sub is a step removed from the ultimate decision-maker.</p>
          <p>Construction is a heavily relationship-based business. Companies tend to do business with those that they’ve worked well with in the past. If a general contractor you don’t know bids on a project, they might not invite you.</p>
          <p>Subs can then end up in a frustrating situation: they’ve done the hard work and submitted a great proposal, but the general contractor they know loses—and so do they.</p>
          <p>Thus, in order to maximize their chance of winning, subs want to  send their bid to every general contractor in the running. But if they don’t know everyone who is bidding, how can they?</p>
        </Text>
        <ImageContainer>
          <Img src={WinButLose} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>A solution, an opportunity</h3>
          <p>The power of BuildingConnected’s platform is the ability to aggregate project data from an entire city or region. Through the use of machine learning, BuildingConnected can form associations between invites and reliably determine when two general contractors are competing for the same project. This information can be be passed on to subcontractors, so that they can submit to all parties and thus maximize their winning potential.</p>
          <p>Our product team knew this was a potential value-add. The question for us was: how do we surface it?</p>
        </Text>
        <ImageContainer>
          <Img src={BCNetwork} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Rapid prototyping</h3>
          <p>I was assigned to develop an experience for surfacing suggestions to subcontractors. Our data could tell when another GC was bidding, but how could we communicate this? Would subs understand the point? Also, how would they react?</p>
          <p>We had a short time-frame to work with and only enough resources for a small experiment. I began sketching concepts and quickly had three approaches.</p>
          <p>I am a big believer in high-fidelity interactions, and I love the power of tools like Framer to create more realistic experiences. I decided to build rough but interactive Framer prototypes for feedback and quickly tested three options with members of our sales and customer success teams.</p>
        </Text>
        <ImageContainer>
          <Img src={FramerPrototype} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>Designing for learning</h3>
          <p>Initial feedback suggested that a combination of two approaches would be best. I built a high-fidelity prototype to work out the details of styling and placement.</p>
          <p>Product intended this project to be a quick experiment—only enough to gauge interest. With this in mind I tried to build in a way that could maximize learning.</p>
          <p>We couldn’t build a sophisticated flow, but I designed the experience to include mail-to links so that users could at least have a call-to-action to decide on—these clicks could then give us quantitative data to support interest.</p>
          <p>I also included a feedback form in the primary modal. The idea was that if subs needed different information, or if they disliked our suggestions, they could let us know immediately.</p>
          <p>The ultimate sign of success would be if users wanted to see our suggestions and take action on them.</p>
        </Text>
        <ImageContainer>
          <Img src={ModalMock} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Initial impact</h3>
          <p>The feature was very successful. During the trial period, we collected FullStory sessions (reconstructed videos based on mouse and click data). We watched a user discover the feature and then furiously double-check every opportunity in their extensive backlog for more suggestions.</p>
          <p>Product and Customer Success also reported postive feedback from conversations with users. The feature definitely had traction.</p>
          <p>However, there were two important learnings:</p>
          <ul>
            <li>Users seemed reluctant to use the mail-to links</li>
            <li>Users wanted all of the suggestions at once</li>
          </ul>
        </Text>
        <ImageContainer>
          <Img src={OverviewImpact} />
        </ImageContainer>
      </Section>
      <Section>
        <Text>
          <h3>A constantly evolving product</h3>
          <p>Part of the need for a quick release on our first pass was due to incoming features that would significantly change the UI we were designing for—we were going to have to redesign anyway.</p>
          <p>For our second pass we took advantage of the richer functionality. Users now had the ability to group opportunities together. Building off of this:</p>
          <ul>
            <li>I designed calls-to-action for the inbox, allowing users to quickly scan for new suggestions</li>
            <li>Instead of mail-to links, I designed a quick-add feature so that users could stay in the same workflow and effortlessly begin tracking the new general contractor</li>
          </ul>
        </Text>
        <ImageContainer>
          <Img src={EvolvingProduct} />
        </ImageContainer>
      </Section>
      <Section alternate>
        <Text>
          <h3>Ongoing impact and learnings</h3>
          <p>Client Suggestions had a significant impact on the Bid Board product and BuildingConnected. It became a strong selling point for our Sales team and helped drive revenue until the company’s eventual acquisition.</p>
          <p>Personally, I also learned an important lesson about about my own thinking and process. As a designer, I think there is often an urge to avoid solutions that increase “clutter”—the concern being aesthetics and scanability. However, in this case, adding more information to the already dense inbox was still the right choice. Ultimately, “clutter” must be handled holistically so that we can stay focused on the task at hand.</p>
        </Text>
        <ImageContainer>
          <Img src={Summary} maxWidth={200}/>
        </ImageContainer>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Summer 2019</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  )
};

export default BCClientSuggestionsCaseStudy;
