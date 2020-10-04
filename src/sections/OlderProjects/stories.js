import React from "react"
// import { useRef } from "react"

import styled from 'styled-components/macro'

import system from "../../styles/system.js"

import og_coa from './../../assets/images/og-coa/CoA_demo.gif'
import og_network from './../../assets/images/older-projects/network.png'
import ht_uplink from './../../assets/images/older-projects/uplink_in_browser.png'
import ht_usage_report from './../../assets/images/older-projects/usageReport_improve_cropped.png'
import ht_android from './../../assets/images/older-projects/ht-for-android.png'
import ysi_usability from './../../assets/images/older-projects/ysi_mobileapp_homepage.png'
import intel_HFE from './../../assets/images/older-projects/intel_collage.png'
import tcs_qualcomm from './../../assets/images/older-projects/qualcomm.png'

import ZoomableImage from "../../components/zoomable-image"


const Story = styled.div`
  color: ${system.colors.g75};
  margin: 48px 0 24px;
  max-width: 580px;
  
  * {
    text-align: left;
  }

  p, li {
    width: 100%;
  }

  ul {
    margin-top: 0;
    padding-inline-start: 18px;
    width: calc(100% - 18px);
  }

`

const StyledImageFrame = styled.div`
  width: 100%;
  padding: 32px 0;

  iframe {
    width: 100%;
    height: 321px;
    background-color: #fafafa;
  }
  
  img {
    width: 100%;
  }
`

const ImageFrame = props => {
  return (
    <ZoomableImage>
      <StyledImageFrame>
        {props.children}
      </StyledImageFrame>
    </ZoomableImage>
  )
}

const VideoFrame = props => {
  return (
    <StyledImageFrame>
      {props.children}
    </StyledImageFrame>
  )
}


const StoryTitle = styled.h3`
  color: ${system.colors.g90};
  font-size: 40px;
  font-family: ${system.fonts.display};
  width: 100%;

  @media (max-width: ${system.breakpoints.large}) {
    font-size: 32px;
  }
`

const OGChartOfAccounts = () => {
  return (
    <Story id="og_coa">
      <StoryTitle>OpenGov Chart of Accounts Editor</StoryTitle>
      <ImageFrame>
        <img
          alt="OpenGov CoA Editor"
          src={og_coa}
        />
      </ImageFrame>
      <p>
        Redesigned a tool for editing financial taxonomies. The tool plays a
        critical role in how users manage their data and is effectively the
        backbone of OpenGov's platform experience.{" "}
      </p>
      <ul>
        <li>
          Worked closely with subject-matter experts to understand both
          internal-user and customer needs
        </li>
        <li>
          Developed a novel visualization/navigation that users have found not
          only more usable but more enjoyable
        </li>
        <li>
          Conducted usability tests and gathered feedback from CS to make the
          tool more robust and easier to navigate
        </li>
        <li>Contributed code to help refine the UI</li>
      </ul>
    </Story>
  );
};

const OGNetwork = (props) => {
  return (
    <Story id={"og_network"}>
      <StoryTitle>OpenGov Network</StoryTitle>
      <ImageFrame>
        <img
          alt="OpenGov Network"
          src={og_network}
        />
      </ImageFrame>
      <p>
        Designed an experience for users to search for other governments on the OpenGov network. Starting with a simple internal feature-request, I helped develop the concept into an entirely new app for the OpenGov platform. It became an internal and customer hit that allowed users to experience OpenGov in an entirely new way.
      </p>
      <ul>
        <li>Focused long-term platform goals into an MVP</li>
        <li>Sparkline-style charts create a simple yet data-rich experience</li>
        <li>Focused filtering options based on understanding of user priorities</li>
        <li>Designed strategically to leverage other existing platform apps</li>
      </ul>
    </Story>
  );
};

const HTUplink = () => {
  return (
    <Story id="ht_uplink">
      <StoryTitle>Hightail Uplink</StoryTitle>
      <ImageFrame>
        <img
          alt="Hightail Uplink"
          src={ht_uplink}
        />
      </ImageFrame>
      <p>
        After advocating for more attention to a popular legacy feature, I was eventually charged with leading a complete redesign of this tool for requesting files. (Fall 2013)
      </p>
      <ul>
        <li>
          Analyzed user-content and usage patterns to gain early insight.
        </li>
        <li>
          Prototyped concepts in html/css/javascript in order to try out
          different layouts and transitions
        </li>
        <li>
          Created key onboarding and engagement experiences that produced
          significant upticks in adoption and engagement (+8k users and +45k
          file-sends in the first 3 months)
        </li>
      </ul>
    </Story>
  );
};

const HTEnterprise = () => {
  return (
    <Story id="ht_enterpise">
      <StoryTitle>Hightail Enterprise</StoryTitle>
      <VideoFrame>
        <iframe
          title="Hightail Enterprise"
          src="//player.vimeo.com/video/95018028?title=0&amp;byline=0&amp;portrait=0"
          frameBorder="0"
          allowFullScreen
        />
      </VideoFrame>
      <p>
        While working on Hightail's enterprise products, I created or redesigned many major features and reviewed the implementation of integrations by outside contractors. I was also responsible for communicating needs and promoting Design thinking to the larger business unit. (Fall 2011 - Summer 2014)
      </p>
      <p>Major features worked on:</p>
      <ul>
        <li>Reporting, as well as exporting and scheduling of reports</li>
        <li>Admin dashboard</li>
        <li>User-group administration</li>
        <li>Admin-policy configuration</li>
        <li>Integrations with SharePoint, SalesForce, IBM, and Netsuite</li>
      </ul>
    </Story>
  );
};

const HTUsageReport = () => {
  return (
    <Story id="ht_usage_report">
      <StoryTitle>Hightail Usage Report</StoryTitle>
      <ImageFrame>
        <img
          alt="Hightail Usage Report"
          src={ht_usage_report}
        />
      </ImageFrame>
      <p>
        I concepted and designed an administrative feature for enterprise
        accounts to meet e-discovery requirements. The feature gave admins a
        simple yet powerful interface to browse activity, monitor collaboration
        between internal employees and external contractors, and take action to
        investigate or block suspicious actions. I also pushed to include
        important usability and navigation improvements to the larger admin
        console as part of the project.
      </p>
      <p>
        Usage Report was the most advanced feature that Hightail offered at the time and was
        often a highlight of sales demos. (Fall 2012)
      </p>
    </Story>
  );
};

const HTAndroid = () => {
  return (
    <Story id="ht_android">
      <StoryTitle>Hightail for Android</StoryTitle>
      <ImageFrame>
        <img
          alt="Hightail for Android"
          src={ht_android}
        />
      </ImageFrame>
      <p>Assisted in the redesign of Hightail's Android app. Worked on the mechanics of shared-folder invites and managing user-permissions as well as file-sending controls. (Spring 2014)</p>
    </Story >
  );
};

const GradPIXD = () => {
  return (
    <Story id="grad_pixd">
      <StoryTitle>Pervasive Interaction and Experience Design</StoryTitle>
      <VideoFrame>
        <iframe
          title="Pervasive Interaction and Experience Design"
          src="//player.vimeo.com/video/22869156?title=0&amp;byline=0&amp;portrait=0"
          frameBorder="0"
          allowFullScreen
        />
      </VideoFrame>
      <p>
        One of my favorite projects from grad school: I worked with classmates to design and prototype a ubiquitous-computing experience for the University of Michigan’s brand-new North Quad residential complex. We used contextual inquiry and “speed-dating” research techniques to understand users and the physical environment. The project required us to design for an ecosystem of wall-displays, smartphones, and web-apps. The final prototype featured live QR-codes and semi-responsive adaptive text. We developed concept videos and presented to community directors. (Spring 2010)
      </p>
    </Story>
  );
};

const YSIUsability = () => {
  return (
    <Story id="ysi_usability">
      <StoryTitle>YouSendIt Usability-Testing</StoryTitle>
      <ImageFrame>
        <img
          alt="YouSendIt Usability-Testing"
          src={ysi_usability}
        />
      </ImageFrame>
      <p>
        As part of a complete redesign of YouSendIt's iOS app, I performed a variety of usability tests with no budget. I uncovered confusion resulting from visual/interaction design choices, allowing the team to redesign before launch. (Summer 2012)
      </p>
      <p>Guerilla testing methods included:</p>
      <ul>
        <li>
          Coffee shop usability surveys: camping out at coffee shops, I exposed
          volunteers to candidate page-layouts and iconography
        </li>
        <li>
          In-house user-testing: I tested clickable mock-ups with internal
          volunteers to assess the usability of folder/file interaction
          paradigms
        </li>
      </ul>
    </Story>
  );
};

const IntelHFE = () => {
  return (
    <Story id="intel_hfe">
      <StoryTitle>Human-Factors Engineering at Intel</StoryTitle>
      <ImageFrame>
        <img
          alt="Human-Factors Engineering at Intel"
          src={intel_HFE}
        />
      </ImageFrame>
      <p>
        As a Summer Intern with Intel's Human Factors Engineering team, I
        performed a usability study on the "Circuit" web-portal, the home-page
        for the majority of Intel's 80,000+ employees. (Summer 2010)
      </p>
      <ul>
        <li>
          Collaborated with a mentor to conduct card-sorting exercises for 340+
          users
        </li>
        <li>
          Designed a branching survey flow that interconnected a Qualtrics
          survey with a web-based card-sorting tool
        </li>
        <li>
          Conducted 25+ user interviews and produced affinity notes and
          observations
        </li>
        <li>Designed and lead group participatory-design sessions</li>
      </ul>
    </Story>
  );
};

const TCSQualcomm = () => {
  return (
    <Story id="intel_hfe">
      <StoryTitle>Qualcomm Trucking Apps</StoryTitle>
      <ImageFrame>
        <img
          alt="Qualcomm Trucking Apps"
          src={tcs_qualcomm}
        />
      </ImageFrame>
      <p>
        As a consultant at Tata Consultancy Services, I worked with Qualcomm to
        design Android versions of two apps from the truck-based Mobile
        Computing Platform. I delivered specs for phone and tablet versions that
        took into account safety considerations and government regulations.
        (Fall 2011)
      </p>
      <ul>
        <li>
          Compliance: An accountability app that tracked driving hours, logs,
          and other information in accordance with strict regulations. Allowed
          drivers to perform vehicle inspections and present their logs to
          highway patrol officers upon request. Included a locked "driving mode"
          to meet safety requirements.
        </li>
        <li>
          Fleet Visibility: A tracking app that gave drivers an overview of{}
          their trip plan, including designated drops, fuel stops, and other
          tasks.
        </li>
      </ul>
    </Story>
  );
};

// const stories = {
//   og_coa: {
//     content:
//       "http://s3-us-west-1.amazonaws.com/morgankeysdotcom-assets/imgs/coa/CoA_demo.gif",
//     content_type: "image",
//     title: "OpenGov Chart of Accounts Editor",
//     body:
//       "<p>\r\n        Redesigned a tool for editing financial taxonomies. The tool plays a\r\n        critical role in how users manage their data and is effectively the\r\n        backbone of OpenGov's platform experience.\r\n      </p>\r\n      <ul>\r\n        <li>\r\n          Worked closely with subject-matter experts to understand both\r\n          internal-user and customer needs\r\n        </li>\r\n        <li>\r\n          Developed a novel visualization/navigation that users have found not\r\n          only more usable but more enjoyable\r\n        </li>\r\n        <li>\r\n          Conducted usability tests and gathered feedback from CS to make the\r\n          tool more robust and easier to navigate\r\n        </li>\r\n        <li>Contributed code to help refine the UI</li>\r\n      </ul>",
//     cta: "OpenGov Chart of Accounts Editor"
//   },
//   og_network: {
//     content: "/static/imgs/og_network/network.png",
//     content_type: "image",
//     title: "OpenGov Network",
//     body:
//       "<p>Starting with a simple internal feature-request, I helped develop the concept into an entirely new app for the OpenGov platform. It became an internal and customer hit that allowed users to experience OpenGov in an entirely new way.</p>\r\n    <ul>\r\n      <li>Focused long-term platform goals into an MVP</li>\r\n      <li>Sparkline-style charts create a simple yet data-rich experience</li>\r\n      <li>Focused filtering options based on understanding of user priorities</li>\r\n      <li>Designed strategically to leverage other existing platform apps</li>\r\n    </ul>",
//     cta: "OpenGov Network"
//   },
//   uplink: {
//     content: "/static/imgs/uplink_in_browser.png",
//     content_type: "image",
//     title: "Hightail Uplink",
//     body:
//       "<p>I advocated giving more attention to a popular yet neglected product and eventually was charged with leading a complete redesign (Fall 2013)</p>\r\n    <ul>\r\n    <li>Used user-preferences as qualitative data to examine user needs. This proved more effective than traditional analytics and allowed us to gain early insight without costly user-interviews.</li>\r\n    <li>Prototyped concepts in html/css/javascript in order to try out different layouts and transitions</li>\r\n    <li>Created key onboarding and engagement experiences that produced significant upticks in adoption and engagement (+8k users and +45k file-sends in the first 3 months)</li>\r\n  </ul>",
//     cta: "Hightail Uplink"
//   },
//   ht_enterprise: {
//     content:
//       "//player.vimeo.com/video/95018028?title=0&amp;byline=0&amp;portrait=0",
//     content_type: "video",
//     title: "Hightail for Enterprise",
//     body:
//       "<p>As lead designer for Hightail's enterprise products, I created or redesigned many major features and oversaw the implementation of integrations by outside contractors. I was also chosen as an official liaison, responsible for communicating needs and promoting Design thinking to the enterprise business unit. (Fall 2011 - Summer 2014)</p>\r\n  <p>\r\n    Major features worked on:\r\n  </p>\r\n  <ul>\r\n    <li>Reporting, as well as exporting and scheduling of reports</li>\r\n    <li>Admin dashboard</li>\r\n    <li>User-group administration</li>\r\n    <li>Admin-policy configuration</li>\r\n    <li>Integrations with SharePoint, SalesForce, IBM, and Netsuite</li>\r\n  </ul>",
//     cta: "Hightail for Enterprise"
//   },
//   ht_usage_report: {
//     content: "/static/imgs/usageReport_improve_cropped.png",
//     content_type: "image",
//     title: "Hightail Usage Report",
//     body:
//       "<p>I concepted and designed an administrative feature for enterprise accounts to meet e-discovery requirements. The feature gave admins a simple yet powerful interface to browse activity, monitor collaboration between internal employees and external contractors, and take action to investigate or block suspicious actions. I also pushed to include important usability and navigation improvements to the larger admin console as part of the project.</p>\r\n  <p>Usage Report was the most advanced feature that Hightail offered and was often a highlight of sales demos. (Fall 2012)</p>",
//     cta: "Hightail Enterprise Usage Report"
//   },
//   grad_pixd: {
//     content:
//       "http://player.vimeo.com/video/22869156?title=0&amp;byline=0&amp;portrait=0",
//     content_type: "video",
//     title: "Pervasive Interaction and Experience Design",
//     body:
//       "<p>I worked with classmates to design and prototype a ubiquitous-computing experience for the University of Michigan\u2019s brand-new North Quad Residential complex. We used contextual inquiry and \u201Cspeed-dating\u201D techniques to understand users and the physical environment. The project required us to design for an ecosystem of wall-displays, smartphones, and web-apps. We presented to community directors and developed concept videos. The final prototype featured live QR-codes and semi-responsive adaptive text. (Spring 2010)\r\n  </p>",
//     cta: "Pervasive Interaction and Experience Design"
//   },
//   ysi_usability: {
//     content: "/static/imgs/ysi_usability/ysi_mobileapp_homepage.png",
//     content_type: "image",
//     title: "Guerilla Usability-Testing at YouSendIt",
//     body:
//       "<p>As part of a complete redesign of YouSendIt's iOS app, I performed a variety of usability tests with no budget. Uncovered frustrating visual-design flaws, allowing the team to redesign before launch. (Summer 2012)</p>\r\n  <p>\r\n  Tests included:\r\n  </p>\r\n  <ul>\r\n    <li>Coffee shop usability surveys \u2014 camping out at coffee shops, I exposed volunteers to candidate page-layouts and iconography</li>\r\n    <li>In-house user-testing \u2014 I tested clickable mock-ups with internal volunteers to assess the usability of folder/file interaction paradigms</li>\r\n  </ul>",
//     cta: "Usability testing at YouSendIt"
//   },
//   intel_hfe: {
//     content: "/static/imgs/intel/intel_collage.png",
//     content_type: "image",
//     title: "Human-Factors Engineering at Intel",
//     body:
//       "<p>As a Summer Intern with Intel's Human Factors Engineering team, I performed a usability study on the \u201CCircuit\u201D web-portal, the home-page for the majority of Intel\u2019s 80,000+ employees. (Summer 2010)\r\n  </p>\r\n  <ul>\r\n    <li>Collaborated with a mentor to conduct card-sorting exercises for 340+ users</li>\r\n    <li>Designed a branching survey flow that interconnected a Qualtrics survey with a web-based card-sorting tool</li>\r\n    <li>Conducted 25+ user interviews and produced affinity notes and observations</li>\r\n    <li>Designed and lead group participatory-design sessions</li>\r\n  </ul>",
//     cta: "Card-sorting and interviewing at Intel"
//   },
//   tata_qualcomm: {
//     content: "/static/imgs/tcs/qualcomm.png",
//     content_type: "image",
//     title: "Qualcomm trucking apps",
//     body:
//       "<p>As a consultant at Tata Consultancy Services, I worked with Qualcomm to design Android versions of two apps from the truck-based Mobile Computing Platform. I delivered specs for phone and tablet versions that took into account safety considerations and government regulations. (Fall 2011)</p>\r\n  <ul>\r\n    <li>Compliance \u2014 An accountability app that tracked driving hours, logs, and other information in accordance with strict regulations. Allowed drivers to perform vehicle inspections and present their logs to highway patrol officers upon request. Included a locked &quot;driving mode&quot; to meet safety requirements.</li>\r\n    <li>Fleet Visibility \u2014 A tracking app that gave drivers an overview of their trip plan, including designated drops, fuel stops, and other tasks. </li>\r\n  </ul>",
//     cta: "Qualcomm trucking apps"
//   },
//   ht_android: {
//     content: "/static/imgs/hightail_for_android/ht-for-android.png",
//     content_type: "image",
//     title: "Hightail for Android",
//     body:
//       '<p>Assisted in the redesign of Hightail\'s Android app. Worked on the mechanics of shared-folder invites and managing user-permissions as well as file-sending controls. (Spring 2014)\r\n  </p>\r\n  <p>Check out the app <a href="https://play.google.com/store/apps/details?id=com.yousendit.android">here</a>.</p>',
//     cta: "Hightail for Android"
//   }
// };

export {
  OGChartOfAccounts,
  OGNetwork,
  HTUplink,
  HTEnterprise,
  HTUsageReport,
  HTAndroid,
  GradPIXD,
  YSIUsability,
  IntelHFE,
  TCSQualcomm
};
