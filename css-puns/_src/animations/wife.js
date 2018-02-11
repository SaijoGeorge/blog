import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const starOne = this.el.querySelector("#wife-star-one")
    const starTwo = this.el.querySelector("#wife-star-two")
    const starThree = this.el.querySelector("#wife-star-three")

    this.animation = new TimelineMax({ repeat: -1 })
      .to(starOne, 1, { opacity: 1, ease: Bounce.easeInOut }, 0)
      .to(starOne, 0, { opacity: 0 }, 1)
      .to(starTwo, 1, { opacity: 1, ease: Bounce.easeInOut }, 1)
      .to(starTwo, 0, { opacity: 0 }, 2)
      .to(starThree, 1, { opacity: 1, ease: Bounce.easeInOut }, 2)
      .to(starThree, 0, { opacity: 0 }, 3)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <path
          d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
          fill="#F2726F"
        />
        <circle
          cx="226.49"
          cy="248.62"
          r="104.85"
          fill="none"
          stroke="#FFCA28"
          strokeWidth="15"
          strokeMiterlimit="10"
        />
        <polygon
          points="463.18,257.28 393.1,281.23 378.59,208.6"
          fill="#B0BEC5"
        />
        <polygon
          points="442.03,245.11 393.1,281.23 463.18,257.28"
          fill="#90A4AE"
        />
        <polygon
          points="451.96,227.86 463.18,257.28 442.03,245.11"
          fill="#E9EDEF"
        />
        <polygon
          points="451.96,227.86 436.42,230.4 430.81,215.69"
          fill="#E5EAEC"
        />
        <polygon
          points="451.96,227.86 442.03,245.11 420.88,232.94 436.42,230.4"
          fill="#90A4AE"
        />
        <polygon
          points="399.74,220.77 393.1,281.23 378.59,208.6"
          fill="#90A4AE"
        />
        <polygon
          points="409.66,203.52 378.59,208.6 399.74,220.77"
          fill="#E9EDEF"
        />
        <polygon
          points="430.81,215.69 415.27,218.23 409.66,203.53"
          fill="#E5EAEC"
        />
        <polygon
          points="436.42,230.4 420.88,232.94 415.27,218.23 430.81,215.69"
          fill="#859BA6"
        />
        <polygon
          points="420.88,232.94 399.74,220.77 409.66,203.53 415.27,218.23"
          fill="#90A4AE"
        />
        <circle
          cx="342.27"
          cy="364.23"
          r="92.88"
          fill="none"
          stroke="#FFCA28"
          strokeWidth="15"
          strokeMiterlimit="10"
        />
        <polygon
          points="416.47,279.05 388.39,285.76 380.6,257.97"
          fill="#FFCA28"
        />
        <g fill="#FFF">
          <polygon
            opacity="0"
            id="wife-star-three"
            points="391.29,200.58 427.75,179.1 398.6,209.78 430.3,237.82 392.11,219.58 375.23,258.39 380.78,216.43 338.66,212.38 380.27,204.69 371.11,163.37"
          />
          <polygon
            opacity="0"
            id="wife-star-two"
            points="444.53,219.16 471.13,223.7 444.31,226.66 448.22,253.35 437.12,228.76 412.94,240.73 432.89,222.57 414.04,203.27 437.48,216.64 450.01,192.75"
          />
          <polygon
            opacity="0"
            id="wife-star-one"
            points="434.67,254.47 451.55,244.53 438.06,258.73 452.73,271.71 435.05,263.27 427.24,281.23 429.81,261.81 410.31,259.94 429.57,256.38 425.33,237.25"
          />
        </g>
      </svg>
    )
  }
}
