import React from "react";
import styled, { css } from "styled-components/macro"

import system from "../styles/system.js"

import BackIcon from "./../components/back-icon"

const NavHeight = "56px"

const NavBar = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${system.colors.g05};
  display: flex;
  height: ${NavHeight};
  justify-content: center;
  left: 0;
  padding: 0 16px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  h1 {
    font-size: 32px;

    @media (max-width: ${system.breakpoints.small}) {
      font-size: 24px;
    }
  }

  a {
    height: 32px;
    object-fit: cover;
    position: absolute;
    left: 16px;
    cursor: pointer;

    @media (max-width: ${system.breakpoints.small}) {
      height: 24px;
    }
  }
`

const Navigation = props => {
  return (
    <NavBar>
      <a href="/home"><BackIcon /></a>
      <h1>Morgan Keys</h1>
    </NavBar>
  )
}

export default Navigation