import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const boxBase = this.el.querySelector("#box-base")
    const boxDetails = this.el.querySelector("#box-details")
    const boxBuilding = this.el.querySelector("#box-building")
    const boxCardOne = this.el.querySelector("#box-card-one")
    const boxCardTwo = this.el.querySelector("#box-card-two")

    this.animation = new TimelineMax({ repeat: -1, repeatDelay: 1 })
      .to(boxCardOne, 1, { x: 25, y: 410, rotation: 10 })
      .to(boxCardTwo, 1, { x: -25, y: 410, rotation: -10 })
      .to([boxDetails, boxCardOne, boxCardTwo], 0.1, { opacity: 0 })
      .to(boxBase, 1, { morphSVG: { shape: boxBuilding, shapeIndex: 5 } })
      .to(boxBase, 1, { morphSVG: { shape: boxBase, shapeIndex: 5 }, delay: 1 })
      .to([boxDetails, boxCardOne, boxCardTwo], 0.2, { opacity: 1 })

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="government-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#government-clip)">
          <path
            d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
            fill="#AB47BC"
          />
          <path
            id="box-building"
            d="M220.75 407.78h-44.08l4.67-148.92h34.73l4.68 148.92zm158.29 0h44.08l-4.67-148.92h-34.73l-4.68 148.92zM299.9 144.92l-151.93 69.86v13.36h303.87v-13.36L299.9 144.92zm-19.76 113.94h-34.73l-4.67 148.92h44.08l-4.68-148.92zm34.84 148.92h44.08l-4.67-148.92h-34.73l-4.68 148.92zm140.19 43.41v-18.7H438.7l-.23-18.7H161.32l-.22 18.7h-16.47v18.7h-15.36v18.63h341.26v-18.63h-15.36z"
            opacity="0"
            fill="none"
          />
          <g id="box-card-one">
            <path fill="#F5F5F5" d="M212.21-170H327.8v158.17H212.21z" />
            <path
              fill="#F5F5F5"
              stroke="#212121"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M296.16-123.46h13.08v13.08h-13.08zM296.16-104.3h13.08v13.08h-13.08zM296.16-85.29h13.08v13.08h-13.08z"
            />
            <path
              fill="#424242"
              d="M227.72-119.74h62.05v5.33h-62.05zM227.72-100.42h62.05v5.33h-62.05zM227.72-81.41h62.05v5.33h-62.05z"
            />
            <path
              fill="none"
              stroke="#00838F"
              strokeWidth="3"
              strokeMiterlimit="10"
              d="M289.77-108.86l23.42 17.95M289.77-86.86l23.42-22"
            />
          </g>
          <g id="box-card-two">
            <path fill="#F5F5F5" d="M272.21-170H387.8v158.17H272.21z" />
            <path
              fill="#F5F5F5"
              stroke="#212121"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M356.16-123.46h13.08v13.08h-13.08zM356.16-104.3h13.08v13.08h-13.08zM356.16-85.29h13.08v13.08h-13.08z"
            />
            <path
              fill="#424242"
              d="M287.72-119.74h62.05v5.33h-62.05zM287.72-100.42h62.05v5.33h-62.05zM287.72-81.41h62.05v5.33h-62.05z"
            />
            <path
              fill="none"
              stroke="#00838F"
              strokeWidth="3"
              strokeMiterlimit="10"
              d="M349.77-108.86l23.42 17.95M349.77-86.86l23.42-22"
            />
          </g>
          <path
            id="box-base"
            fill="#F5F5F5"
            d="M162.91 216.87h273.96v252.95H162.91z"
          />
          <g id="box-details">
            <path
              d="M280.81 273.1v-37.67h38.37v37.67c0 10.6-8.59 19.19-19.19 19.19-10.59 0-19.18-8.59-19.18-19.19z"
              fill="#757575"
            />
            <path
              opacity=".16"
              fill="#212121"
              d="M162.91 228.14h273.96v25.53H162.91z"
            />
            <path fill="#FFF" d="M443.9 242.14H156.1V171h287.8z" />
            <ellipse
              cx="300"
              cy="277"
              rx="19.19"
              ry="18.25"
              fill="none"
              stroke="#373737"
              strokeWidth="7"
              strokeMiterlimit="10"
            />
            <path
              d="M289.9 275h20.19c8.53 0 14.8 8.01 12.76 16.29l-1.93 7.83c-2.38 9.62-11.01 16.38-20.92 16.38-9.91 0-18.54-6.76-20.92-16.38l-1.93-7.83c-2.05-8.28 4.22-16.29 12.75-16.29z"
              fill="#BDBDBD"
            />
            <path
              d="M299.25 246h1.5c2.62 0 4.75 2.13 4.75 4.75v16c0 2.62-2.13 4.75-4.75 4.75h-1.5c-2.62 0-4.75-2.13-4.75-4.75v-16c0-2.62 2.13-4.75 4.75-4.75z"
              fill="#616161"
            />
            <path
              d="M305.75 288.5c0-3.73-2.57-6.75-5.75-6.75s-5.75 3.02-5.75 6.75c0 2.14.85 4.04 2.17 5.28l-2.17 14.13h11.35l-2.16-14.02c1.4-1.23 2.31-3.18 2.31-5.39z"
              fill="#212121"
            />
          </g>
        </g>
      </svg>
    )
  }
}
