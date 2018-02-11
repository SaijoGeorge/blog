import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const leftPaddle = this.el.querySelector("#defibrillator-paddle-left")
    const leftCable = this.el.querySelector("#defibrillator-cable-left")
    const rightPaddle = this.el.querySelector("#defibrillator-paddle-right")
    const rightCable = this.el.querySelector("#defibrillator-cable-right")
    const sparks = this.el.querySelectorAll("#defibrillator-sparks path")
    const line = this.el.querySelector("#defibrillator-line")
    const pulse = this.el.querySelector("#defibrillator-pulse")

    const rubbing = new TimelineMax({ repeat: 1, yoyo: true })
      .to(leftPaddle, 0.5, { x: 98 }, 0)
      .to(
        leftCable,
        0.5,
        {
          morphSVG:
            "M278,151.6c-1.1,28.5-211.2,204.9-152,334c22,48,115.4,20,112.4-55.3"
        },
        0
      )
      .to(rightPaddle, 0.5, { x: -98 }, 0)
      .to(
        rightCable,
        0.5,
        {
          morphSVG:
            "M342,171.6c2.1,53,190.2,187,132,314c-22,48-115.4,20-112.4-55.3"
        },
        0
      )
      .to(leftPaddle, 0.15, { y: 20 }, 0.7)
      .to(
        leftCable,
        0.15,
        {
          morphSVG:
            "M278,151.6c-2.1,53-210.2,207-152,334c22,48,115.4,20,112.4-55.3"
        },
        0.7
      )
      .to(rightPaddle, 0.15, { y: -20 }, 0.7)
      .to(
        rightCable,
        0.15,
        {
          morphSVG:
            "M342,161.6c2.1,53,190.2,197,132,324c-22,48-115.4,20-112.4-55.3"
        },
        0.7
      )
      .to(leftPaddle, 0.15, { y: -20 }, 0.85)
      .to(
        leftCable,
        0.15,
        {
          morphSVG:
            "M278,141.6c-1.1,28.5-211.2,214.9-152,344c22,48,115.4,20,112.4-55.3"
        },
        0.85
      )
      .to(rightPaddle, 0.15, { y: 20 }, 0.85)
      .to(
        rightCable,
        0.15,
        {
          morphSVG:
            "M342,181.6c2.1,53,190.2,177,132,304c-22,48-115.4,20-112.4-55.3"
        },
        0.85
      )

    const pulseAction = new TimelineMax({ repeat: 1 })
      .fromTo(
        pulse,
        3,
        { drawSVG: "100% 100%" },
        { drawSVG: "40%", ease: Power0.easeNone }
      )
      .to(pulse, 1, { drawSVG: "0", ease: Power0.easeNone })

    this.animation = new TimelineMax({ repeat: -1, repeatDelay: 2 })
      .fromTo(
        line,
        3,
        { drawSVG: "0" },
        { drawSVG: "100%", ease: Power0.easeNone }
      )
      .to(line, 0, { opacity: 0 })
      .to(pulse, 0, { opacity: 1 })
      .add(rubbing, "-=2")
      .from(sparks, 0.5, {
        transformOrigin: "center",
        opacity: 0,
        scale: 0.8,
        ease: Bounce.easeOut
      })
      .to(sparks, 0.5, { opacity: 0, scale: 0.8 })
      .add(pulseAction, "-=1.2")

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="defibrilator-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#defibrilator-clip)">
          <path
            d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
            fill="#039BE5"
          />
          <path
            id="defibrillator-cable-right"
            d="M432 151.64c3.87 97.66 61.76 269.07 32 334-22 48-105.39 19.96-102.39-55.32"
            fill="none"
            stroke="#212121"
            strokeWidth="10"
            strokeMiterlimit="10"
          />
          <g id="defibrillator-paddle-right">
            <path
              d="M454.25 177.64H426v-54h28.24c6.95 0 12.58 5.63 12.58 12.58v28.85c0 6.94-5.63 12.57-12.57 12.57z"
              fill="none"
              stroke="#424242"
              strokeWidth="7"
              strokeMiterlimit="10"
            />
            <path
              d="M439.67 184.64L415 187.31v-83l25.72 3.43c3.61.52 6.28 3.61 6.28 7.26v62.32c0 4.04-3.28 7.32-7.33 7.32z"
              fill="#424242"
            />
            <path
              d="M405.84 202.64h-9.09v-112h9.09c6.17 0 11.17 5 11.17 11.17v89.67c-.01 6.16-5.01 11.16-11.17 11.16z"
              fill="#EEE"
            />
          </g>
          <path
            id="defibrillator-cable-left"
            d="M168 151.64c-3.87 97.66-61.76 269.07-32 334 22 48 105.39 19.96 102.39-55.32"
            fill="none"
            stroke="#212121"
            strokeWidth="10"
            strokeMiterlimit="10"
          />
          <g id="defibrillator-paddle-left">
            <path
              d="M133.18 165.06v-28.85c0-6.95 5.63-12.58 12.58-12.58H174v54h-28.24c-6.95.01-12.58-5.62-12.58-12.57z"
              fill="none"
              stroke="#424242"
              strokeWidth="7"
              strokeMiterlimit="10"
            />
            <path
              d="M160.33 184.64l24.67 2.67v-83l-25.72 3.43c-3.61.52-6.28 3.61-6.28 7.26v62.32c0 4.04 3.28 7.32 7.33 7.32z"
              fill="#424242"
            />
            <path
              d="M183 191.47V101.8c0-6.17 5-11.17 11.17-11.17h9.09v112h-9.09c-6.17.01-11.17-4.99-11.17-11.16z"
              fill="#EEE"
            />
          </g>
          <g>
            <path
              d="M394.47 496h-196c-6.89 0-12.47-5.58-12.47-12.47V300.47c0-6.89 5.58-12.47 12.47-12.47h196c6.89 0 12.47 5.58 12.47 12.47v183.07c-.01 6.88-5.59 12.46-12.47 12.46z"
              fill="#E0F2F1"
            />
            <path fill="#212121" d="M220.01 305.02h152.92v129.27H220.01z" />
            <circle cx="230.29" cy="467.64" r="15.13" fill="#757575" />
            <circle cx="296.47" cy="467.64" r="10.87" fill="#757575" />
            <circle cx="327.67" cy="467.64" r="10.87" fill="#757575" />
            <circle cx="360.76" cy="467.64" r="10.87" fill="#757575" />
            <path fill="#BDBDBD" d="M254.87 461.02h13.24v13.24h-13.24z" />
            <clipPath id="defibrillator-clip-3225">
              <path d="M220.01 305.46h152.92v129.27H220.01z" />
            </clipPath>
            <path
              id="defibrillator-pulse"
              clipPath="url(#defibrillator-clip-3225)"
              fill="none"
              stroke="#00C853"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M377.2 372.25h-26.78l-3.23-4.16-3.47 28.63-4.15-57.26-4.39 32.79-1.15-3.23-3.93 3.23h-26.78l-3.23-4.16-3.47 28.63-4.15-57.26-4.39 32.79-1.16-3.23-3.92 3.23h-26.78l-3.24-4.16-3.46 28.63-4.16-57.26-4.38 32.79-1.16-3.23-3.92 3.23h-26.79l-3.23-4.16-3.46 28.63-4.16-57.26-4.38 32.79-1.16-3.23-3.92 3.23"
            />
            <path
              id="defibrillator-line"
              clipPath="url(#defibrillator-clip-3225)"
              fill="none"
              stroke="#00C853"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M188.8 372.25h188.4"
            />
          </g>
          <g id="defibrillator-sparks" fill="#FFD740">
            <path d="M329.24 103.64l27.69 4.4 1.6-11.6 32.23 17.41-27.69-4.4-1.6 11.6-32.23-17.41zM329.1 149.77l27.76-3.94-1.88-11.56 35.93 7.16-27.76 3.94 1.88 11.56-35.93-7.16zM332.95 196.84l25.99-10.54-4.62-10.76 36.59-1.74-25.99 10.54 4.62 10.76-36.59 1.74zM238.53 120.21l-1.6-11.6-27.69 4.4 32.23-17.41 1.6 11.6 27.69-4.4-32.23 17.41zM234.98 156.1l1.88-11.56-27.76-3.94 35.93-7.16-1.89 11.56 27.76 3.94-35.92 7.16zM230.46 194.27l4.62-10.76-25.99-10.54 36.59 1.74-4.62 10.76 25.99 10.54-36.59-1.74z" />
          </g>
        </g>
      </svg>
    )
  }
}
