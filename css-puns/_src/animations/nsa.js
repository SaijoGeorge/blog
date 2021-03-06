import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const nsaCamera = this.el.querySelector("#nsa-camera")
    const nsaInside = this.el.querySelector("#nsa-inside")
    const nsaBg = this.el.querySelector("#nsa-bg")
    const nsaMonitors = this.el.querySelector("#nsa-monitors")
    const nsaMan = this.el.querySelector("#nsa-man")
    const screens = this.el.querySelectorAll(".nsa-screen")

    TweenMax.staggerTo(
      screens,
      0.1,
      { opacity: 0.9, repeat: -1, yoyo: true },
      0.05
    )

    TweenMax.set([nsaMan, nsaMonitors, nsaBg], { transformOrigin: "bottom" })

    this.animation = new TimelineMax({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5
    })
      .to(nsaCamera, 2, {
        scale: 1.5,
        transformOrigin: "377 262",
        ease: Power2.easeIn
      })
      .to(nsaCamera, 0.3, {
        scale: 30,
        transformOrigin: "377 262",
        ease: Power4.easeIn
      })
      .to(nsaCamera, 0, { opacity: 0 })
      .to(nsaMan, 4, { scale: 1.4, ease: Power4.easeOut }, "-=.6")
      .to(nsaMonitors, 4, { scale: 1.4, ease: Power4.easeOut }, "-=3.9")
      .to(nsaBg, 4, { scale: 1.4, ease: Power4.easeOut }, "-=3.9")

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="nsa-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#nsa-clip)">
          <g id="nsa-inside">
            <g id="nsa-bg">
              <rect
                x="-.27"
                y="-6.51"
                width="602.26"
                height="353.98"
                fill="#212121"
              />
              <rect
                x="40.72"
                y="129.28"
                width="519.51"
                height="218.2"
                fill="#333"
              />
              <polygon
                points="560.23,319.69 42.31,319.69 40.72,147.73 558.64,147.73"
                fill="#EAF6EB"
              />
              <rect
                className="nsa-screen"
                x="128.18"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#3E2723"
              />
              <rect
                className="nsa-screen"
                x="128.18"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#263238"
              />
              <rect
                className="nsa-screen"
                x="214.88"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#424242"
              />
              <rect
                className="nsa-screen"
                x="301.58"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#006064"
              />
              <rect
                className="nsa-screen"
                x="388.28"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#4FC3F7"
              />
              <rect
                className="nsa-screen"
                x="128.18"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#69F0AE"
              />
              <rect
                className="nsa-screen"
                x="41.48"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#E0E0E0"
              />
              <rect
                className="nsa-screen"
                x="41.48"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#006064"
              />
              <rect
                className="nsa-screen"
                x="41.48"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#004D40"
              />
              <rect
                className="nsa-screen"
                x="214.88"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#006064"
              />
              <rect
                className="nsa-screen"
                x="301.58"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#424242"
              />
              <rect
                className="nsa-screen"
                x="388.28"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#FFE0B2"
              />
              <rect
                className="nsa-screen"
                x="214.88"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#006064"
              />
              <rect
                className="nsa-screen"
                x="301.58"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#90A4AE"
              />
              <rect
                className="nsa-screen"
                x="388.28"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#424242"
              />
              <rect
                className="nsa-screen"
                x="474.98"
                y="207.7"
                width="85.25"
                height="57.08"
                fill="#424242"
              />
              <rect
                className="nsa-screen"
                x="474.98"
                y="266.22"
                width="85.25"
                height="51.3"
                fill="#006064"
              />
              <rect
                className="nsa-screen"
                x="474.98"
                y="149.18"
                width="85.25"
                height="57.08"
                fill="#006064"
              />
              <rect
                x="2.5"
                y="347.47"
                width="596.7"
                height="61.5"
                fill="#212121"
              />
              <rect
                x="-8.57"
                y="387.18"
                width="617.41"
                height="212.82"
                fill="#100F10"
              />
              <rect
                x="128.18"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="214.88"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="214.88"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="40.75"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="41.48"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="41.48"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="214.88"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="128.18"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="128.18"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="301.58"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="301.58"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="301.58"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="388.28"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="388.28"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="388.28"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="474.98"
                y="199.12"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="474.98"
                y="257.6"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="474.98"
                y="310.38"
                width="85.25"
                height="7.14"
                fill="#212121"
              />
              <rect
                x="135.4"
                y="200.8"
                width="35.4"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="176.22"
                y="200.8"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="180.8"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="227.16"
                y="259.36"
                width="35.4"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="267.98"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="316.39"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="274.24"
                y="200.92"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="331.56"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="344.2"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="147.13"
                y="312.15"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="162.3"
                y="312.15"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="174.95"
                y="312.15"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="490.27"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="505.44"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="518.09"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="496.95"
                y="200.88"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="512.13"
                y="200.88"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="524.77"
                y="200.88"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="316.39"
                y="312.15"
                width="35.4"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="357.21"
                y="312.15"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="78.69"
                y="200.8"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="92.29"
                y="259.36"
                width="10.84"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="395.14"
                y="200.8"
                width="35.4"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="404.89"
                y="259.36"
                width="24.2"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="438.85"
                y="200.88"
                width="16.26"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="227.52"
                y="200.84"
                width="22.82"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="255.7"
                y="200.92"
                width="10.48"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="435.78"
                y="259.36"
                width="22.34"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="314.82"
                y="200.88"
                width="24.2"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="345.71"
                y="200.88"
                width="22.34"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="402.49"
                y="312.15"
                width="18.3"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="433.37"
                y="312.15"
                width="22.34"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="490.27"
                y="312.15"
                width="24.2"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="521.16"
                y="312.15"
                width="22.34"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="227.16"
                y="312.15"
                width="24.2"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="83.38"
                y="312.15"
                width="22.34"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="137.57"
                y="259.36"
                width="19.12"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="159.81"
                y="259.36"
                width="17.65"
                height="3.61"
                fill="#FFF"
              />
              <rect
                x="40.72"
                y="147.73"
                width="519.51"
                height="231.53"
                opacity=".16"
                fill="#B2DFDB"
              />
            </g>
            <g id="nsa-monitors">
              <path
                d="M189.54 357.88H60.23c-3.37 0-5.9 3.07-5.26 6.38L72.9 456.5c.49 2.52 2.69 4.33 5.26 4.33h129.31c3.37 0 5.9-3.07 5.26-6.38l-17.93-92.24c-.49-2.51-2.69-4.33-5.26-4.33z"
                fill="#212121"
              />
              <polygon
                points="180.38,370.89 71.84,370.89 86.35,445.55 194.9,445.55"
                fill="#A5D6A7"
              />
              <path
                d="M410.01 359.03h129.31c3.37 0 5.9 3.07 5.26 6.38l-17.93 92.24c-.49 2.52-2.69 4.33-5.26 4.33H392.08c-3.37 0-5.9-3.07-5.26-6.38l17.93-92.24c.5-2.52 2.7-4.33 5.26-4.33z"
                fill="#212121"
              />
              <polygon
                points="419.17,372.03 527.71,372.03 513.2,446.69 404.66,446.69"
                fill="#80DEEA"
              />
              <polygon
                points="461.51,443.88 410.09,443.88 411.53,438.82 462.95,438.82"
                fill="#FFF"
              />
              <polygon
                points="505.35,443.88 465.71,443.88 466.82,438.82 506.47,438.82"
                fill="#FFF"
              />
            </g>
            <path
              id="nsa-man"
              d="M427.51 483.42h-14.76c-3.77-6.5-8.67-12.33-14.53-17.21-4.52-3.76-9.51-6.89-14.83-9.28-5.32-2.39-10.96-4.07-16.78-4.96l-11.24-1.29c-12.74-1.47-22.77-11.55-24.19-24.3-.46-4.08-.83-8.25-1.58-12.47-.46-2.57.27-5.19 1.9-7.23.01-.01.02-.02.03-.04l3.3-4.18c4.38-5.54 7.2-12.15 8.17-19.14l.48-3.53h2.46c2.28 0 4.29-1.47 4.99-3.64l3.89-12.22 3.42-10.23c.18-.54.27-1.11.27-1.65 0-1.33-.51-2.63-1.45-3.63-1.96-2.04-5.18-2.17-7.28-.27l-2.2 1.97c.31-2.54.36-5.1.17-7.64.48-3.24.56-6.54.2-9.82l-.85-7.77-1.08-5.71c-.74-3.92-1.41-4-.82-7.94.04-.33.29-.75.66-1.24 2.36-3.09 4.24-6.5 5.66-10.09 1.42-3.6 2.39-7.39 2.91-11.24.46-3.36-2.69-6.08-5.95-5.15l-7.63 2.17c-5.12 1.47-10.38 2.34-15.7 2.61-10.79.56-29.71.1-33.33 1.55l-23.37 5.04c-4.5 1.48-8.38 4.57-10.55 8.78-3.03 5.88-1.62 11.29-4.14 19.56l-1.28 4.22c-2.15 7.06-2.23 14.59-.22 21.7l.24.85c.01.17.04.34.06.51l-2.61-2.34c-2.11-1.89-5.33-1.76-7.28.27-.95 1-1.45 2.3-1.45 3.63 0 .56.09 1.11.27 1.65l3.42 10.23 3.89 12.22c.69 2.17 2.71 3.65 4.99 3.65h2.82l.48 3.53c.48 3.5 1.43 6.89 2.81 10.11 1.37 3.22 3.17 6.26 5.36 9.02 3.16 3.95 4.57 9.03 3.87 14.04-.64 4.6-1 9.13-1.62 13.55-1.51 10.8-10.17 19.2-21.01 20.43l-13.02 1.48c-11.63 1.78-22.56 6.71-31.6 14.25-5.81 4.83-10.67 10.61-14.43 17.04-.03.06-.06.11-.09.17h-14.77c-9.42 0-17.05 7.63-17.05 17.05v96.07h288.98v-96.07c.04-9.44-7.59-17.07-17.01-17.07z"
            />
          </g>
          <g id="nsa-camera">
            <rect
              x="-126.07"
              y="-35.86"
              width="726.07"
              height="727.23"
              fill="#006064"
            />
            <rect
              x="352.08"
              y="273.48"
              width="12.44"
              height="18.61"
              fill="#212121"
            />
            <polygon
              points="565.34,317.8 582.67,310.71 600,310.71 600,409.08 582.67,409.08 565.34,401.1"
              fill="#212121"
            />
            <rect
              x="582.67"
              y="310.71"
              width="17.33"
              height="98.37"
              fill="#424242"
            />
            <polygon
              points="571.56,348.82 368.96,292.1 368.96,316.02 571.56,375.4"
              fill="#424242"
            />
            <path
              d="M340.53 285.89h37.32l4.44 34.04-18.02 1.37c-12.81.98-23.74-9.13-23.74-21.94v-13.47z"
              fill="#424242"
            />
            <path
              d="M353.85 280.57h10.66c7.36 0 13.33-5.95 13.33-13.29v-45.2l-37.32 21.27v23.93c.01 7.34 5.97 13.29 13.33 13.29z"
              fill="#424242"
            />
            <polygon
              points="140.88,186.63 209.6,269.94 411.61,172.45 391.47,100.37"
              fill="#0F0F0F"
            />
            <polygon
              points="191.24,178.36 209.6,269.94 307.35,277.03 291.95,185.15"
              fill="#212121"
            />
            <path
              d="M209.58 201.52l7.46 45.07c.99 5.96 5.94 10.48 11.99 10.91l59.03 4.27c8.43.61 15.22-6.77 13.9-15.09l-7.18-45.07c-.96-6-5.93-10.55-12.01-10.99l-59.3-4.26c-8.47-.62-15.27 6.82-13.89 15.16z"
              fill="#2C2C2C"
            />
            <polygon
              points="190.65,176 197.56,210.48 295.82,217.28 292.86,177.42"
              opacity=".59"
            />
            <polygon
              points="140.88,186.63 197.56,210.48 190.65,176"
              opacity=".59"
            />
            <polygon
              points="261.14,194.9 307.35,277.03 459.6,176 459.6,100.37"
              fill="#878787"
            />
            <polygon
              points="140.88,186.63 261.14,194.9 459.6,100.37 391.47,100.37"
              fill="#757575"
            />
            <path
              d="M273.91 228c-.64 7.29-10.54 12.38-22.12 11.37-11.58-1.01-20.44-7.74-19.8-15.03.64-7.29 10.54-12.38 22.12-11.37s20.44 7.74 19.8 15.03z"
              fill="#FFF"
            />
            <path
              d="M263.99 228.74c-.55 6.22-6.04 10.82-12.28 10.28-6.24-.54-10.85-6.03-10.31-12.25.55-6.22 6.04-10.82 12.28-10.28 6.24.54 10.85 6.03 10.31 12.25z"
              fill="#0D0D0D"
            />
            <path
              d="M255.53 212.26l-4.35-.38c-6.89-.6-13.71 1.73-18.79 6.41l-5.16 4.76c-1.4 1.29-1.58 3.42-.43 4.93l4.26 5.58c4.18 5.49 10.5 8.96 17.39 9.56l4.35.38c5.71.5 11.41-1.01 16.12-4.27l9.27-6.42c1.9-1.31 2.13-4.02.49-5.64l-8.01-7.92c-4.08-4.02-9.43-6.49-15.14-6.99zm-4.14 24.34c-4.65-.41-9.07-2.2-12.69-5.15l-4.94-4.03c-.87-.71-.75-2.07.23-2.61l5.57-3.11c4.07-2.28 8.74-3.28 13.39-2.87 4.08.36 7.99 1.78 11.34 4.13l7.24 5.07c1 .7.87 2.22-.24 2.74l-8.01 3.74c-3.71 1.72-7.81 2.44-11.89 2.09z"
              fill="#231F20"
            />
          </g>
        </g>
      </svg>
    )
  }
}
