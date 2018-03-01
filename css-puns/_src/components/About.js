import React, { Component } from "react"
import styled from "styled-components"
import { max, rem, font, length } from "../styles"
import Btn from "./Btn"
import Modal from "./Modal"
import Credits from "./Credits"

const Container = styled.div`
  max-width: calc(100vw - ${rem(60)});
  padding: 10%;
  ${max(800)`padding-top: 16%`};
  text-align: center;
`

const Heading = styled.h1`
  margin: 0 0 ${rem(25)};
  font-size: ${rem(30)};
  line-height: 1.2;
  color: #111;
`

const Text = styled.p`
  margin: 0;
  font-size: ${rem(14)};
  line-height: 1.6;
  ${font.secondary};
  color: #777;
`

const Link = styled.a`
  text-decoration: underline;
`

const About = ({ color }) => (
  <Modal
    button={props => (
      <Btn {...props} circle color={color}>
        i
      </Btn>
    )}
    content={
      <Container>
        <Heading>
          CSS Puns & CSS Jokes <br />Curated by Saijo George
        </Heading>
        <Text>
          After the great success of{" "}
          <Link
            href="https://saijogeorge.com/css-puns/OLD_COPY/V1/"
            target="_blank"
          >
            version one
          </Link>{" "}
          (idea came from a {" "}
          <Link
            href="http://www.reddit.com/r/web_design/comments/2nxdb8/css_puns_can_you_come_up_with_more/"
            target="_blank"
          >
            reddit
          </Link>{" "} & {" "}
          <Link
            href="https://www.designernews.co/stories/39607-life-saver-css-code"
            target="_blank"
          >
            DesignerNews
          </Link>{" "} thread). I wanted to do something better with{" "}
          <Link href="https://saijogeorge.com/css-puns/">version 2</Link> and
          this is my attempt at that. Along with the CSS puns I have also added
          various{" "}
          <Link href="https://gumroad.com/saijogeorge" target="_blank">
            merchandise
          </Link>{" "}
          that you can buy for example t-shirts, mugs, etc. I have plans to add
          new things later on, you can always subscribe to the newsletter to get
          notified when I add new puns or merchandise.
        </Text>
        <div style={{ textAlign: "center" }}>
          <Credits />
        </div>
      </Container>
    }
  />
)

export default About
