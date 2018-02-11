import React, { Component } from "react"
import styled, { css } from "styled-components"
import { em, min, max } from "../styles"
import "gsap"

const blurShape =
  "M110,60c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50c0-27.6,22.4-50,50-50C87.6,10,110,32.4,110,60z"
const activeShape =
  "M96,60c0,27.6-8.4,53-36,53c-27.6,0-36-25.4-36-53c0-27.6,8.4-53,36-53C87.6,7,96,32.4,96,60z"

class Arrow extends Component {
  componentWillMount() {
    this.arrowID = Math.random()
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
    const { className, left } = this.props

    return (
      <svg
        viewBox="0 0 120 120"
        preserveAspectRatio="none"
        className={className}
        onMouseDown={this.onActive}
        onTouchStart={this.onActive}
        onMouseUp={this.onBlur}
        onMouseLeave={this.onBlur}
      >
        <mask id={this.arrowID}>
          <rect fill="#fff" width="100%" height="100%" />
          <path
            fill="#000"
            className="arrow"
            d={
              left
                ? "M71.5,58.5v2.9H54.1l8,8L60,71.5L48.5,60L60,48.5l2.1,2.1l-8,8L71.5,58.5L71.5,58.5z"
                : "M48.5,61.5v-2.9h17.4l-8-8l2.1-2.1L71.5,60L60,71.5l-2.1-2.1l8-8H48.5z"
            }
          />
        </mask>

        <path
          ref={el => (this.circle = el)}
          mask={`url(#${this.arrowID})`}
          d={blurShape}
        />
      </svg>
    )
  }
}

Arrow = styled(Arrow)`
  width: ${em(60)};
  height: ${em(60)};
  font-size: .9rem;
  ${min(350)`font-size: 1rem;`}
  ${min(800)`font-size: 2rem;`}
  fill: currentColor;
  will-change: transform;

  .arrow {
    transform-origin: center;
    ${max(800)`transform: scale(1.6);`}
  }
`

export default Arrow
