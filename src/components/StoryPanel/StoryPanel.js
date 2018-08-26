import React, { Component } from "react";
// import "./../../styles/home.css";
import "./story-panel.css";
import {
  storyImages,
  OGChartOfAccounts,
  OGNetwork,
  HTUplink,
  HTEnterprise,
  HTUsageReport,
  HTAndroid,
  GradPIXD,
  YSIUsability,
  TCSQualcomm
} from "./../../assets/content/stories";

const StoryFrame = props => {
  return <div className="story">{props.children}</div>;
};

const Stories = () => {
  return (
    <div className="stories">
      <StoryFrame>
        <OGChartOfAccounts />
      </StoryFrame>
        <StoryFrame>
          <OGNetwork />
      </StoryFrame>
      <StoryFrame>
          <HTUplink />
      </StoryFrame>
      <StoryFrame>
          <HTEnterprise />
      </StoryFrame>
      <StoryFrame>
          <HTUsageReport />
      </StoryFrame>
      <StoryFrame>
          <HTAndroid />
      </StoryFrame>
      <StoryFrame>
          <GradPIXD />
      </StoryFrame>
      <StoryFrame>
          <YSIUsability />
      </StoryFrame>
      <StoryFrame>
          <TCSQualcomm />
      </StoryFrame>
    </div>
  );
};

class StoryPanel extends Component {
  render() {
    return (
      <div className="story-panel">
        <SixUp />
        <Stories />
      </div>
    );
  }
}

const SixUp = () => {
  return (
    <div>
      <div className="six-up">
        <a href="#og_coa">
          <div className="img-wrapper">
            <img alt="OpenGov CoA Editor" src={storyImages.og_coa} />
          </div>
        </a>
        <a href="#og_network">
          <div className="img-wrapper">
            <img alt="OpenGov Network" src={storyImages.og_network} />
          </div>
        </a>
        <a href="#ht_uplink">
          <div className="img-wrapper">
            <img alt="Hightail Uplink" src={storyImages.ht_uplink} />
          </div>
        </a>
        {/* <a href="#ht_enterprise">
        <div className="img-wrapper">
          <img alt="OpenGov CoA Editor" src={storyImages.ht_enterprise} />
        </div>
      </a> */}
        <a href="#ht_usage_report">
          <div className="img-wrapper">
            <img alt="OpenGov CoA Editor" src={storyImages.ht_usage_report} />
          </div>
        </a>
        {/* <a href="#ht_android">
        <div className="img-wrapper">
          <img alt="OpenGov CoA Editor" src={storyImages.ht_android} />
        </div>
      </a> */}
      </div>
    </div>
  );
};

export default StoryPanel;
