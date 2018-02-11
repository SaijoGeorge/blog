import styled from "styled-components"
import { rem, min, speed } from "../styles"

const Wrapper = styled.div.attrs({
  style: p => ({ backgroundColor: p.color })
})`
  min-height: 100vh;
  position: relative;
  color: #fff;
  background-color: #111;
  transition: background-color ${speed}ms;
  overflow: hidden;

  &::before {
    content: '';
    width: 200vw;
    ${min(500)`width: 120vw;`}
    min-height: 200vw;
    height: 100%;
    position: absolute;
    top: ${rem(200)};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100vw 100vw 0 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, .13), transparent);
    pointer-events: none;
  }
`

export default Wrapper
