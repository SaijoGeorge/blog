import styled from "styled-components"
import { rem, min } from "../styles"

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(80)};
  ${min(500)`
    justify-content: flex-start;
    height: ${rem(100)};
  `} > * + * {
    margin-left: ${rem(13)};
  }

  > :last-child {
    ${min(500)`margin-left: auto`};
  }
`

export default Header
