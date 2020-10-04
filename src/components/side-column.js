import styled from 'styled-components/macro'
import system from "../styles/system.js"

const SideColumn = styled.div`
    min-width: 300px;
    width: 300px;

    @media (max-width: ${system.breakpoints.large}) {
      min-width: unset;
      width: 100%;
    }
`

export default SideColumn