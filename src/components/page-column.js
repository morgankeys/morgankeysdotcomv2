import styled from 'styled-components/macro'
import system from "../styles/system.js"

export const PageColumn = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    ${props => props.flex? `flex: ${props.flex};` : ``}

    & >div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    @media (max-width: ${system.breakpoints.large}) {
      width: 100%;

      div {
        align-items: center;
        text-align: left;

        h2 {
          text-align: center;
          margin-top: 24px;
        }
      }
    }
`