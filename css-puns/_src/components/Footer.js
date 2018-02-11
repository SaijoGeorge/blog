import React from "react"
import styled from "styled-components"
import { font, length, rem, min } from "../styles"
import TextLink from "./TextLink"

let Footer = ({ className }) =>
  <footer className={className}>
    {"Other projects: "}
    <br />
    <TextLink href="http://allthefreestock.com/" external>
      🖼️ AllTheFreeStock
    </TextLink>
    <br />{" "}
    <TextLink href="https://tldrmarketing.com/" external>
      📑&nbsp;tl;dr Marketing
    </TextLink>
    <br />{" "}
    <TextLink href="https://codemyui.com/" external>
      💻&nbsp;CodeMyUI
    </TextLink>
    <br />{" "}
    <TextLink href="https://saijogeorge.com/best-marketing-tools/" external>
      🔍&nbsp;SEO Tools
    </TextLink>
  </footer>

Footer = styled(Footer)`
  position: relative;
  margin-top: ${rem(length.spacer / 2 - 8)};
  ${min(500)`margin-top: ${rem(length.spacer - 8)};`}
  margin-bottom: ${rem(length.spacer / 2 - 8)};
  font-size: ${rem(font.small - 2)};
  line-height: 2.5;
  ${min(650)`text-align: center;`}
  ${min(800)`font-size: ${rem(font.small)};`}
  ${font.secondary}
  color: rgba(255, 255, 255, .6);

  > ${TextLink} {
    color: #fff;
  }

  > br {
    ${min(650)`display: none;`}
  }
`

export default Footer
