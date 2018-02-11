import React, { Component } from "react"
import styled from "styled-components"
import { max, rem, font, length } from "../styles"
import inBrowser from "../inBrowser"
import Btn from "./Btn"
import Modal from "./Modal"
import Credits from "./Credits"

const Container = styled.div`
  max-width: calc(100vw - ${rem(60)});
  padding: 10%;
  ${max(800)`padding-top: 16%`};
  text-align: center;
  color: #777;
`

const Heading = styled.h1`
  margin: 0;
  font-size: ${rem(30)};
  line-height: 1.2;
  color: #111;
`

const Paragraph = styled.p`
  margin: ${rem(10)} 0 ${rem(25)};
`

const Form = styled.form`
  font-size: ${rem(18)};
  line-height: 1.6;
  ${font.secondary};
  color: #777;

  label {
    display: block;
    margin-bottom: ${rem(10)};
  }

  input {
    padding: ${rem(7)} ${rem(16)};
    margin-bottom: ${rem(20)};
    font: inherit;
    color: inherit;
    border: solid 2px #ddd;
    border-radius: 100px;
    outline: none;
    transition: 0.3s;

    &:focus {
      border-color: #bbb;
    }
  }
`

const Newsletter = ({ color }) => (
  <Modal
    button={props =>
      inBrowser ? (
        window.matchMedia(`(min-width: ${rem(500)})`).matches ? (
          <Btn {...props} color={color}>
            📧 Notify Me
          </Btn>
        ) : (
          <Btn {...props} circle color={color}>
            📧
          </Btn>
        )
      ) : (
        <Btn {...props} circle color={color}>
          📧
        </Btn>
      )
    }
    content={
      <Container>
        <Heading>Signup for Newsletter</Heading>
        <Paragraph>
          Want to get notified about new puns, <br />
          merchandise or giveaways? <br />
          Sign up below.
        </Paragraph>
        <Form
          action="//saijogeorge.us16.list-manage.com/subscribe/post?u=baa5ecbf828cca0750a78a6ef&amp;id=1ac480574f"
          method="post"
          target="_blank"
          rel="noopener"
        >
          <div>
            <label htmlFor="email">Email Address </label>
            <input type="email" name="EMAIL" id="email" />
            <label htmlFor="firstname">First Name </label>
            <input name="FNAME" id="firstname" />
          </div>
          <Btn dark type="submit" name="subscribe">
            Subscribe
          </Btn>
        </Form>
      </Container>
    }
  />
)

export default Newsletter
