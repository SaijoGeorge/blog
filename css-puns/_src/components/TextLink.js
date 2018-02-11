import React from "react"
import styled from "styled-components"

let TextLink = ({ external, ...props }) => {
  if (external) {
    props = {
      ...props,
      target: "_blank",
      rel: "noopener"
    }
  }

  return <a {...props} />
}

TextLink = styled(TextLink)`
  position: relative;
  outline: none;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    top: calc(100% + 3px);
    left: 0;
    opacity: .5;
    background-color: currentColor;
    transform-origin: right top;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    transform-origin: left top;
    transform: scaleX(1);
  }
`

export default TextLink
