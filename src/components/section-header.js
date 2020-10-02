import styled, { css } from 'styled-components/macro'
import system from "../styles/system.js"

const SectionHeader = styled.div`
  border-bottom: 1px solid ${system.colors.g05};
  padding-bottom: 8px;

  @media (min-width: ${system.breakpoints.large}) {
    margin-top: 48px;
  }

  h2 {
      color: ${system.colors.g90};
      display: inline-block;
      font-size: 18px;
      font-family: ${system.fonts.body};
      font-weight: 300;
      width: 100%;
      overflow: visible;
    }
  `

  export default SectionHeader