import React from "react";
import styled from "styled-components";
import system from "../../styles/system.js";
import ZoomableImage from "../../components/zoomable-image";

//Images
import ADSKhero from "./../../assets/images/autodesk-id/hero.png";
import ADSKSignIn from "./../../assets/images/autodesk-unification/adsk-sign-in-optimized.png";
import ADSKUniHero from "./../../assets/images/autodesk-unification/adsk-uni-hero-optimized.png";
import BiddingProcess from "./../../assets/images/autodesk-unification/bidding-process-optimized.png";
import ConfirmationPage from "./../../assets/images/autodesk-unification/confirmation-page-optimized.png";
import InsertSignUp from "./../../assets/images/autodesk-unification/insert-sign-up-optimized.png";
import ITBFlow from "./../../assets/images/autodesk-unification/ITB-flow-optimized.png";
import ITBPlusAId from "./../../assets/images/autodesk-unification/ITB-plus-A-ID-optimized.png";
import PaperPrototype from "./../../assets/images/autodesk-unification/paper-prototype-optimized.png";
import Roadmap from "./../../assets/images/autodesk-unification/roadmap-optimized.png";
import PreExistingLander from "./../../assets/images/autodesk-unification/pre-exisiting-lander-optimized.png";
import LegacyAuthentication from "./../../assets/images/autodesk-unification/legacy-authentication-optimized.png";
import TwoStep from "./../../assets/images/autodesk-unification/two-step-optimized.png";
import SimplifiedFlow from "./../../assets/images/autodesk-unification/simplified-flow-optimized.png";
import SimplifiedFlowLarge from "./../../assets/images/autodesk-unification/simplified-flow.png";
import SSOFlow from "./../../assets/images/autodesk-unification/SSO-flow-optimized.png";
import TheSignUPCard from "./../../assets/images/autodesk-unification/the-sign-up-card-optimized.png";
import LinkedAccounts from "./../../assets/images/autodesk-unification/linked-optimized.png";
import Twins from "./../../assets/images/autodesk-unification/twins-optimized.png";
import OneAccount from "./../../assets/images/autodesk-unification/one-account-optimized.png";

//Styled-components
import Navigation from "../../components/navigation";
import {
  CaseStudyContainer,
  HeroSection,
  Headline,
  Text,
  Img,
  Logo,
  HeroImg,
  CaseStudyFooter,
} from "./components";

const Section = styled.section`
  flex-wrap: wrap;
  margin-bottom: 112px;
  max-width: 1024px;
  width: 100%;
  text-align: left;
`;

const SubSection = styled.section`
  flex-wrap: wrap;
  margin-bottom: 48px;
  width: 100%;
  text-align: left;
`;

const ThreeImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    min-width: 200px;
    max-width: 325px;
    margin: 0 8px;
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Caption = styled.div`
  &,
  * {
    font-size: 15px;
    color: ${system.colors.g55};
    text-align: center;
    margin: 8px 0;
  }
`;

const List = styled.ul`
  list-style: none
  li::before {
    content: "•";
    color: ${system.colors.hatRed};
    display: inline-block; width: 1em;
    margin-left: -1em
  }
`;

const Columns = styled.span`
  display: flex;
`;

const StyledImage = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  padding-top: 24px;
  cursor: pointer;
}
`;

const ImageLinkOut = styled(Img)`
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px 0 #0000001e;
  }
`;

const Spacer = styled.div`
  ${(props) => {
    return `
      height: ${props.height || 0}px; 
      width: ${props.width || 0}px;
      max-height: ${props.height || 0}px; 
      max-width: ${props.width || 0}px;
      min-height: ${props.height || 0}px; 
      min-width: ${props.width || 0}px;`;
  }}
`;

export const ImageContainer = (props) => {
  return (
    <StyledImage>
      <ZoomableImage style={{ outline: "none" }}>
        {props.children}
      </ZoomableImage>
    </StyledImage>
  );
};

const AutodeskIDCaseStudy = (props) => {
  return (
    <CaseStudyContainer>
      <Navigation />
      <HeroSection>
        <Logo src={ADSKhero} maxWidth={300} />
        <Headline>Autodesk ID</Headline>
      </HeroSection>
      <Section>
        <SubSection>
          <h3>Background</h3>
          <p>
            Autodesk acquired BuildingConnected with the goal of building an
            end-to-end SAAS platform for the commercial construction process.
            Already strong in the design space with tools such as Revit and
            AutoCAD, BuildingConnected and other acquired products could bring
            data and workflow management solutions that would rival competitors
            like ProCore.
          </p>
          <p>
            But the first step in this long-term vision was integrating user
            accounts. In the Fall of 2019, I was asked to lead an initiative to
            evaluate how BuildingConnected might integrate with Autodesk’s
            authentication platform, known as Autodesk ID.
          </p>
        </SubSection>
        <SubSection>
          <h4>Research initiative</h4>
          <p>
            I was assigned a team of Designers, a Product Manager, a Researcher,
            and an Engineer. I created a project plan and planned design
            workshops. In consultation with a Sr. Software Architect, I also
            identified 3 implementation options that would help frame our
            research:
          </p>
          <ThreeImages>
            <div>
              <ImageContainer>
                <Img src={LinkedAccounts} />
              </ImageContainer>
              <Caption>
                <p>
                  <Bold>“Linked Accounts”</Bold>
                </p>
                <p>
                  Users would link an Autodesk account and manage it in their
                  settings
                </p>
              </Caption>
            </div>
            <div>
              <ImageContainer>
                <Img src={Twins} />
              </ImageContainer>
              <Caption>
                <p>
                  <Bold>“Twin Credentials”</Bold>
                </p>
                <p>
                  Users choose authentication method, saving steps if logged in
                  to Autodesk
                </p>
              </Caption>
            </div>
            <div>
              <ImageContainer>
                <Img src={OneAccount} />
              </ImageContainer>
              <Caption>
                <p>
                  <Bold>“One Account”</Bold>
                </p>
                <p>
                  Users create/link an Autodesk account which would replace
                  their BuildingConnected account
                </p>
              </Caption>
            </div>
          </ThreeImages>
          <p>
            We knew that something like <Bold>One Account</Bold> best resembled
            the long-term goal of a completely unified Autodesk platform, but it
            was not clear whether this would be the best experience for our
            users in the near term. We had differently branded products on
            different URLs and the inertia of users who were comfortable with
            their existing workflows. The question was: how might we introduce
            Autodesk in the most frictionless way possible?
          </p>
          <p>
            As a team, we developed three rounds of prototype-testing, exploring
            the different implementations and interviewing users about their
            experience logging into other platforms. We tested with both
            internal users (sales, customer success) and external participants
            (via usertesting.com).
          </p>
          <Spacer height={18} />
          <div>
            <ImageContainer>
              <Img src={PaperPrototype} />
            </ImageContainer>
            <Caption>
              Example of a paper-prototype screen. We mirrored a critical
              BuildingConnected sign-up flow but used a fake service to reduce
              bias.
            </Caption>
          </div>
        </SubSection>
        <SubSection>
          <h4>Insights</h4>
          <p>
            Over the course of protoyping and testing, some critical insights
            were uncovered:
          </p>
          <List>
            <li>
              Low general awareness of Autodesk and its products (other than
              AutoCAD)
            </li>
            <li>
              Users unlikely to opt-in to Autodesk ID without a clear reason
            </li>
            <li>
              <Bold>Linked Accounts</Bold> and <Bold>Twin Credentials</Bold>{" "}
              approaches could result in redundant experiences and would require
              ongoing management from the user
            </li>
            <li>
              <Bold>One Account</Bold> could be inserted almost seamlessly into
              sign-up
            </li>
            <li>
              Users were very open to adopting Autodesk if paired with a new
              feature
            </li>
          </List>
          <p>
            With these in mind, we decided to recommend the{" "}
            <Bold>One Account</Bold> implementation as a general approach. It
            would require us to build a potentially disruptive prompt asking
            users to adopt Autodesk, but it would also be a one-time experience.
          </p>
          <p>
            Furthermore, BuildingConnected is a freemium, network-driven
            service. A quick and easy sign-up process is critical to
            network-quality and ultimately growth, revenue, and user value.
          </p>
          <p>
            All of this made <Bold>One Account</Bold> a clear choice not just
            strategically but also from a user experience perspective.
          </p>
        </SubSection>
        <SubSection>
          <h4>Recommending a roadmap</h4>
          <p>
            Toward the end of the research cycle, it occured to me that there
            was an opportunity to provide more than just guidance on the
            implementation method. Given that adoption was most likely when
            paired with new features (yet-to-be-built), and given that there
            were various sign-in and sign-up experiences that would need to be
            updated to support Autodesk ID, we needed a plan.
          </p>
          <p>
            For our last synthesis workshop, I focused the team on forming
            guiding principles. From these principles, we formed a framework for
            the long-term transition. We recommended three phases:{" "}
            <Bold>Pilot</Bold>, <Bold>Promote</Bold>, and <Bold>Migrate</Bold>.
          </p>
          <p>
            During the <Bold>Pilot</Bold> phase, we would introduce Autodesk ID
            to small groups (thorugh manual activation if necessary) in order to
            get initial reactions and learn more about workflows. This would
            allow us to design and test specific experiences, such as as sign-up
            and sign-in, as well as develop integrations—for example sharing
            data or files in key workflows. It would also allow us time to
            request technical fixes from the Autodesk ID engineering team.
          </p>
          <p>
            The next phase, <Bold>Promote</Bold>, would involve introducing
            Autodesk ID as an optional add-on. We could incentivize users to
            adopt by offering high-value integrations and ultimately building
            trust and goodwill (as opposed to forcing adoption suddenly). This
            phase would continue until adoption met critical mass (based on
            percent-adopted).
          </p>
          <p>
            The final phase, <Bold>Migrate</Bold>, was a recognition that there
            would likely always be a “long-tail” of users who would not adopt.
            At some point unification would become imperative and we would have
            to force users to migrate. The focus of the <Bold>Migrate</Bold>{" "}
            phase would be to design a one-time mandatory link experience, an
            email/notification campaign to ensure awareness of the coming
            deadline, and to build fall backs for long-dormant users.
          </p>
          <p>
            The hope was that this sequence would maximize flexibility and
            minimize user frustration.
          </p>
          <ImageContainer>
            <Img src={Roadmap} />
          </ImageContainer>
        </SubSection>
      </Section>
      <Section>
        <SubSection>
          <h3>Solution in detail: Sign-up via invitation-to-bid</h3>
          <p>
            The process of migrating users to Autodesk will require various
            integration-features and prompts throughout 2021 and into 2022, but
            for this case study I will focus on one particularly critical
            experience: new-user sign-up.
          </p>
        </SubSection>
        <SubSection>
          <Columns>
            <div>
              <h4>Scenario: Invitations to bid</h4>
              <p>
                One of the most common and critical experiences for
                BuildingConnected is when a subcontractor receives an invitation
                to bid on a project.
              </p>
              <p>
                General contractors are trying to find quality subcontractors
                that can provide cost estimates and ultimately perform specific
                trade-work. They can use BuildingConnected to search for
                subcontractors, invite them to a project and analyze their
                proposals. In many cases though, particularly in new markets,
                they will need to invite subcontractors that are not yet on the
                network.
              </p>
              <p>
                BuildingConnected allows general contractors to invite people
                via email address, but requires the new invitees to sign-up and
                enter their company information. This creates a reinforcing
                cycle in which general contractors attract subcontractors who
                then make the network more valuable for other general
                contractors and so on.
              </p>
              <p>
                Thus, it is critical that the sign-up experience remain as
                friction-less as possible.
              </p>
            </div>
            <Spacer width={24} />
            <div>
              <ImageContainer>
                <Img src={BiddingProcess} maxWidth={510} />
              </ImageContainer>
            </div>
          </Columns>
        </SubSection>
        <SubSection>
          <h4>The pre-existing landing page</h4>
          <p>
            Subcontractors receive BuildingConnected invites via email. If
            interested, users follow a link to the invitation-to-bid landing
            page. This page features some basic information and a call-to-action
            to sign-up and view the invitation in more detail.
          </p>
          <ImageContainer>
            <Img src={PreExistingLander} maxWidth={1024} />
          </ImageContainer>
          <Caption>Pre-existing landing page for invitations-to-bid</Caption>
          <Spacer height={18} />
          <p>
            This lander has been live since the early days of the company and
            while I don’t know all of the reasoning that went into it’s design,
            there are a few key choices we can speculate about:
          </p>
          <List>
            <li>
              Multiple references to the individual who sent the invite reflect
              long-running user-research insights about the importance of
              personal relationships
            </li>
            <li>
              The single prominent email input field and “Create account” button
              are a progressive disclosure (clicking the button will prompt the
              user to also enter their full name and a password). This likely
              lowers activation-energy, slightly increasing the likelihood that
              users will decide to sign-up. There may also be a slight endowment
              effect in that users may feel they have already commited after
              this point.
            </li>
            <li>
              The lack of a password input creates a two-step process during
              which we can check the email address for special cases
            </li>
          </List>
        </SubSection>
        <SubSection>
          <h4>A complex set of use-cases</h4>
          <p>
            While the primary goal of the lander is to encourage new users to
            engage and sign-up, several other cases need to be considered.
            Subcontractors have historically been difficult to engage and they
            may only use BuildingConnected occasionally. When they do visit,
            it’s important that the lander page take every opportunity to help
            them sign in with the correct account and avoid duplicate profiles
            that pollute our network.
          </p>
          <p>Thus, the page must seamlessly handle:</p>
          <List>
            <li>New users who have never signed-up</li>
            <li>Users who have signed-up in the past</li>
            <li>
              Users who have signed up and whose company pay for custom
              authentication (“SSO”)
            </li>
          </List>
        </SubSection>
        <SubSection>
          <Columns>
            <div>
              <h4>Autodesk authentication</h4>
              <p>
                In order to implement the <Bold>One Account</Bold> experience, I
                needed to design a way to insert Autodesk ID into the
                invitation-to-bid. Autodesk ID is a standardized experience,
                which comes with pros and cons. On one hand, there is no need to
                redesign the core authentication flows. On the other hand, there
                are intentionally few customization options and it is
                effectively a black box from the perspective of our application.
              </p>
              <p>
                Ultimately, inserting this flow fragments our use cases such that we must also support:
              </p>
              <List>
                <li>
                  New users who have never signed-up for either
                  BuildingConnected or Autodesk
                </li>
                <li>
                  New users who have never signed-up for BuildingConnected but
                  already have Autodesk ID
                </li>
                <li>
                  Users who have signed-up for BuildingConnected in the past but
                  may or may not have Autodesk ID
                </li>
              </List>
            </div>
            <Spacer width={24} />
            <div>
              <ImageContainer>
                <Img src={ADSKSignIn} maxWidth={510} />
              </ImageContainer>
              <Columns>
                <div>
                  <ImageContainer>
                    <Img src={InsertSignUp} maxWidth={218} />
                  </ImageContainer>
                  <Caption>
                    Architecture of the One Account implementation
                  </Caption>
                </div>
                <Spacer width={24} />
                <div>
                  <ImageContainer>
                    <Img src={LegacyAuthentication} maxWidth={218} />
                  </ImageContainer>
                  <Caption>
                    The challenge of supporting legacy authentication
                  </Caption>
                </div>
              </Columns>
            </div>
          </Columns>
        </SubSection>
        <SubSection>
          <h4>Updated lander</h4>
          <p>
            Handling these new use cases without disrupting such a critical
            workflow required fairly surgical design interventions. (And this is
            not to mention limited resources and the political senstivity of the
            page). I designed a few simple changes to the landing page with two
            primary goals in mind.
          </p>
          <p>
            First, I wanted to subtly introduce Autodesk branding in order to
            communicate that there was a relationship between Autodesk and
            BuildingConnected. After this page, users would be redirected to an
            Autodesk sign-up/sign-in page—if users did not have some level of
            awareness of Autodesk, the experience could be confusing and
            mysterious.
          </p>
          <p>
            Second, I wanted to make sure that returning users could still
            understand how to sign in. Technically, we could check the entered
            email and always redirdect users to the right place. But that would
            not be immediately obvious at first glance. We needed to give users
            “escape hatches” to get out of the sign-up flow and enter a more
            standard sign-in flow.{" "}
          </p>
          <p>Here is the updated page:</p>
          <ImageContainer>
            <Img src={ITBPlusAId} />
          </ImageContainer>
          <Caption>Updated invitation-to-bid lander</Caption>
          <Spacer height={18} />
          <List>
            <li>Branded sign-in button, foreshadows redirect to Autodesk</li>
            <li>
              Instead of “Already have an account”, which is technically
              ambiguous, use the more direct “I’ve used BuildingConnected
              before”
            </li>
            <li>
              Simplified, goal-oriented call-to-action: “...to view this RFP and
              download files”
            </li>
            <li>“Autodesk company” co-branding in header</li>
            <li>
              A “panic” sign-in button in header. For users who might be
              confused or miss the secondary button.
            </li>
          </List>
        </SubSection>
        <SubSection>
          <h4>Designing for every scenario</h4>
          <p>
            To solve for all of our scenarios, I took advantage of the existing
            two-step credential input pattern. BuildingConnected historically
            used this pattern to handle users who paid for custom authentication
            (“SSO”)—instead of taking a password from these users, the system
            redirects them to an Identity Provider (“IDP”) hosted by their
            company. This private “IDP” would authenticate the user and redirect
            them back to BuildingConnected where they would be signed in to the
            app. This is used both in the sign-in process but also in the
            sign-up process. In the latter case, the company’s IDP approves the
            user to be provisioned a new account. (This two-step interface is also a fairly common
            pattern used in other sites and services that support 3rd-party
            authentication).
          </p>
          <ImageContainer>
            <Img src={TwoStep} />
          </ImageContainer>
          <p>
            Functionally, this is very similar to how we needed to integrate
            Autodesk ID. The main difference is that instead of just checking
            for an existing account and whether or not the email domain is owned
            by a paying customer, we would now need to check the following
            additional cases:
          </p>
          <List>
            <li>
              New users: Is this user’s email already associated with an
              Autodesk ID?
            </li>
            <li>
              Existing user: has the user already registered an Autodesk ID with
              their BuildingConnected account?
            </li>
            <li>Is this user currently signed-in to their Autodesk ID?</li>
          </List>
          <Spacer height={18}/>
          <p>
            In the first case, the user has used Autodesk before, but not
            BuildingConnected. We need to create a BuildingConnected account for
            them and then tie that account to their existing Autodesk ID.
          </p>
          <p>
            In the second case, if an existing user tries to sign-in, it’s
            possible they may have already gone through the process of
            registering an Autodesk ID with their BuildingConnected account.
            This could happen through various in-app prompts that we exposed
            separately during the pilot period (and it would become more likely
            in the future as our base of Autodesk ID users grew). For these
            users, we would need to skip account-creation and send them to
            Autodesk sign-in.
          </p>
          <p>
            In the third case, the user has Autodesk ID and is currently signed
            in to Autodesk. For these users, there is no need to send them to an
            Autodesk sign-up or sign-in page. They are already authenticated, we
            either need to create a BuildingConnect account for them or simply let them
            into the app.
          </p>
          <p>
            Combining these consdierations with all scenarios, I designed the
            following overall experience flow:
          </p>
          <a href={SimplifiedFlowLarge} target="_blank">
            <ImageLinkOut src={SimplifiedFlow} />
          </a>
          <Caption>Simplified flow-diagram for the invitation-to-bid sign-up experience</Caption>
          <Spacer height="48" />
          <p>Here are all cases in more granular detail:</p>
          <Columns>
            <div>
              <ImageContainer>
                <Img src={ITBFlow} maxWidth={510} />
              </ImageContainer>
              <Caption>
                All scenarios for signing-up from the invitation
              </Caption>
            </div>
            <Spacer width={24} />
            <div>
              <ImageContainer>
                <Img src={SSOFlow} maxWidth={510} />
              </ImageContainer>
              <Caption>Subsection for the “SSO” option</Caption>
            </div>
          </Columns>
        </SubSection>
        <SubSection>
          <Columns>
            <div>
              <h4>Call-to-action labels</h4>
              <p>
                While the two-step credential inputs would technically catch all
                scenarios, there was more we could do to communicate to the user
                what was happening in the moment. I designed the following
                treatment to handle all scenarios.
              </p>
              <p>
                Users with legacy accounts would see an unbranded sign-in
                button, existing users with Autodesk ID would be asked to
                sign-in, and all other users would be asked to sign-up for
                BuildingConnected using a new or existing Autodesk ID.
              </p>
            </div>
            <Spacer width={24} />
            <div>
              <ImageContainer>
                <Img src={TheSignUPCard} maxWidth={510} />
              </ImageContainer>
              <Caption>
                Call-to-action labels change depending on scenario
              </Caption>
            </div>
          </Columns>
        </SubSection>
        <SubSection>
          <h4>Catching users with the wrong ID</h4>
          <p>
            Separately, while piloting the sign-in experience, we discovered an
            interesting edge case. Based on a technical implemenation detail, if
            users are currently signed-in to an Autodesk ID account and they
            trigger either a sign-in or sign-up flow, the system will skip past
            the Autodesk screens and take the user directly to the app (or the
            welcome flow if it is a new user). Basically, the user is already
            authenticated, so the system does not ask them to sign-in again.
            (However, I did add a momentary “Redirecting to Autodesk...”
            interstitial to make the process more transparent).
          </p>
          <p>
            Initially, this was viewed as a minor positive. Although we did not
            expect many users to have Autodesk ID or to be signed-in already,
            those who were signed-in could access BuildingConnected in a single,
            frictionless click.
          </p>
          <p>
            But Autodesk ID is an interesting case. Autodesk ID is a single
            identity intended for all of Autodesk’s portoflio. Autodesk products
            include everything from highly controlled enterprise applications
            such as BIM 360, to individual contributor tools such as AutoCAD or
            Fusion 360, to hobbyist applications such as TinkerCAD. For
            enterprise applications, the user would need an Autodesk ID that
            uses their company email address, but for any hobbyist work, they
            might want to use a second, personal Autodesk ID. Yet another
            example would be users that had both a personal account and a team
            account, e.g. “estimators@company.com”.
          </p>
          <p>
            Ultimately this meant that there was a small, but real, possibility
            that users might trigger one of our flows and suddenly find
            themselves logged in with an Autodesk ID that they did not want to
            use.
          </p>
          <p>
            There are various ways to solve this problem. For example, Google’s
            authentication platform allows users to be signed in to muliple
            accounts at once and they can choose which identity they want to use
            for any given purpose. Unfortutnely, Autodesk ID does not support
            this use-case and it’s unclear if they ever would.
          </p>
          <p>
            So to handle our edge case, I designed this simple confirmation
            page:
          </p>
          <ImageContainer>
            <Img src={ConfirmationPage} maxWidth={1024} />
          </ImageContainer>
          <Spacer height={18} />
          <p>Key design choices:</p>
          <List>
            <li>
              “Card” design on the left encapsulates all information pulled from
              Autodesk ID, implying something being imported into
              BuildingConnected
            </li>
            <li>
              Copy on the right confirms that the user has now joined
              BuildingConnected and readies them for the standard welcome flow
            </li>
            <li>
              Subtle “Wrong ID” link allows edge-case users to back out without
              creating much distraction for our main-case users
            </li>
          </List>
        </SubSection>
        <SubSection>
          <h4>Current status</h4>
          <p>
            The sign-up experience is currently in development and is slated to
            be released for a trial period in March 2021. Autodesk ID
            integration is a central part of BuildingConnected’s 2021 and 2022
            roadmap. The original research and project plan were presented in
            Fall 2019 and all subsequent work was done in 2020.
          </p>
          <p>
            According to internal feedback, while many in our division first
            found Autodesk integration to be daunting task, these projects and
            my on going efforts to promote Autodesk ID and share my knowledge
            have helped to make the process more tangible and approachable.
          </p>
        </SubSection>
      </Section>
      <CaseStudyFooter>
        <p>Morgan Keys | Winter 2021</p>
      </CaseStudyFooter>
    </CaseStudyContainer>
  );
};

export default AutodeskIDCaseStudy;
