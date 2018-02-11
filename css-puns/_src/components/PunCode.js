import React, { Component } from "react"
import styled from "styled-components"
import { font, rem, min } from "../styles"
import SyntaxHighlighter, {
  registerLanguage
} from "react-syntax-highlighter/light"
import css from "react-syntax-highlighter/languages/hljs/css"
import monokaiSublime from "react-syntax-highlighter/styles/hljs/monokai-sublime"

registerLanguage("css", css)

let PunCode = ({ code, ...props }) => (
  <SyntaxHighlighter language="css" style={monokaiSublime} {...props}>
    {code.trim()}
  </SyntaxHighlighter>
)

PunCode = styled(PunCode)`
  flex: 1 100%;
  ${min(650)`flex-basis: auto;`} font-size: ${p =>
      p.fontSize ? rem(p.fontSize) : rem(16)};
  ${min(800)`font-size: ${rem(20)};`} line-height: 1.6;
  ${font.secondary};
  white-space: pre-wrap;
  background: none !important;
`

export default PunCode
