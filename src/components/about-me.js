import React from "react"
import styled, { css } from 'styled-components/macro'

import system from "../styles/system.js"

import SplashImage from "./../assets/images/hero-image-beach.png"

import GHIcon from "./../assets/icons/octicons/mark-github.svg"
import TwitterIcon from "./../assets/icons/twitter/Twitter_Social_Icon_Circle_Color.svg"
import LIIcon from "./../assets/icons/linkedin/linkedin-flaticon.svg"

//Resume: https://www.dropbox.com/s/rjuj8oxr3xipxu3/mkeys-resume-2020.pdf?dl=0

const bulletPoints = [
    "Currently at Autodesk",
    "Previously BuildingConnected, OpenGov, Hightail",
    "Master’s in Human-Computer Interaction, Decision Science",
    "Bachelor’s in Math, Creative Writing",
    "Interest in prototyping and design systems",
    "Interest in applying decision science to design better collaboration and communities",
    "Technologist with React experience"
];

const Avatar = styled.div`
    background-image: ${props => `url("${props.imgSrc}")`};
    background-repeat: no-repeat;
    border-radius: 10000px;
    box-shadow: ${system.shadows.drop};

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
        font-size: 18px;
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
            margin: 160px 0 40px;
            width: 100%;

            ${Avatar} {
                background-position: 100% 40%;
                background-size: cover;
                height: 160px;
                border-radius: 0;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
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
            margin-top: 48px;
            position: sticky;
            top: -340px;

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
                    <SocialIcon alt="Link to LinkedIn profile" icon={LIIcon} link="https://www.linkedin.com/in/morgankeys" size="32px" />
                </SocialCluster>

                <Bullets>
                    {bulletPoints.map((bullet, index) => {
                        return <p key={index}>{bullet}</p>;
                    })}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dropbox.com/s/rjuj8oxr3xipxu3/mkeys-resume-2020.pdf?dl=0"
                    >
                        View resume »
                    </a>
                </Bullets>
            </div>
        </div>
    );
};

export default AboutMe