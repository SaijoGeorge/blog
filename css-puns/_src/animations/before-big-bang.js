import React, { Component } from "react"
import "gsap"
import "../libs/MorphSVGPlugin"

export default class extends Component {
  componentDidMount() {
    const nucleus = this.el.querySelector("#before-big-bang-nucleus")
    const electronOne = this.el.querySelector("#before-big-bang-electron-one")
    const electronTwo = this.el.querySelector("#before-big-bang-electron-two")
    const electronThree = this.el.querySelector(
      "#before-big-bang-electron-three"
    )
    const orbitOne = this.el.querySelector("#before-big-bang-orbit-one")
    const orbitTwo = this.el.querySelector("#before-big-bang-orbit-two")
    const orbitThree = this.el.querySelector("#before-big-bang-orbit-three")

    TweenMax.set(nucleus, { transformOrigin: "center" })

    this.animation = new TimelineMax({ repeat: -1 })
      .fromTo(
        nucleus,
        1,
        {
          scale: 0.8
        },
        {
          scale: 1,
          ease: Power1.easeIn,
          repeat: -1,
          yoyo: true
        },
        0
      )
      .to(
        electronOne,
        5,
        {
          bezier: {
            type: "cubic",
            values: MorphSVGPlugin.pathDataToBezier(orbitOne, {
              align: "relative",
              offsetX: "20",
              offsetY: "-160"
            })
          },
          repeat: -1,
          ease: Power0.easeOut
        },
        0
      )
      .to(
        electronTwo,
        4,
        {
          bezier: {
            type: "cubic",
            values: MorphSVGPlugin.pathDataToBezier(orbitTwo, {
              align: "relative",
              offsetX: "210",
              offsetY: "-10"
            })
          },
          repeat: -1,
          ease: Power0.easeOut
        },
        0
      )
      .to(
        electronThree,
        3,
        {
          bezier: {
            type: "cubic",
            values: MorphSVGPlugin.pathDataToBezier(orbitThree, {
              align: "relative",
              offsetX: "-87",
              offsetY: "213"
            })
          },
          repeat: -1,
          ease: Power0.easeOut
        },
        0
      )

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
          fill="#303F9F"
        />
        <path
          id="before-big-bang-orbit-three"
          d="M341.87 347.8c-111.29 77.93-220.26 114.33-243.38 81.3s48.35-122.97 159.64-200.9 220.26-114.33 243.38-81.3-48.35 122.97-159.64 200.9z"
          fill="none"
          stroke="#FFF"
          strokeWidth="7"
          strokeMiterlimit="10"
        />
        <path
          id="before-big-bang-orbit-two"
          d="M341.87 228.2c111.29 77.93 182.77 167.87 159.64 200.9s-132.09-3.37-243.38-81.3S75.36 179.93 98.49 146.9s132.09 3.37 243.38 81.3z"
          fill="none"
          stroke="#FFF"
          strokeWidth="7"
          strokeMiterlimit="10"
        />
        <path
          id="before-big-bang-orbit-one"
          d="M373 288c0 135.86-32.68 246-73 246s-73-110.14-73-246 32.68-246 73-246 73 110.14 73 246z"
          fill="none"
          stroke="#FFF"
          strokeWidth="7"
          strokeMiterlimit="10"
        />
        <circle
          id="before-big-bang-nucleus"
          cx="300"
          cy="290"
          r="34.13"
          fill="#FFA726"
        />
        <circle
          id="before-big-bang-electron-three"
          cx="419"
          cy="144"
          r="23"
          fill="#FFF"
        />
        <circle
          id="before-big-bang-electron-two"
          cx="125"
          cy="226.5"
          r="23"
          fill="#FFF"
        />
        <circle
          id="before-big-bang-electron-one"
          cx="350"
          cy="458.5"
          r="23"
          fill="#FFF"
        />
      </svg>
    )
  }
}
