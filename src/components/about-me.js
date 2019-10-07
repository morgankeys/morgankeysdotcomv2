import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../styles/system.js"

import BulletPoints from "./../assets/content/bulletPoints"
import SplashImage from "./../assets/images/hero-image-beach.png"


import GHIcon from "./../assets/icons/octicons/mark-github.svg"
import TwitterIcon from "./../assets/icons/twitter/Twitter_Social_Icon_Circle_Color.svg"
import LIIcon from "./../assets/icons/linkedin/linkedin-flaticon.svg"

const Avatar = styled.div`
    background-image: ${props => `url("${props.imgSrc}")`};
    background-repeat: no-repeat;
    border-radius: 10000px;
    box-shadow: 0 0 4px 4px rgba(100,100,100,.1);

    ${props => props.size && css`
        width: ${props.size}px;
        height: ${props.size}px;
    `}
`

const SocialIcon = props => {
    let rootStyles = css`
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
        <a
            css={rootStyles}
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
        </a>
    )
}

const SocialCluster = styled.div`
    display: flex;
    margin-top: 16px;

    @media (max-width: ${system.breakpoints.large}) {
        justify-content: space-around;
    }
    @media (min-width: ${system.breakpoints.large}) {
        * {
            margin-right: 24px;
        }
    }
`

const Bullets = styled.div`
    margin-top: 32px;
    
    p {
        font-size: 16px;
        color: ${system.colors.g75};
        line-height: 1.3
    }
`

const AboutMe = props => {
    let rootStyles = css`
        @media (max-width: ${system.breakpoints.large}) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0px 0 40px;
            width: 100%;

            ${Avatar} {
                background-position: 100% 50%;
                background-size: cover;
                height: 300px;
                width: 100vw;
                border-radius: 0;
            }

            h1 {
                font-size: 48px;
                text-align: center;
            }
            
            ${Bullets} {
                display: none;
            }
        }

        @media (min-width: 992px) {
            margin-top: 128px;

            position: sticky;
            top: 128px;

            ${Avatar} {
                background-position: -574px -104px;
                background-size: 391%;
                height: 200px;
                width: 200px;
            }
        }   
        
        h1 {
            color: ${system.colors.g90};
            font-size: 48px;
            margin-top: 24px;
        }
    `

    return (
        <div css={rootStyles}>
            <Avatar imgSrc={SplashImage} />
            <div>
                <h1>Morgan Keys</h1>
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
        </div>
    );
};

export default AboutMe