import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const hat = this.el.querySelector("#religion-hat")
    const smallHat = this.el.querySelector("#religion-hat-small")

    TweenMax.set(smallHat, { scale: 0.5, transformOrigin: "bottom center" })

    this.animation = new TimelineMax({ repeat: -1 })
      .to(hat, 2, {
        y: -500,
        scale: 0.7,
        transformOrigin: "top center",
        ease: Power1.easeOut
      })
      .to(smallHat, 1, { scale: 1 }, "-=1.5")

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="religious-clip">
          <path d="M600 300c0 165.7-134.3 300-300 300S0 465.7 0 300 134.3 0 300 0s300 134.3 300 300" />
        </clipPath>
        <g clipPath="url(#religious-clip)">
          <path
            d="M600 300c0 165.7-134.3 300-300 300S0 465.7 0 300 134.3 0 300 0s300 134.3 300 300"
            fill="#757575"
          />
          <g id="religion-hat-small">
            <path
              d="M507 378.4c0 2.6-2.1 4.6-4.6 4.6H97.6c-2.6 0-4.6-2.1-4.6-4.6 0-8.4 5.9-15.6 14.1-17.2l78.4-15.5c8.4-1.7 14.9-8.4 16.3-16.9l42.5-199.5c1.5-7.2 7.9-12.3 15.2-12.3h80.9c7.3 0 13.7 5.1 15.2 12.3l42.5 199.5c1.4 8.5 7.9 15.2 16.3 16.9l78.4 15.5c8.3 1.6 14.2 8.8 14.2 17.2z"
              fill="#212121"
            />
            <path
              d="M398.2 323H201.8l6.1-30.5 72.9-5.9c12.8-1 25.6-1 38.4 0l72.9 5.9 6.1 30.5z"
              fill="#5D4037"
            />
            <path
              fill="none"
              stroke="#FBC02D"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M276 285.8h48v42.4h-48z"
            />
          </g>
          <g id="religion-hat">
            <path
              d="M507 378.4c0 2.6-2.1 4.6-4.6 4.6H97.6c-2.6 0-4.6-2.1-4.6-4.6 0-8.4 5.9-15.6 14.1-17.2l78.4-15.5c8.4-1.7 14.9-8.4 16.3-16.9l42.5-199.5c1.5-7.2 7.9-12.3 15.2-12.3h80.9c7.3 0 13.7 5.1 15.2 12.3l42.5 199.5c1.4 8.5 7.9 15.2 16.3 16.9l78.4 15.5c8.3 1.6 14.2 8.8 14.2 17.2z"
              fill="#212121"
            />
            <path
              d="M398.2 323H201.8l6.1-30.5 72.9-5.9c12.8-1 25.6-1 38.4 0l72.9 5.9 6.1 30.5z"
              fill="#5D4037"
            />
            <path
              fill="none"
              stroke="#FBC02D"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M276 285.8h48v42.4h-48z"
            />
          </g>
        </g>
      </svg>
    )
  }
}
