import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const flatLegOne = this.el.querySelector("#ikea-flat-leg-one")
    const flatLegTwo = this.el.querySelector("#ikea-flat-leg-two")
    const flatLegThree = this.el.querySelector("#ikea-flat-leg-three")
    const flatLegFour = this.el.querySelector("#ikea-flat-leg-four")
    const flatTable = this.el.querySelector("#ikea-flat-table")

    const dLegOne = this.el.querySelector("#ikea-d-leg-one")
    const dLegTwo = this.el.querySelector("#ikea-d-leg-two")
    const dLegThree = this.el.querySelector("#ikea-d-leg-three")
    const dLegFour = this.el.querySelector("#ikea-d-leg-four")
    const dTable = this.el.querySelector("#ikea-d-table")
    const dimension = this.el.querySelector("#ikea-d-dimension")

    this.animation = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 1 })
      .to(flatLegOne, 1, { morphSVG: dLegOne, fill: "#006BB3" }, 0)
      .to(flatLegTwo, 1, { morphSVG: dLegTwo, fill: "#006BB3" }, 0)
      .to(flatLegThree, 1, { morphSVG: dLegThree, fill: "#00426E" }, 0)
      .to(flatLegFour, 1, { morphSVG: dLegFour, fill: "#00426E" }, 0)
      .to(flatTable, 1, { morphSVG: dTable }, 0)
      .to(dimension, 0.1, { opacity: 1 }, "-=.1")

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="ikea-clip">
          <path d="M600 300c0 165.686-134.314 300-300 300S0 465.686 0 300C0 134.315 134.314 0 300 0s300 134.315 300 300" />
        </clipPath>
        <g clipPath="url(#ikea-clip)">
          <path
            d="M600 300c0 165.686-134.314 300-300 300S0 465.686 0 300C0 134.315 134.314 0 300 0s300 134.315 300 300"
            fill="#FFDA1A"
          />
          <path
            id="ikea-d-leg-four"
            display="none"
            fill="#00426E"
            d="M470.015 192.32h28v128h-28z"
          />
          <path
            id="ikea-flat-leg-four"
            fill="#005E9D"
            d="M354 128.28h28v128h-28z"
          />
          <path
            id="ikea-d-leg-three"
            display="none"
            fill="#00426E"
            d="M231.25 192.32h28v128h-28z"
          />
          <path
            id="ikea-flat-leg-three"
            fill="#005E9D"
            d="M398 128.28h28v128h-28z"
          />
          <path
            id="ikea-d-table"
            display="none"
            fill="#005E9D"
            d="M93.75 285.18l137.5-98 275-.36-137.5 98z"
          />
          <path
            id="ikea-flat-table"
            fill="#005E9D"
            d="M174 128.28h158v275H174z"
          />
          <g id="ikea-d-dimension" opacity="0">
            <path fill="#003A61" d="M259.25 320.32V300h8.235v14.438z" />
            <path
              fill="#004C80"
              d="M121.75 412.82V300.048l8.235-5.883v112.774z"
            />
            <path fill="#006BB3" d="M93.75 285.18l275-.36v15.227h-275z" />
            <path
              fill="#004C80"
              d="M506.25 186.82v15l-137.5 98.227V284.82zM368.75 412.82V300.048l8.235-5.883v112.774z"
            />
            <path
              fill="#004C80"
              d="M498.015 320.32V207.548l8.235-5.883v112.774z"
            />
          </g>
          <path
            id="ikea-d-leg-two"
            display="none"
            fill="#006BB3"
            d="M340.75 284.82h28v128h-28z"
          />
          <path
            id="ikea-flat-leg-two"
            fill="#005E9D"
            d="M398 275.28h28v128h-28z"
          />
          <path
            id="ikea-d-leg-one"
            display="none"
            fill="#006BB3"
            d="M93.75 285.18h28v128h-28z"
          />
          <path
            id="ikea-flat-leg-one"
            fill="#005E9D"
            d="M354 275.28h28v128h-28z"
          />
        </g>
      </svg>
    )
  }
}
