import React from "react"
import styled from "styled-components"
import { rem, length, min } from "../styles"

export const SocialLinksGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 4px;
  margin-left: 4px;

  > * + * {
    margin-left: ${rem(length.gap / 2)};
  }
`

const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  width: ${rem(45)};
  height: ${rem(45)};
  ${min(650)`
    width: ${rem(34)};
    height: ${rem(34)};
  `} border-radius: 50%;
  background-color: ${p => p.color};
  transition: .2s;

  > svg {
    width: 55%;
    fill: rgba(0, 0, 0, .85);
  }

  &:hover,
  &:focus {
    background-color: #fff;
  }
`

const TwitterIcon = ({ color }) =>
  <SocialIcon color={color}>
    <svg viewBox="0 0 24 24" style={{ transform: "scale(0.95)" }}>
      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
    </svg>
  </SocialIcon>

const FacebookIcon = ({ color }) =>
  <SocialIcon color={color}>
    <svg viewBox="0 0 24 24">
      <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
    </svg>
  </SocialIcon>

const GoogleIcon = ({ color }) =>
  <SocialIcon color={color}>
    <svg
      viewBox="0 0 24 24"
      style={{ marginLeft: 1, transform: "scale(1.15)" }}
    >
      <path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
    </svg>
  </SocialIcon>

const LinkedInIcon = ({ color }) =>
  <SocialIcon color={color}>
    <svg viewBox="0 0 24 24" style={{ marginTop: -3 }}>
      <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
    </svg>
  </SocialIcon>

const EmailIcon = ({ color }) =>
  <SocialIcon color={color}>
    <svg viewBox="0 0 24 24">
      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
    </svg>
  </SocialIcon>

const url = (slug = "") => `https://saijogeorge.com/css-puns/${slug}`
const text = "Epic%20CSS%20Puns.%20Web%20designers%20will%20%E2%9D%A4%20this"
const title = "CSS%20Puns%20&%20CSS%20Jokes%20~%20Curated%20by%20Saijo%20George"

export const TwitterLink = ({ slug, color }) =>
  <a
    href={`https://twitter.com/intent/tweet?original_referer=https://saijogeorge.com&text=${text}&tw_p=tweetbutton&url=${url(
      slug
    )}&via=SaijoGeorge`}
    title="Share on Twitter"
    target="_blank"
    rel="noopener"
  >
    <TwitterIcon color={color} />
  </a>

export const FacebookLink = ({ slug, color }) =>
  <a
    href={`http://facebook.com/sharer.php?u=${url(slug)}`}
    title="Share on Facebook"
    target="_blank"
    rel="noopener"
  >
    <FacebookIcon color={color} />
  </a>

export const GoogleLink = ({ slug, color }) =>
  <a
    href={`http://plus.google.com/share?url=${url(slug)}`}
    title="Share on Google+"
    target="_blank"
    rel="noopener"
  >
    <GoogleIcon color={color} />
  </a>

export const LinkedInLink = ({ slug, color }) =>
  <a
    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url(
      slug
    )}&title=${title}&summary=${text}`}
    title="Share on LinkedIn"
    target="_blank"
    rel="noopener"
  >
    <LinkedInIcon color={color} />
  </a>

export const EmailLink = ({ slug, color }) =>
  <a
    href={`mailto:?subject=A%20great%20website%20to%20find%20funny%20CSS%20puns..&body=Hi%20%0A%0AI%20thought%20you%20might%20love%20to%20have%20a%20look%20at%20some%20CSS%20Puns%2C%20they%20are%20hilarious.%20${url(
      slug
    )}`}
    title="Send e-mail"
  >
    <EmailIcon color={color} />
  </a>
