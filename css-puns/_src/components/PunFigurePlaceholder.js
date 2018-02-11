import React from "react"
import Logo from "./Logo"
import styled from "styled-components"
import { tint } from "polished"

let PunFigurePlaceholder = ({ className, loaded }) =>
  <div className={className}>
    <div className="content">
      {!loaded && <Logo width="60%" fast />}
    </div>
  </div>

PunFigurePlaceholder = styled(PunFigurePlaceholder)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${p => tint(0.7, p.color)};
  border-radius: 1000em;
  transition: .6s;

  &::after {
    content: '';
    display: block;
    padding-top: 100%;
  }

  > .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  ${p =>
    p.loaded &&
    `
    visibility: hidden;
    opacity: 0;
  `}
`

export default PunFigurePlaceholder
