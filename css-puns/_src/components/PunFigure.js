import React from "react"
import styled from "styled-components"
import { length, rem } from "../styles"

let PunFigure = ({ className, children }) =>
  <figure className={className}>
    <div className="container">
      <div className="content">
        {children}
      </div>
    </div>
  </figure>

PunFigure = styled(PunFigure)`
  max-width: ${rem(600)};
  width: 100%;
  position: relative;
  z-index: -1;

  &::after {
    content: '';
    display: block;
    margin-bottom: -15%;
    padding-top: calc(100% - ${rem(length.gap * 2)});
  }

  > .container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-right: ${rem(length.gap)};
    padding-left: ${rem(length.gap)};
  }

  > .container > .content {
    height: 100%;
    position: relative;
  }
`

export default PunFigure
