import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const circle = this.el.querySelector("#sam-circle")
    const phone = this.el.querySelector("#sam-phone")

    const aPhone = this.el.querySelector("#sam-a-phone")
    const sPhone = this.el.querySelector("#sam-s-phone")

    const aScreen = this.el.querySelector("#sam-a-screen")
    const sScreen = this.el.querySelector("#sam-s-screen")

    const aDot01 = this.el.querySelector("#sam-a-dot-01")
    const aDot02 = this.el.querySelector("#sam-a-dot-02")
    const sDot01 = this.el.querySelector("#sam-s-dot-01")
    const sDot02 = this.el.querySelector("#sam-s-dot-02")
    const sDot03 = this.el.querySelector("#sam-s-dot-03")
    const sDot04 = this.el.querySelector("#sam-s-dot-04")

    const aMute = this.el.querySelector("#sam-a-mute")
    const sLogo = this.el.querySelector("#sam-s-logo")

    const aSpeaker = this.el.querySelector("#sam-a-speaker")
    const sSpeaker = this.el.querySelector("#sam-s-speaker")

    const aVolUp = this.el.querySelector("#sam-a-volUp")
    const aVolDown = this.el.querySelector("#sam-a-volDown")
    const sVol = this.el.querySelector("#sam-s-vol")

    const aPower = this.el.querySelector("#sam-a-power")
    const sPower = this.el.querySelector("#sam-s-power")

    const aBtn = this.el.querySelector("#sam-a-btn")
    const sBtn = this.el.querySelector("#sam-s-btn")

    const ease = Elastic.easeOut
    const duration = 2

    this.animation = new TimelineMax({
      repeat: -1,
      delay: 1,
      repeatDelay: 1,
      yoyo: true
    })

    this.animation.to(
      phone,
      duration,
      {
        transformOrigin: "center",
        scale: 1.1,
        ease
      },
      0
    )
    this.animation.to(circle, duration, { fill: "#034EA2", ease }, 0)

    this.animation.to(aPhone, duration, { morphSVG: sPhone, ease }, 0)
    this.animation.to(
      aScreen,
      duration,
      {
        morphSVG: sScreen,
        fill: "#034EA2",
        ease
      },
      0
    )

    this.animation.to(aSpeaker, duration, { morphSVG: sSpeaker, ease }, 0)
    this.animation.to(aDot01, duration, { morphSVG: sDot01, ease }, 0)
    this.animation.to(aDot02, duration, { morphSVG: sDot02, ease }, 0)
    this.animation.staggerFrom(
      [sDot03, sDot04],
      1,
      {
        transformOrigin: "center",
        scale: 0.5,
        opacity: 0,
        ease
      },
      0.3,
      0
    )
    this.animation.from(
      sLogo,
      duration,
      {
        transformOrigin: "center",
        scale: 0.5,
        opacity: 0,
        ease
      },
      0
    )

    this.animation.to([aMute, aVolDown], duration, { opacity: 0, ease }, 0)
    this.animation.to(aVolUp, duration, { morphSVG: sVol, ease }, 0)
    this.animation.to(aPower, duration, { morphSVG: sPower, ease }, 0)

    this.animation.to(aBtn, duration, { morphSVG: sBtn, ease }, 0)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <circle id="sam-circle" cx="300" cy="300" r="300" fill="#222" />
        <defs>
          <path
            id="sam-s-phone"
            fill="#FFF"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M225.84 83.06h148.08c19.8 0 35.82 16.04 35.82 35.82v362.24c0 19.8-16.04 35.82-35.82 35.82H225.84c-19.8 0-35.82-16.04-35.82-35.82V118.88c0-19.78 16.03-35.82 35.82-35.82z"
          />
          <path
            id="sam-s-screen"
            fill="#222"
            d="M204.66 122.36h190.7c3.04 0 5.5 2.47 5.5 5.5v344.48c0 3.04-2.46 5.5-5.5 5.5h-190.7c-3.04 0-5.5-2.46-5.5-5.5V127.87c0-3.04 2.46-5.5 5.5-5.5z"
          />
          <path
            id="sam-s-power"
            fill="#B3B3B3"
            d="M412.1 187.4l-1.66-2.76v36.38l1.65-2.76V187.4z"
          />
          <path
            id="sam-s-vol"
            fill="#B3B3B3"
            d="M187.9 152.12l1.66-2.76v77.7l-1.65-2.75v-72.1z"
          />
          <path
            id="sam-s-speaker"
            fill="#B3B3B3"
            d="M322.25 98h-46.02c-1.52 0-2.76-1.24-2.76-2.76 0-1.52 1.24-2.76 2.76-2.76h46.02c1.52 0 2.76 1.24 2.76 2.76 0 1.52-1.2 2.76-2.7 2.76z"
          />
          <path
            id="sam-s-dot-01"
            fill="#B3B3B3"
            d="M262.3 88.9c2.22 0 4 1.8 4 4s-1.78 4-4 4c-2.2 0-4-1.78-4-4s1.8-4 4-4z"
          />
          <path
            id="sam-s-dot-02"
            fill="#B3B3B3"
            d="M370.47 93.04c2.28 0 4.13 1.85 4.13 4.13s-1.85 4.13-4.13 4.13-4.13-1.85-4.13-4.13 1.85-4.13 4.13-4.13z"
          />
          <path
            id="sam-s-btn"
            fill="#FFF"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M318.34 505.4H281.4c-4.46 0-8.12-3.65-8.12-8.12 0-4.47 3.66-8.13 8.13-8.13h37c4.5 0 8.2 3.66 8.2 8.13 0 4.47-3.6 8.13-8.1 8.13z"
          />
        </defs>
        <g id="sam-phone">
          <path
            id="sam-a-phone"
            fill="#FFF"
            fillRule="evenodd"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M225.88 525.64c-19.5 0-35.4-15.88-35.4-35.4v-380.5c0-19.5 15.9-35.38 35.4-35.38H374.1c19.5 0 35.4 15.88 35.4 35.4v380.5c0 19.5-15.9 35.4-35.4 35.4H225.88z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-screen"
            fill="#222"
            d="M399.7 121.54H200.28c-.88 0-1.6.7-1.6 1.6v354.7c0 .9.7 1.6 1.6 1.6H399.7c.88 0 1.6-.7 1.6-1.6v-354.7c0-.9-.72-1.6-1.6-1.6z"
          />
          <path
            id="sam-a-volDown"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M190.5 236.25c-1.58 0-2.86-1.28-2.86-2.85v-22.77c0-1.57 1.28-2.85 2.85-2.85v28.47z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-volUp"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M190.5 201.2c-1.58 0-2.86-1.27-2.86-2.84V175.6c0-1.58 1.28-2.86 2.85-2.86v28.47z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-power"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M409.5 172.74c1.58 0 2.86 1.28 2.86 2.85v22.7c0 1.5-1.28 2.8-2.85 2.8v-28.4z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-mute"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M190.5 156.3c-1.58 0-2.86-1.27-2.86-2.84v-10.73c0-1.57 1.28-2.85 2.85-2.85v16.43z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-btn"
            fill="#FFF"
            fillRule="evenodd"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            d="M316 502c0 8.7-7.06 15.75-15.77 15.75-8.7 0-15.76-7.05-15.76-15.76s7.05-15.8 15.76-15.8c8.7 0 15.76 7 15.76 15.7z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-speaker"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M316.84 97.78h-33.7c-.98 0-1.8.8-1.8 1.8v.4c0 1 .82 1.8 1.8 1.8h33.7c1 0 1.8-.8 1.8-1.8v-.4c0-1-.8-1.8-1.8-1.8z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-dot-01"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M267.84 99.78c0 2.17-1.76 3.93-3.93 3.93-2.1 0-3.9-1.7-3.9-3.9s1.8-3.9 4-3.9 4 1.8 4 4z"
            clipRule="evenodd"
          />
          <path
            id="sam-a-dot-02"
            fill="#B3B3B3"
            fillRule="evenodd"
            d="M302.6 83.06c0 1.45-1.16 2.62-2.6 2.62-1.46 0-2.63-1.17-2.63-2.62 0-1.45 1.17-2.62 2.62-2.62 1.4 0 2.6 1.17 2.6 2.62z"
            clipRule="evenodd"
          />
          <path
            id="sam-s-dot-03"
            fill="#B3B3B3"
            d="M332.72 89.74c2.13 0 3.86 1.73 3.86 3.86s-1.73 3.86-3.86 3.86-3.86-1.73-3.86-3.86c0-2.14 1.73-3.86 3.86-3.86z"
          />
          <path
            id="sam-s-dot-04"
            fill="#B3B3B3"
            d="M343.74 89.2c2.44 0 4.4 1.96 4.4 4.4 0 2.44-1.96 4.4-4.4 4.4-2.44 0-4.4-1.96-4.4-4.4 0-2.44 1.97-4.4 4.4-4.4z"
          />
          <path
            id="sam-s-logo"
            fill="#B3B3B3"
            d="M270.27,111.53l2.24-0.14c0.05,0.36,0.15,0.64,0.3,0.83c0.24,0.31,0.59,0.46,1.04,0.46
		c0.34,0,0.59-0.08,0.78-0.24c0.18-0.16,0.27-0.34,0.27-0.55c0-0.2-0.09-0.37-0.26-0.53c-0.17-0.16-0.57-0.3-1.2-0.44
		c-1.03-0.23-1.77-0.54-2.2-0.92c-0.44-0.38-0.66-0.87-0.66-1.47c0-0.39,0.11-0.76,0.34-1.11c0.23-0.35,0.57-0.62,1.02-0.82
		c0.45-0.2,1.08-0.3,1.87-0.3c0.97,0,1.71,0.18,2.22,0.54c0.51,0.36,0.81,0.94,0.91,1.73l-2.22,0.13c-0.06-0.34-0.18-0.59-0.37-0.75
		c-0.19-0.16-0.45-0.23-0.78-0.23c-0.27,0-0.48,0.06-0.62,0.17c-0.14,0.12-0.21,0.26-0.21,0.42c0,0.12,0.06,0.23,0.17,0.33
		c0.11,0.1,0.37,0.19,0.79,0.28c1.03,0.22,1.76,0.45,2.21,0.67c0.44,0.23,0.77,0.51,0.97,0.84c0.2,0.34,0.3,0.71,0.3,1.13
		c0,0.49-0.13,0.94-0.4,1.35c-0.27,0.41-0.65,0.72-1.13,0.94c-0.48,0.21-1.09,0.32-1.83,0.32c-1.29,0-2.19-0.25-2.69-0.75
		C270.62,112.93,270.34,112.29,270.27,111.53z M283.03,112.79h-2.67l-0.37,1.26h-2.4l2.86-7.61h2.56l2.86,7.61h-2.46L283.03,112.79z
		 M282.54,111.14l-0.84-2.73l-0.83,2.73H282.54z M286.59,106.44h3.09l1.19,4.63l1.18-4.63h3.09v7.61h-1.92v-5.8l-1.48,5.8H290
		l-1.48-5.8v5.8h-1.92V106.44z M296.24,111.53l2.24-0.14c0.05,0.36,0.15,0.64,0.3,0.83c0.24,0.31,0.59,0.46,1.04,0.46
		c0.34,0,0.59-0.08,0.78-0.24c0.18-0.16,0.27-0.34,0.27-0.55c0-0.2-0.09-0.37-0.26-0.53c-0.17-0.16-0.57-0.3-1.2-0.44
		c-1.03-0.23-1.77-0.54-2.2-0.92c-0.44-0.38-0.66-0.87-0.66-1.47c0-0.39,0.11-0.76,0.34-1.11c0.23-0.35,0.57-0.62,1.02-0.82
		c0.45-0.2,1.08-0.3,1.87-0.3c0.97,0,1.71,0.18,2.22,0.54c0.51,0.36,0.81,0.94,0.91,1.73l-2.22,0.13c-0.06-0.34-0.18-0.59-0.37-0.75
		c-0.19-0.16-0.45-0.23-0.78-0.23c-0.27,0-0.48,0.06-0.62,0.17c-0.14,0.12-0.21,0.26-0.21,0.42c0,0.12,0.06,0.23,0.17,0.33
		c0.11,0.1,0.37,0.19,0.79,0.28c1.03,0.22,1.76,0.45,2.21,0.67c0.44,0.23,0.77,0.51,0.97,0.84c0.2,0.34,0.3,0.71,0.3,1.13
		c0,0.49-0.13,0.94-0.4,1.35c-0.27,0.41-0.65,0.72-1.13,0.94c-0.48,0.21-1.09,0.32-1.83,0.32c-1.29,0-2.19-0.25-2.69-0.75
		C296.59,112.93,296.3,112.29,296.24,111.53z M309.27,106.44h2.34v4.53c0,0.45-0.07,0.87-0.21,1.27c-0.14,0.4-0.36,0.75-0.66,1.05
		c-0.3,0.3-0.61,0.51-0.94,0.63c-0.46,0.17-1,0.25-1.64,0.25c-0.37,0-0.77-0.03-1.21-0.08c-0.44-0.05-0.8-0.15-1.1-0.31
		c-0.29-0.15-0.56-0.37-0.81-0.66c-0.24-0.28-0.41-0.58-0.5-0.88c-0.15-0.48-0.22-0.91-0.22-1.29v-4.53h2.34v4.64
		c0,0.42,0.12,0.74,0.34,0.97c0.23,0.23,0.55,0.35,0.96,0.35c0.4,0,0.72-0.12,0.95-0.34c0.23-0.23,0.35-0.56,0.35-0.98V106.44z
		 M313.19,106.44h2.19l2.86,4.21v-4.21h2.22v7.61h-2.22l-2.85-4.18v4.18h-2.21V106.44z M325.84,111.29v-1.58h3.63v3.24
		c-0.7,0.47-1.31,0.8-1.84,0.97c-0.53,0.17-1.17,0.26-1.9,0.26c-0.9,0-1.64-0.15-2.21-0.46c-0.57-0.31-1.01-0.77-1.32-1.37
		c-0.31-0.61-0.47-1.31-0.47-2.1c0-0.83,0.17-1.55,0.51-2.17c0.34-0.61,0.84-1.08,1.5-1.4c0.52-0.25,1.21-0.37,2.08-0.37
		c0.84,0,1.47,0.08,1.89,0.23c0.42,0.15,0.76,0.39,1.04,0.71c0.28,0.32,0.48,0.73,0.62,1.22l-2.27,0.4
		c-0.09-0.29-0.25-0.51-0.47-0.66c-0.22-0.15-0.51-0.23-0.85-0.23c-0.52,0-0.93,0.18-1.23,0.54c-0.31,0.36-0.46,0.92-0.46,1.7
		c0,0.82,0.15,1.41,0.46,1.76c0.31,0.35,0.74,0.53,1.29,0.53c0.26,0,0.51-0.04,0.75-0.11c0.24-0.08,0.51-0.21,0.82-0.39v-0.72
		H325.84z"
          />
        </g>
      </svg>
    )
  }
}
