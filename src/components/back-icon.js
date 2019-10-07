import styled from "styled-components/macro";

import system from "../styles/system.js"

import LeftArrow from "./../assets/icons/ArrowLeft"

const BackIcon = styled(LeftArrow)`
  cursor: pointer;
  fill: ${system.colors.g90};
  height: 32px;

  &:hover, &:active {
    fill: ${system.colors.red}
  }

  @media (max-width: ${system.breakpoints.small}) {
    height: 24px;
  }
`

export default BackIcon