import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const leftDoor = this.el.querySelector("#delorean-door-left")
    const rightDoor = this.el.querySelector("#delorean-door-right")
    const leftWheel = this.el.querySelector("#delorean-wheel-left")
    const rightWheel = this.el.querySelector("#delorean-wheel-right")
    const delorean = this.el.querySelector("#delorean-delorean")

    this.animation = new TimelineMax({ repeat: -1 })
      .set(delorean, { scale: 0.7, transformOrigin: "center" })
      .from(delorean, 2, { opacity: 0 })
      .to(leftDoor, 2, { rotation: -68, transformOrigin: "158.5 131.5" })
      .to(rightDoor, 2, { rotation: 68, transformOrigin: "9 131,5" }, "-=2")
      .to(leftWheel, 1, { rotation: 90, transformOrigin: "center" })
      .to(rightWheel, 1, { rotation: -90, transformOrigin: "center" }, "-=1")
      .to(delorean, 0.3, {
        scale: 10,
        transformOrigin: "center",
        ease: Power2.easeIn
      })

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="delorean-clip">
          <path d="M600 300c0 165.686-134.314 300-300 300S0 465.686 0 300C0 134.315 134.314 0 300 0s300 134.315 300 300" />
        </clipPath>
        <g clipPath="url(#delorean-clip)">
          <path
            d="M600 300c0 165.686-134.314 300-300 300S0 465.686 0 300C0 134.315 134.314 0 300 0s300 134.315 300 300"
            fill="#0D47A1"
          />
          <g id="delorean-delorean">
            <path
              id="delorean-wheel-right"
              d="M468.055 365.342v50.706c0 4.098-3.322 7.42-7.42 7.42h-26.982c-4.098 0-7.42-3.32-7.42-7.42v-50.706c0-4.098 3.32-7.42 7.42-7.42h26.98c4.1 0 7.422 3.32 7.422 7.42z"
              fill="#212121"
            />
            <path
              id="delorean-wheel-left"
              d="M131.94 365.342v50.706c0 4.098 3.323 7.42 7.422 7.42h26.98c4.1 0 7.422-3.32 7.422-7.42v-50.706c0-4.098-3.322-7.42-7.42-7.42H139.36c-4.098 0-7.42 3.32-7.42 7.42z"
              fill="#212121"
            />
            <g id="delorean-door-right">
              <path
                fill="#424242"
                d="M330.742 221.614l13.324 6.91 9.623 5.92-4.442 1.234-8.598-5.176-12.87-6.164z"
              />
              <path
                d="M304.793 258.296l24.077-65.35c1.938-5.26 5.506-9.763 10.183-12.85l30.665-20.246c.17-.113.353-.207.543-.28l31.502-12.312c.274-.107.562-.172.855-.192l6.475-.452c16.353-1.14 32.734 1.794 47.674 8.54.124.057.245.122.36.195l11.4 7.227c1.73 1.097 1.81 3.592.155 4.8l-14.227 10.374c-.06.045-.122.086-.185.125l-23.575 14.56c-.92.57-2.08.58-3.01.026l-27.213-16.19c-.34-.2-.716-.33-1.107-.383l-14.112-1.85c-5.12-.673-10.323.265-14.887 2.68l-18.06 9.562c-4.17 2.207-7.627 5.554-9.968 9.65l-1.247 2.183c-.726 1.27-1.338 2.602-1.83 3.98l-20.78 58.18c-.412 1.157-1.506 1.928-2.734 1.928h-8.224c-2.023.003-3.426-2.01-2.727-3.904z"
                fill="#424242"
              />
              <path
                d="M471.027 165.664l-16.666 12.153-28.212-16.35c-2.837-1.644-6.11-2.38-9.377-2.11l-25.08 2.068c-3.843.317-7.61 1.242-11.16 2.742l-26.256 11.085c-1.127.476-2.205 1.06-3.22 1.744l-13.43 9.058c-.624.42-1.093 1.03-1.338 1.74l-25.9 75.15-7.033-.74 26.352-71.526c1.395-3.785 3.963-7.026 7.33-9.248l31.696-20.926c.828-.546 1.697-1.026 2.6-1.436l6.66-3.026 1.976-6.72 4.798-20.992c.615-2.69 3.334-4.335 6-3.633l6.065 1.596c1.892.498 3.305 2.08 3.587 4.017l2.125 14.57h28.542c1.93 0 3.844.35 5.65 1.027l15.752 5.917c1.244.467 2.425 1.087 3.516 1.845l15.005 10.42c.55.377.558 1.182.02 1.574z"
                fill="#BDBDBD"
              />
              <path
                d="M377.713 171.547l-.337 2.57 22.577 1.85 1.875-8.303c.367-1.625-.87-3.17-2.535-3.17h-10.286c-.837 0-1.667.16-2.445.47l-4.88 1.952c-2 .8-3.484 2.53-3.97 4.63z"
                fill="#4D4D4D"
              />
              <path
                d="M454.36 177.817l-7.84 4.84c-.32.198-.614.43-.88.694l-5.48 5.428c-1.208 1.197-2.69 2.08-4.32 2.573l-6.646 2.012-4.64-2.76 10.22-4.155c.347-.14.657-.357.91-.633l4.418-4.852c.933-1.024.856-2.612-.172-3.54l-.453-.41c-.68-.617-.864-1.614-.444-2.43l2.234-4.352 13.094 7.587z"
                fill="#757575"
              />
            </g>
            <g id="delorean-door-left">
              <path
                fill="#424242"
                d="M269.254 221.614l-13.324 6.91-9.623 5.92 4.442 1.234 8.597-5.176 12.868-6.164z"
              />
              <path
                d="M295.203 258.296l-24.077-65.35c-1.938-5.26-5.506-9.763-10.183-12.85l-30.665-20.246c-.17-.113-.353-.207-.543-.28l-31.5-12.312c-.275-.107-.563-.172-.856-.192l-7.13-.497c-15.923-1.112-31.875 1.746-46.423 8.316l-.596.27c-.123.055-.244.12-.36.193l-11.398 7.227c-1.73 1.097-1.81 3.592-.156 4.8l14.228 10.374c.06.045.122.086.185.125l23.574 14.56c.92.57 2.08.58 3.01.026l27.213-16.19c.34-.2.716-.33 1.107-.383l14.112-1.85c5.12-.673 10.324.265 14.888 2.68l18.06 9.562c4.17 2.207 7.627 5.554 9.968 9.65l1.247 2.183c.725 1.27 1.337 2.602 1.83 3.98l20.778 58.18c.413 1.157 1.507 1.928 2.735 1.928h8.224c2.022.003 3.425-2.01 2.726-3.904z"
                fill="#424242"
              />
              <path
                d="M128.97 165.664l16.665 12.153 28.213-16.35c2.837-1.644 6.11-2.38 9.377-2.11l25.082 2.068c3.842.317 7.61 1.242 11.16 2.742l26.255 11.085c1.127.476 2.205 1.06 3.22 1.744l13.43 9.058c.624.42 1.093 1.03 1.338 1.74l25.9 75.15 7.033-.74-26.352-71.526c-1.394-3.785-3.962-7.026-7.328-9.248l-31.697-20.926c-.827-.546-1.696-1.026-2.598-1.436l-6.66-3.026-1.977-6.72-4.798-20.992c-.615-2.69-3.334-4.335-6-3.633l-6.065 1.596c-1.893.498-3.306 2.08-3.588 4.017l-2.126 14.57H168.91c-1.93 0-3.844.35-5.65 1.027l-15.752 5.917c-1.244.467-2.425 1.087-3.516 1.845l-15.005 10.42c-.547.377-.556 1.182-.018 1.574z"
                fill="#BDBDBD"
              />
              <path
                d="M222.283 171.547l.336 2.57-22.578 1.85-1.875-8.303c-.367-1.625.87-3.17 2.535-3.17h10.286c.837 0 1.667.16 2.445.47l4.88 1.952c2.003.8 3.485 2.53 3.97 4.63z"
                fill="#4D4D4D"
              />
              <path
                d="M145.635 177.817l7.84 4.84c.32.198.615.43.88.694l5.48 5.428c1.21 1.197 2.692 2.08 4.32 2.573l6.647 2.012 4.64-2.76-10.22-4.155c-.347-.14-.657-.357-.91-.633l-4.418-4.852c-.933-1.024-.856-2.612.172-3.54l.453-.41c.68-.617.863-1.614.443-2.43l-2.234-4.352-13.095 7.587z"
                fill="#757575"
              />
            </g>
            <path
              d="M471.497 339.44l-3.51 19.845c-.2 1.155-.547 2.28-1.035 3.346l-8.52 18.75-1.392 6.397c-.303 1.406-.77 2.776-1.377 4.08l-1.08 2.323c-1.94 4.16-6.115 6.818-10.705 6.818H156.12c-4.588 0-8.763-2.657-10.703-6.818l-1.088-2.324c-.608-1.303-1.067-2.672-1.378-4.08l-1.392-6.395-8.52-18.75c-.48-1.065-.83-2.19-1.036-3.345l-3.5-19.846c-.4-2.274.22-4.605 1.694-6.374.896-1.08 1.488-2.384 1.717-3.768l2.694-16.707c.42-2.634 1.9-4.98 4.1-6.498l4.582-3.176c1.066-.74 2.013-1.62 2.82-2.628l8.335-10.422c1.525-1.902 3.264-3.62 5.196-5.108l13.376-10.34 53.858-39.87c2.043-1.51 4.515-2.324 7.054-2.324h132.132c2.54 0 5.01.814 7.054 2.324l53.852 39.87 13.383 10.34c1.925 1.488 3.672 3.205 5.196 5.108l8.334 10.422c.807 1.007 1.754 1.888 2.813 2.628l4.59 3.176c2.19 1.517 3.67 3.864 4.1 6.5l2.694 16.706c.223 1.384.815 2.687 1.718 3.768 1.477 1.77 2.1 4.1 1.7 6.373z"
              fill="#8A8A8A"
            />
            <path
              fill="#424242"
              d="M459.076 346.22l-.644 14.064-158.092 1.843h-.688l-158.09-1.843-.645-14.064z"
            />
            <path
              d="M426.232 280.34h-252.47l43.665-33.46c8.646-6.625 19.235-10.215 30.127-10.215H352.44c10.89 0 21.48 3.59 30.126 10.215l43.666 33.46z"
              fill="#EEE"
            />
            <path
              fill="#424242"
              d="M300 362.127l-.348.008v-.008zM379.042 316.396v15.974c0 1.31-1.066 2.376-2.376 2.376h-153.34c-1.31 0-2.375-1.066-2.375-2.376v-15.974c0-1.31 1.067-2.376 2.377-2.376h153.34c1.31 0 2.375 1.066 2.375 2.376z"
            />
            <path
              d="M468.218 339.025c-2.398 1.555-5.204 2.384-8.06 2.384H300.34v-4.072h154.538c2.124 0 3.672-2.006 3.13-4.057l-4.433-16.84c-.4-1.53-1.48-2.79-2.924-3.426l-.902-.4c-.66-.296-1.37-.444-2.095-.444H152.346c-.725 0-1.443.148-2.102.444l-.896.4c-1.45.637-2.524 1.895-2.924 3.427l-4.434 16.84c-.54 2.05 1.007 4.058 3.124 4.058h154.538v4.07H139.836c-2.857 0-5.655-.828-8.06-2.383-1.09-.703-.926-2.354.288-2.828l1.62-.637c1.29-.503 2.214-1.643 2.45-3.005l3.206-18.535 16.59-27.76c1.013-1.694 2.464-3.093 4.19-4.056l7.49-4.153c1.666-.924 3.546-1.413 5.448-1.413h253.878c1.91 0 3.783.49 5.448 1.414l7.49 4.154c1.733.962 3.177 2.36 4.19 4.057l16.59 27.76 3.213 18.535c.23 1.362 1.162 2.502 2.45 3.005l1.62.637c1.206.474 1.376 2.125.28 2.828z"
              fill="#E0E0E0"
            />
            <path fill="#E0E0E0" d="M299.652 337.337h.688v4.07h-.688z" />
            <path
              d="M453.865 337.337h-307.73c-3.538 0-6.048-3.45-4.96-6.81l4.67-14.427c.756-2.347 2.94-3.93 5.397-3.93H448.75c2.465 0 4.64 1.583 5.404 3.93l4.663 14.427c1.088 3.36-1.414 6.81-4.952 6.81z"
              fill="#212121"
            />
            <path
              d="M179.07 314.02h-27.636c-1.363 0-2.467 1.105-2.467 2.467v15.792c0 1.362 1.105 2.466 2.467 2.466h27.635c1.362 0 2.466-1.105 2.466-2.467v-15.793c0-1.363-1.104-2.467-2.467-2.467zM215.34 314.02h-27.634c-1.363 0-2.467 1.105-2.467 2.467v15.792c0 1.362 1.104 2.466 2.466 2.466h27.635c1.364 0 2.468-1.105 2.468-2.467v-15.793c0-1.363-1.105-2.467-2.467-2.467zM420.927 314.02h27.635c1.363 0 2.467 1.105 2.467 2.467v15.792c0 1.362-1.106 2.466-2.468 2.466h-27.635c-1.363 0-2.467-1.105-2.467-2.467v-15.793c0-1.363 1.104-2.467 2.467-2.467zM384.655 314.02h27.635c1.363 0 2.467 1.105 2.467 2.467v15.792c0 1.362-1.105 2.466-2.467 2.466h-27.635c-1.363 0-2.467-1.105-2.467-2.467v-15.793c0-1.363 1.105-2.467 2.467-2.467z"
              fill="#FFF"
            />
            <path
              fill="#212121"
              d="M468.055 341.408v11.66l-4.515 11.288H136.453l-4.515-11.29V341.41l9.252 2.96h317.612z"
            />
            <path fill="#424242" d="M300.34 362.127v.008l-.34-.008z" />
            <path
              fill="#F57C00"
              d="M395.142 348.44h31.09v9.254h-31.09zM173.764 348.44h31.09v9.254h-31.09z"
            />
            <path
              d="M445.108 382.12l3.33 11.845-12.975 1.747c-4.175.563-8.387.844-12.6.844H177.13c-4.213 0-8.425-.28-12.6-.844l-12.976-1.747 3.33-11.844-16.9-14.434 161.668.37h.688l161.667-.37-16.9 14.435z"
              fill="#424242"
            />
            <path
              fill="#212121"
              d="M413.648 374.35v17.394H186.345V374.35l113.307-.046h.688z"
            />
            <path
              d="M193.75 377.294v11.55c0 1.602-1.297 2.9-2.898 2.9H152.18s-1.81-6.838-3.215-8.675c-2.053-2.684-2.537-5.26-2.99-7.86-.076-.426.254-.816.688-.816h44.142c1.618-.025 2.944 1.28 2.944 2.9zM406.246 377.294v11.55c0 1.602 1.298 2.9 2.9 2.9h38.669s1.81-6.838 3.215-8.675c2.053-2.684 2.537-5.26 2.99-7.86.076-.426-.254-.816-.688-.816H409.19c-1.62-.025-2.944 1.28-2.944 2.9z"
              fill="#616161"
            />
            <path fill="#E0E0E0" d="M299.652 337.337h.688v4.07h-.688z" />
            <path fill="#FAFAFA" d="M288.497 321.422h23v7.032h-23z" />
          </g>
        </g>
      </svg>
    )
  }
}
