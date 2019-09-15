import React from "react"
import styled from 'styled-components'

import system from "../styles/system.js"

import BulletPoints from "./../assets/content/bulletPoints"
import SplashImage from "./../assets/images/splash-small.png"


import GHIcon from "./../assets/icons/octicons/mark-github.svg"
import TwitterIcon from "./../assets/icons/twitter/Twitter_Social_Icon_Circle_Color.svg"
import LIIcon from "./../assets/icons/linkedin/linkedin-flaticon.svg"

const Avatar = styled.div`
    border-radius: 100px;
    width: 200px;
    height: 200px;
    background: -308px -193px / 400% url("${SplashImage}");
    `

const SocialIcon = props => {
    let Root = styled.a`
        cursor: pointer;
        height: ${props.size};
        width: ${props.size};

        img {
            opacity: .9;
        }
        img:hover {
            opacity: 1.0;
            transform: scale(1.2);
            transition: transform ease-out .1s;
        }
    `

    return (
        <Root
            className="subtle"
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
            
        >
            <img
                title={props.alt}
                alt={props.alt}
                src={props.icon}
                height={props.size}
                width={props.size} />
        </Root>
    )
}

const AboutMe = props => {
    let Root = styled.div`
        margin-top: 128px;

        h3 {
            color: ${system.colors.g90};
            margin-top: 24px;
        }
    `

    let SocialCluster = styled.div`
        display: flex;
        margin-top: 16px;

        * {
            margin-right: 24px;
        }
    `

    let Bullets = styled.div`
        margin-top: 32px;
        
        p {
            font-size: 16px;
            color: ${system.colors.g75};
        }
    `

    return (
        <Root>
            <Avatar />
            <div>
                <h3>Morgan Keys</h3>
                <SocialCluster>
                    <SocialIcon alt="Link to Twitter profile" icon={TwitterIcon} link="https://twitter.com/@morgankeys" size="32px" />
                    <SocialIcon alt="Link to GitHub profile" icon={GHIcon} link="https://github.com/morgankeys" size="32px" />
                    <SocialIcon alt="Link to LinkedIn profile" icon={LIIcon} link="https://github.com/morgankeys" size="32px" />
                </SocialCluster>
                <Bullets>
                    {BulletPoints.map((bullet, index) => {
                        return <p key={index}>{bullet}</p>;
                    })}
                </Bullets>
            </div>
        </Root>
    );
};

export default AboutMe


{/* <p><SocialLink icon={TwitterIcon} link="https://twitter.com/@morgankeys">@morgankeys</SocialLink></p>
<p><SocialLink icon={GHIcon} link="https://github.com/morgankeys">morgankeys</SocialLink></p> */}