import React from "react"
import styled from "styled-components"
import { min, rem, z } from "../styles"

let Nav = ({ className, children }) =>
  <div className={className}>
    <div>
      {children}
    </div>
  </div>

Nav = styled(Nav)`
  position: relative;
  pointer-events: none;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    z-index: ${z("navigation")};
    top: ${rem(-30)};
    ${min(500)`top: 0;`}
    ${min(800)`top: ${rem(235)};`}
  }

  > div > * {
    pointer-events: auto;
  }
`

export default Nav
