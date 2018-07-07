import React, { Component } from "react";
import "./styles/App.css";
import BulletPoints from "./assets/content/bulletPoints";
import StoryPanel from "./components/StoryPanel";
// import splash from "./assets/images/splash.png";

const Avatar = props => {
  return (
    <div className="avatar" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

class Headline extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClickLetsGo();
  }

  render() {
    const classes = this.props.expanded ? "headline" : "headline collapsed";
    return (
      <div className={classes}>
        <h1>Hi, I'm Morgan.</h1>
        <p>
          I’m a product designer who loves decision science, design
          technologies, and people. Most of all, people. Take a look around and
          then let’s chat.
        </p>
        <p>
          <a className="cta-link" onClick={this.handleClick}>
            Let's do it »
          </a>
        </p>
      </div>
    );
  }
}

const Profile = () => {
  return (
    <div className="profile">
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
  );
};

class App extends Component {
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
    const appClass = this.state.collapsed ? "App" : "App collapsed";

    return (
      <div className={appClass}>
        <div className="header">
          <Avatar onClick={this.reset}>
            <Headline onClickLetsGo={this.setCollapsed} />
          </Avatar>
          <Profile />
        </div>
        {this.state.collapsed ? null : <StoryPanel />}
      </div>
    );
  }
}

export default App;
