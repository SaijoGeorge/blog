import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { font, rem, em } from "../styles"

let Btn = ({ dark, circle, wide, bold, color, external, ...props }) => {
  if (external) {
    props = {
      ...props,
      target: "_blank",
      rel: "noopener"
    }
  }

  const Tag = props.to ? "Link" : props.href ? "a" : "button"

  return <Tag {...props} />
}

Btn = styled(Btn)`
  box-sizing: border-box;
  display: inline-block;
  height: ${rem(45)};
  padding: ${em(15, font.small)} ${em(30, font.small)};
  font-size: ${rem(font.small)};
  line-height: 1;
  ${font.secondary};
  color: #fff;
  white-space: nowrap;
  text-align: center;
  background-color: rgba(255, 255, 255, .3);
  border-radius: 100em;
  outline: none;
  transition: .2s;

  &:hover,
  &:focus {
    color: ${p => p.color || "#111"};
    background-color: #fff;
  }

  ${p =>
    p.dark &&
    css`
    color: #fff;
    background-color: #111;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #111;
    }
  `}

  ${p => p.wide && `width: 100%;`}

  ${p => p.bold && `font-weight: 500;`}

  ${p =>
    p.circle &&
    css`
    width: ${rem(28)};
    height: ${rem(28)};
    padding: 0;
  `}

  ${p =>
    p.fill &&
    p.color &&
    css`
    color: #fff;
    background-color: ${p => p.color};

    &:hover,
    &:focus {
      color: ${p => p.color};
      background-color: #fff;
    }
  `}
`

export default Btn
