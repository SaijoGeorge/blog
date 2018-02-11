import React from "react"
import styled from "styled-components"
import { font, length, rem, min } from "../styles"
import TextLink from "./TextLink"

let Credits = ({ className }) => (
  <div className={className}>
    <span className="syntax">{".website { "}</span>
    <span className="indentation">
      <br />&nbsp;&nbsp;
    </span>
    {"--by"}
    <span className="syntax">{": "}</span>
    <TextLink href="https://twitter.com/SaijoGeorge" external>
      Saijo George
    </TextLink>
    <span className="syntax">{"; "}</span>
    <span className="indentation">
      <br />&nbsp;&nbsp;
    </span>
    {"--developed-by"}
    <span className="syntax">{": "}</span>
    <TextLink href="https://codepen.io/asistapl" external>
      Maciej Leszczynski
    </TextLink>
    <span className="syntax">{"; "}</span>
    <span className="indentation">
      <br />&nbsp;&nbsp;
    </span>
    {"--illustrated-by"}
    <span className="syntax">{": "}</span>
    <TextLink href="https://codepen.io/KazikM" external>
      Kasia Marcinkiewicz
    </TextLink>
    <span className="syntax">{"; "}</span>
    <br className="indentation" />
    <span className="syntax">{"}"}</span>
  </div>
)

Credits = styled(Credits)`
  display: inline-block;
  position: relative;
  margin-top: ${rem(30)};
  font-size: ${rem(font.small)};
  line-height: 2;
  ${font.secondary} text-align: left;
  color: #777;

  > .syntax {
    color: #999;
  }
`

export default Credits
