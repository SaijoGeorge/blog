import styled from "styled-components"
import { length, rem } from "../styles"

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${rem(length.column + length.gap * 2)};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${rem(length.gap)};
  padding-left: ${rem(length.gap)};
`

export default Container
