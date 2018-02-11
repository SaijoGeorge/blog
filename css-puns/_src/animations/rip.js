import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const coffin = this.el.querySelector("#rip-coffin")
    const grave = this.el.querySelector("#rip-grave")
    const graveBg = this.el.querySelector("#rip-grave-bg")
    const graveAll = this.el.querySelector("#rip-grave-all")
    const gravestoneAll = this.el.querySelector("#rip-gravestone-all")
    const gravestone = this.el.querySelector("#rip-gravestone")
    const gravestoneBg = this.el.querySelector("#rip-gravestone-bg")
    const gravestoneBase = this.el.querySelector("#rip-gravestone-base")
    const gravestoneHole = this.el.querySelector("#rip-gravestone-hole")
    const gravestoneFrame = this.el.querySelector("#rip-gravestone-frame")
    const ripSign = this.el.querySelector("#rip-grave-sign")

    this.animation = new TimelineMax({ repeat: -1, repeatDelay: 1 })
      .fromTo(grave, 1, { opacity: 0 }, { opacity: 1 })
      .to(coffin, 2, { y: 100 })
      .to(grave, 1, { scale: 20, transformOrigin: "470 80" })
      .to(grave, 0, { opacity: 0 })
      .to(gravestoneAll, 1, { opacity: 1 }, "-=1")
      .to(gravestoneAll, 1, {
        scale: 0.15,
        y: -700,
        transformOrigin: "center"
      })
      .to(ripSign, 1, { opacity: 1, delay: 0.5 })
      .to([gravestoneFrame, gravestoneBase], 0.5, { opacity: 0 })
      .to(gravestoneHole, 0.5, { opacity: 0 }, "+=.4")
      .to(gravestone, 0.3, { opacity: 0 }, "+=.5")

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="rip-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#rip-clip)">
          <rect width="600" height="600" fill="#DCEDC8" />
          <g id="rip-grave-all">
            <path
              id="rip-grave-bg"
              d="M648.42 505.75c0 162.06-152.46 140.82-342.16 140.82s-344.8 21.24-344.8-140.82S115.22 257 304.92 257s343.5 86.69 343.5 248.75z"
              fill="#558B2F"
            />
            <g id="rip-grave">
              <polygon
                points="547.56,394.69 51.73,394.69 127.43,293.49 485.53,293.49"
                fill="#33691E"
              />
              <polygon
                points="532.95,368.8 493.74,307.16 493.74,217.81 506.46,206.43 520.22,215.64 532.95,245.71"
                fill="#BCAAA4"
              />
              <rect
                x="532.95"
                y="245.62"
                width="15.32"
                height="123.19"
                fill="#8D6E63"
              />
              <polygon
                points="506.46,206.43 520.22,215.64 532.95,245.62 548.27,245.62 533.22,215.64 518.32,206.43 506.46,206.43"
                fill="#A1887F"
              />
              <g id="rip-grave-hole">
                <polygon
                  points="149.32,307.16 109.65,368.8 505.6,368.8 466.39,307.16"
                  fill="#3E2723"
                />
                <polygon
                  points="109.65,368.8 149.32,307.16 149.56,368.8"
                  opacity=".5"
                />
                <polygon
                  points="466.39,307.16 505.6,368.8 466.39,368.8"
                  opacity=".5"
                />
              </g>
              <polygon
                points="477.81,302.03 515.64,368.8 526.59,368.8 485.99,300.19"
                fill="#F9A825"
              />
              <polygon
                points="139.72,302.03 100.52,368.8 88.21,368.8 131.53,300.19"
                fill="#F9A825"
              />
              <path
                d="M124.95 291.47v12.42c0 2.41 4.78 4.36 10.68 4.36 5.9 0 10.68-1.95 10.68-4.36v-12.42h-21.36z"
                fill="#F9A825"
              />
              <ellipse
                cx="135.63"
                cy="291.47"
                rx="10.68"
                ry="4.36"
                fill="#FBC02D"
              />
              <path
                d="M470.11 291.8v12.42c0 2.41 4.78 4.36 10.68 4.36 5.9 0 10.68-1.95 10.68-4.36V291.8h-21.36z"
                fill="#F9A825"
              />
              <ellipse
                cx="480.78"
                cy="291.8"
                rx="10.68"
                ry="4.36"
                fill="#FBC02D"
              />
              <rect
                x="144.3"
                y="296.16"
                width="325.8"
                height="8.06"
                fill="#F9A825"
              />
              <g id="rip-coffin">
                <polygon
                  points="481,357.74 481,304.34 381.59,318.29 136.66,302.42 136.66,355.82 381.59,378.53"
                  fill="#6D4C41"
                />
                <polygon
                  points="481,304.34 481,357.74 381.59,378.53 381.59,318.29"
                  fill="#5D4037"
                />
                <polygon
                  points="136.66,302.42 381.59,318.29 481,304.34 461.04,279.7 376.6,268.78 150.48,279.72"
                  fill="#996B5C"
                />
              </g>
              <rect
                x="100"
                y="365.12"
                width="420.26"
                height="199.77"
                fill="#558B2F"
              />
              <polygon
                points="524.87,394.58 96.55,394.7 96.55,364.18 524.87,364.06"
                fill="#33691E"
              />
              <rect
                x="107.39"
                y="361.81"
                width="400.5"
                height="10.62"
                fill="#F9A825"
              />
              <polygon
                points="520.22,215.64 533.22,215.64 548.27,245.62 532.95,245.62"
                fill="#A89088"
              />
              <path
                d="M83.46 355.63v16.36c0 3.17 5.86 5.75 13.09 5.75 7.23 0 13.09-2.57 13.09-5.75v-16.36H83.46z"
                fill="#F9A825"
              />
              <path
                d="M506.76 356.07v16.36c0 3.17 5.86 5.75 13.09 5.75 7.23 0 13.09-2.57 13.09-5.75v-16.36h-26.18z"
                fill="#F9A825"
              />
              <ellipse
                cx="96.55"
                cy="355.63"
                rx="13.09"
                ry="5.75"
                fill="#FBC02D"
              />
              <ellipse
                cx="519.86"
                cy="356.07"
                rx="13.09"
                ry="5.75"
                fill="#FBC02D"
              />
            </g>
          </g>
          <g id="rip-gravestone-all" opacity="0">
            <g id="rip-gravestone">
              <polygon
                points="582,-980.38 583.63,-901.16 15.37,-901.16 15,-980.38"
                fill="#A1887F"
              />
              <polygon
                points="582,-980.38 838.57,-671 838.57,-588.97 583.63,-901.16"
                fill="#8D6E63"
              />
              <polygon
                points="18,-980.38 -238.57,-671 -238.57,-588.97 16.37,-901.16"
                fill="#8D6E63"
              />
              <polygon
                points="838.57,-588.97 838.57,628.77 -238.57,628.77 -238.57,-588.97 16.5,-901.16 583.63,-901.16"
                fill="#BCAAA4"
              />
              <rect
                x="-89.08"
                y="-490.06"
                width="778.15"
                height="402.26"
                fill="none"
              />
              <text
                id="rip-grave-sign"
                transform="translate(-9.856 -196.314)"
                opacity="0"
                fill="#3E2723"
                fontFamily="Constantia"
                fontSize="399.11"
              >
                RIP
              </text>
            </g>
            <polygon
              id="rip-gravestone-base"
              points="1363.14,628.77 199.2,628.77 188.68,628.77 -763.14,628.77 -1024.38,3093 188.68,3093 199.2,3093 1624.38,3093"
              fill="#33691E"
            />
            <g id="rip-gravestone-hole">
              <polygon
                points="967.77,760.43 320.59,760.43 279.41,760.43 -367.77,760.43 -539.2,2903.29 279.77,2903.29 320.23,2903.29 1139.2,2903.29"
                fill="#3E2723"
              />
              <polygon
                points="967.77,760.43 795.54,1203.18 881.65,2903.29 1139.2,2903.29"
                opacity=".35"
              />
              <polygon
                points="-367.77,760.43 -195.54,1203.18 795.54,1203.18 967.77,760.43"
                opacity=".21"
              />
              <polygon
                points="-367.77,760.43 -195.54,1203.18 -281.65,2903.29 -539.2,2903.29"
                opacity=".35"
              />
              <polygon
                points="832.96,1391.95 566.7,2872 7.44,2872 -235.29,1391.95 45.37,1041.36 552.3,1041.36"
                fill="#4E342E"
              />
              <polygon
                points="-520.24,2726.88 1120.24,2726.88 1139.2,2903.29 -539.2,2903.29"
                opacity=".33"
              />
            </g>
            <g id="rip-gravestone-frame">
              <polygon
                points="1262.17,665.82 1490.12,2931 1309.55,2931 1139.2,665.82"
                fill="#F9A825"
              />
              <polygon
                points="-659.39,665.82 -887.35,2931 -706.77,2931 -536.42,665.82"
                fill="#F9A825"
              />
              <path
                d="M1231.65 2808.16v181.83c0 35.26 72.63 63.85 162.23 63.85s162.23-28.58 162.23-63.85v-181.83h-324.46z"
                fill="#F9A825"
              />
              <ellipse
                cx="1393.88"
                cy="2808.16"
                rx="162.23"
                ry="63.85"
                fill="#FBC02D"
              />
              <path
                d="M-938.45 2812.37v181.83c0 35.26 72.63 63.85 162.23 63.85s162.23-28.59 162.23-63.85v-181.83h-324.46z"
                fill="#F9A825"
              />
              <ellipse
                cx="-776.22"
                cy="2812.37"
                rx="162.23"
                ry="63.85"
                fill="#FBC02D"
              />
              <path
                d="M1069.76 561.58v134.38c0 26.06 53.68 47.18 119.9 47.18s119.9-21.13 119.9-47.18V561.58h-239.8z"
                fill="#F9A825"
              />
              <path
                d="M-711.88 585.17v134.38c0 26.06 53.68 47.18 119.9 47.18s119.9-21.13 119.9-47.18V585.17h-239.8z"
                fill="#F9A825"
              />
              <rect
                x="-591.99"
                y="616.24"
                width="1781.64"
                height="87.71"
                fill="#F9A825"
              />
              <rect
                x="-776.22"
                y="2876.21"
                width="2170.1"
                height="154.81"
                fill="#F9A825"
              />
              <ellipse
                cx="1189.66"
                cy="561.58"
                rx="119.9"
                ry="47.19"
                fill="#FBC02D"
              />
              <ellipse
                cx="-591.99"
                cy="585.17"
                rx="119.9"
                ry="47.19"
                fill="#FBC02D"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
