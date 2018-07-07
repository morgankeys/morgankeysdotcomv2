import React, { Component } from "react";
import "./../styles/App.css";
import stories from "./../assets/content/stories";

const SixUp = () => {
  return (
    <div className="six-up">
      <div />
    </div>
  );
};

const storyArray = Object.keys(stories);

const Stories = () => {
  return (
    <div className="stories">
      {storyArray.map(key => {
        <div className="story">
          <h3>{stories[key].title}</h3>
          <div>{stories[key].body}</div>
        </div>;
      })}
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

export default StoryPanel;
