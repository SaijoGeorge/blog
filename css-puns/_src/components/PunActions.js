import styled from "styled-components"
import { rem, min, length } from "../styles"

const PunActions = styled.div`
  flex-basis: 100%;
  margin-top: ${rem(length.gap * 2)};
  ${min(650)`
    flex-basis: auto;
    margin-top: 0;
  `} > * + * {
    margin-top: ${rem(length.gap)};
  }
`

export default PunActions
