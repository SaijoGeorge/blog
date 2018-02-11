import styled from "styled-components"
import PunFigure from "./PunFigure"
import { length, rem, min, borderRadius } from "../styles"

const PunDetails = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: ${rem(800)};
  width: 100%;
  min-height: ${rem(230)};
  padding: ${rem(length.gap * 2)};
  background-color: rgba(0, 0, 0, .85);
  ${min(800 + length.gap * 2)`border-radius: ${borderRadius}px;`};
`

export default PunDetails
