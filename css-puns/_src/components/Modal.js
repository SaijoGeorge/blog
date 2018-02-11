import React, { Component } from "react"
import styled from "styled-components"
import { z, rem, em, min, max } from "../styles"
import "gsap"

const ModalContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${z("modal")};
  padding-top: ${rem(28)};
  pointer-events: none;
`

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;

  ${p =>
    p.visible &&
    `
    opacity: .3;
    pointer-events: auto;
  `};
`

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(700)};
  min-width: ${rem(700)};
  min-height: ${rem(700)};
  position: relative;
  background-color: #fff;
  border-radius: 2000px;
  opacity: 0;
  transform: scale(0.8);
  transition: 0.3s;
  pointer-events: none;

  ${p =>
    p.visible &&
    `
    opacity: 1;
    transform: none;
    pointer-events: auto;
  `};
`

const blurShape =
  "M110,60c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50c0-27.6,22.4-50,50-50C87.6,10,110,32.4,110,60z"
const activeShape =
  "M96,60c0,27.6-8.4,53-36,53c-27.6,0-36-25.4-36-53c0-27.6,8.4-53,36-53C87.6,7,96,32.4,96,60z"

class CloseBtn extends Component {
  componentWillMount() {
    this.randomID = Math.random()
  }

  onActive = () =>
    TweenMax.to(this.circle, 0.5, {
      attr: { d: activeShape },
      ease: Elastic.easeOut
    })

  onBlur = () =>
    TweenMax.to(this.circle, 1, {
      attr: { d: blurShape },
      ease: Elastic.easeOut
    })

  render() {
    const { visible, ...props } = this.props

    return (
      <button {...props}>
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          className="circle"
          onMouseDown={this.onActive}
          onTouchStart={this.onActive}
          onMouseUp={this.onBlur}
          onMouseLeave={this.onBlur}
        >
          <path ref={el => (this.circle = el)} d={blurShape} />
          <path
            className="cross"
            fill="#fff"
            d="M22.000,2.216 L19.784,-0.000 L11.000,8.784 L2.216,-0.000 L-0.000,2.216 L8.784,11.000 L-0.000,19.784 L2.216,22.000 L11.000,13.216 L19.784,22.000 L22.000,19.784 L13.216,11.000 L22.000,2.216 Z"
          />
        </svg>
      </button>
    )
  }
}

CloseBtn = styled(CloseBtn)`
  position: absolute;
  top: ${rem(40)};
  right: ${rem(40)};
  padding: 0;
  background: none;
  outline: none;
  cursor: pointer;

  ${max(750)`
    top: ${rem(30)};
    right: 50%;
    transform: translate(50%);
  `} .circle {
    width: ${em(60)};
    height: ${em(60)};
    font-size: 0.9rem;
    ${min(350)`font-size: 1rem`};
    ${min(800)`font-size: 2rem`};
    fill: #111;
    transition: 0.3s cubic-bezier(0.35, 0.8, 0.6, 1);
    transform: scale(0.5);
    will-change: transform;

    .cross {
      transform-origin: center;
      transform: translate(49px, 49px);
      ${max(800)`transform: scale(1.6) translate(49px, 49px);`};
    }

    ${p =>
      p.visible &&
      `
      transform: none;
      transition-duration: .5s;
    `};
  }
`

const Div = ({ children }) => <div>{children}</div>

class Modal extends Component {
  state = { isOpen: false }

  open = () => {
    this.setState({ isOpen: true })
    matchMedia("(max-width: 500px)").matches && scrollTo(0, 0)
  }

  close = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state
    const { button: Button, content, wrapper, noOverlay } = this.props
    const Wrapper = wrapper || Div

    return (
      <Wrapper>
        <Button onClick={this.open} />

        <ModalContainer>
          {!noOverlay && <Overlay visible={isOpen} onClick={this.close} />}

          <ModalContent visible={isOpen}>
            <CloseBtn visible={isOpen} onClick={this.close} />
            {this.props.content}
          </ModalContent>
        </ModalContainer>
      </Wrapper>
    )
  }
}

export default Modal
