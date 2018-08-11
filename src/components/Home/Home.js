import React, { Component } from "react";
import "./home.css";
import BulletPoints from "./../../assets/content/bulletPoints";
import StoryPanel from "./../StoryPanel/StoryPanel";

const Headline = props => {
  return (
    <div className="headline">
      <div className="text-block">
        <h1>Hi, I'm Morgan.</h1>
        <p>
          I’m a product designer who loves decision science, design
          technologies, and people. Most of all, people. Take a look around and
          then let’s chat.
        </p>
        <p>
          <a className="cta-link" onClick={props.onClickLetsGo}>
            Let's do it »
          </a>
        </p>
      </div>
    </div>
  );
};

const Avatar = props => {
  return <div className="avatar" onClick={props.onClick} />;
};

const CoverPage = props => {
  return (
    <div className="cover-page">
      <Avatar onClick={props.reset} />
      <Headline onClickLetsGo={props.setCollapsed} />
      <div className="name-and-bullets">
        <h2>Morgan Keys</h2>
        <div>
          <a
            className="subtle"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/@morgankeys"
          >
            @morgankeys
          </a>
        </div>
        <div className="bullet-points">
          {BulletPoints.map((bullet, index) => {
            return <p key={index}>{bullet}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.setCollapsed = this.setCollapsed.bind(this);
    this.reset = this.reset.bind(this);
  }

  setCollapsed() {
    this.setState({ collapsed: false });
  }

  reset() {
    this.state.collapsed ? null : this.setState({ collapsed: true });
  }

  render() {
    const appClass = this.state.collapsed ? "home" : "home collapsed";

    return (
      <div className={appClass}>
        <CoverPage setCollapsed={this.setCollapsed} reset={this.reset} />
        {this.state.collapsed ? null : <StoryPanel />}
      </div>
    );
  }
}

export default Home;
