import React from "react"
import styled from 'styled-components'

import system from "../styles/system.js"

import BulletPoints from "./../assets/content/bulletPoints"
import SplashImage from "./../assets/images/splash-small.png"

const Avatar = styled.div`
        border-radius: 100px;
        width: 100px;
        height: 100px;
        background: -206px -123px / 500% url("${SplashImage}");
    `

const CoverPage = props => {
    let Root = styled.div`
        padding: 16px;
        & h3 {
            color: ${system.colors.g75};
            font-size: 28px;
        }
    `
    
    return (
        <Root>
            <Avatar />
            <div>
                <h3>Morgan Keys</h3>
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
        </Root>
    );
};

const CaseStudyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 128px;

  h1 {
    display: inline-block;
    width: 100%;
  }
`
const List = styled.ul`
  font-size: 21px;
  list-style: none;
  width: 100%;
  padding: 0;
  
  
  li {
    margin-bottom: 16px;
    font-weight: 300;

    a {
      color: ${system.colors.g90};
      text-decoration: none;
      cursor: pointer;

      &:visited {
        color: ${system.colors.g55};
      }

      &:hover {
        color: ${system.colors.red}
      }
    }
  }
`

const CaseStudyIndex = props => {
    let Root = styled.div`
        display: flex;
    `
    
    return (
        <Root>
            <CoverPage />
            <CaseStudyList>
                <h1>Case studies</h1>
                <List>
                    <li><a href="/bc-design-systems">Design Systems at BuildingConnected</a></li>
                    <li><a href="/bc-client-suggestions">Client Suggestions at BuildingConnected</a></li>
                    <li><a href="/og-coa">OpenGov Chart of Accounts Manager</a></li>
                </List>
            </CaseStudyList>
        </Root>
    )
};

export default CaseStudyIndex