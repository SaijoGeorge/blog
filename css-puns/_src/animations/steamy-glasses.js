import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const rects = this.el.querySelectorAll(".steam-clip-rect")
    const circles = this.el.querySelectorAll(".steam-circles")

    this.animation = new TimelineMax({ repeat: -1, repeatDelay: 1 })
      .to(rects, 1, { x: 200 })
      .to(rects, 0, { x: 0 })
      .to(circles, 0, { opacity: 0 })
      .to(circles, 1, { opacity: 0.6 })

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <defs>
          <g id="steamy-bg">
            <clipPath id="steamy-clip">
              <path d="M600 300c0 165.7-134.3 300-300 300S0 465.7 0 300 134.3 0 300 0s300 134.3 300 300" />
            </clipPath>
            <g id="steamy-sauna" clipPath="url(#steamy-clip)">
              <path fill="#A63A00" d="M-38.5-52h677v661.1h-677z" />
              <path fill="#E65100" d="M111.5 87.3h377v340h-377z" />
              <path fill="#7A2B00" d="M210.5 410h179l30 190h-239z" />
              <path fill="#E6641E" d="M173.5 358h49l-61 242h-107z" />
              <path
                fill="#A63A00"
                d="M217.2 419v-39.9L161.5 600H182zM173.5 358v-58l-176 276v44h57z"
              />
              <path
                fill="#C74500"
                d="M59.5-52l65.6 138v194.6L-38.5 495.3V-52z"
              />
              <path fill="#E6641E" d="M426.5 358h-49l61 242h107z" />
              <path
                fill="#A63A00"
                d="M382.8 419v-39.9L438.5 600H418zM426.5 358v-58l176 276v44h-57z"
              />
              <path
                fill="#E6641E"
                d="M700.5 576h-98l-176-276h-253l-176 276h-98l225.6-295.4H478z"
              />
              <path
                fill="#C74500"
                d="M540.5-52L478 86v194.6l160.5 214.7V-52z"
              />
              <path fill="#F25E0C" d="M59.5-47h481L478 91H125.1z" />
              <path fill="#E6641E" d="M222.5 358h155l5.3 21.1H217.2z" />
              <path
                fill="#BF4300"
                d="M217.2 379.1h165.6V419H217.2zM173.5 300h253v58h-253z"
              />
              <path fill="#5D4037" d="M353.5 428.4h-107l10-63.3h87z" />
              <path
                fill="#3E2723"
                d="M246.5 428.4h107v91.3h-107zM333.8 409.7c0-.2.1-.5.1-.8 0-.3 0-.5-.1-.8 1.3-.8 2.1-2.3 2.1-3.9s-.8-3.1-2.1-3.9c0-.2.1-.5.1-.8 0-1.2-.4-2.3-1.2-3.1.7-.8 1.2-1.9 1.2-3.1 0-.9-.2-1.7-.6-2.3.4-.7.6-1.5.6-2.3 0-1.5-.7-2.8-1.7-3.6-.2-.9-.7-1.7-1.3-2.3.9-.8 1.5-2.1 1.5-3.4 0-1.2-.5-2.4-1.3-3.2.2-.5.2-1 .2-1.5 0-2-1.2-3.6-2.9-4.3v-.3h-2.2c-.8-1.5-2.3-2.5-4.1-2.5-.4 0-.7 0-1 .1-.5.1-1 .3-1.4.6l-.3-.6c-.8-1.3-2.3-2.2-4-2.2-1.8 0-3.3 1-4.1 2.4-1 .3-1.8 1-2.4 1.8.1.1.2.3.3.4h-.5c.1-.1.2-.3.2-.4-.8-1.2-2.3-2.1-3.9-2.1-.8 0-1.6.2-2.2.6-.8-.6-1.7-.9-2.7-.9-.6 0-1.2.1-1.7.3-.8-1.3-2.3-2.2-3.9-2.2-1.9 0-3.5 1.1-4.2 2.8-.8-.6-1.7-.9-2.8-.9-.3 0-.6 0-.9.1-.8-1.2-2.2-1.9-3.8-1.9-1.8 0-3.4 1-4.2 2.6-.6-.3-1.2-.4-1.9-.4-1.8 0-3.3 1-4.1 2.5h-.3l-.1 1c-.1.4-.2.8-.2 1.2v.2c-1.9.6-3.2 2.4-3.2 4.4 0 1 .3 1.9.9 2.7-.4.7-.6 1.5-.6 2.3 0 1 .3 1.9.8 2.7-1.5.8-2.5 2.3-2.5 4.1 0 .9.2 1.7.6 2.3.1.2.2.3.3.4-.5.7-.8 1.5-.9 2.3v.4c0 1.3.5 2.4 1.3 3.2l-.1.6c-2.5.1-4.5 2.1-4.5 4.7 0 1.6.8 3 2.1 3.9 0 .3-.1.5-.1.8 0 .3 0 .7.1 1-1.1.8-1.8 2.2-1.8 3.7v.1c-.2.5-.2 1-.2 1.5 0 1.6.8 2.9 1.9 3.8l-.1 1.1h1.8c.7 1.7 2.4 2.9 4.3 2.9 1.5 0 2.9-.7 3.7-1.9.7.5 1.6.8 2.5.8 1.5 0 2.8-.7 3.7-1.8h1.7c.8 1.1 2.2 1.8 3.7 1.8 1.4 0 2.7-.6 3.5-1.6l-.2-.2h.3c0 .1-.1.1-.2.2.8 1 2.1 1.6 3.5 1.6 1.5 0 2.8-.7 3.7-1.8h2c.9 1.1 2.2 1.8 3.7 1.8 1.4 0 2.6-.6 3.5-1.6l-.2-.2h.4c0 .1-.1.1-.2.2.8 1 2.1 1.6 3.5 1.6 1.5 0 2.8-.7 3.7-1.8h2c.8 1.1 2.2 1.8 3.7 1.8.5 0 .9-.1 1.4-.2.8.8 2 1.3 3.3 1.3 1.2 0 2.2-.4 3-1.1h.1c1.5 0 2.8-.7 3.7-1.8h3.4l-.2-1.5c.8-.8 1.4-2 1.4-3.3-.3-1.8-1.1-3.3-2.4-4.1zm-62.9-28.9c-.1 0-.1 0 0 0 0-.3 0-.5.1-.7l-.1.7zm12.1-10.7h-.4c-.6 0-1.2.1-1.8.3 0-.1-.1-.2-.2-.3h2.4c.1 0 .1 0 0 0zm46 4.8c.1 0 .2 0 .2.1 0 .3 0 .5-.1.8v-.1l-.3-.9c0 .1.1.1.2.1zm-4.9 1.5c.4-.5.9-.9 1.4-1.2-.4.5-.9.9-1.4 1.2zm.5-6.4h-.5.5zm-.6 48.4h-.4c.1-.1.1-.2.2-.3-.3-.4-.5-.8-.6-1.3.3.3.6.5.9.8-.1.2-.2.3-.3.5 0 .2.1.3.2.3zm5.1-.6c0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0zm-.3-38.9c.3-.6.4-1.3.4-2v-.1l.2 1.6c-.2.2-.4.3-.6.5z"
              />
              <path
                fill="#E68551"
                d="M125.1 287.7h42.2L156 311h-40l3.7-23.3z"
              />
              <path fill="#A63A00" d="M167.3 295L156 311l11.3-23.3z" />
              <path
                fill="#E68551"
                d="M478.1 288.3h-42.3l11.4 23.4h40l-3.7-23.4z"
              />
              <path
                fill="#A63A00"
                d="M435.8 295.7l11.4 16-11.4-23.4zM111.7 466.1h77.2l-8.7 40.4c-1.4 5.9-15.6 15-29.9 15-14.6 0-29.2-9.3-29.9-15.2l-8.7-40.2z"
              />
              <ellipse cx="150.3" cy="466.1" rx="38.6" ry="18" fill="#E6834E" />
              <path fill="#A63A00" d="M142.1 453.9l-3.9-28.5h19.2l-2.6 28.6z" />
              <ellipse
                cx="150.3"
                cy="464.8"
                rx="30.2"
                ry="12.6"
                fill="#A63A00"
              />
              <path
                d="M180.3 466.1c0 5.8-13.6 11.3-30 11.3s-29.5-5.5-29.5-11.3c0-4.1 13.3-10.5 29.8-10.5s29.7 6.3 29.7 10.5z"
                fill="#803F1B"
              />
              <path fill="#E6834E" d="M138.2 425.4l3-2.3h12.9l3.3 2.3z" />
              <path fill="#A63A00" d="M171.8 464.8l20.6-44.7h7.9l-22.5 44.7z" />
              <path
                fill="#E6834E"
                d="M189.5 416.9h7.9l2.9 3.2h-7.9zM169 461.6l2.8 3.2 20.6-44.7-2.9-3.2z"
              />
              <path
                d="M338.8 217.8c.7-26.7-82.9-30.4-53.8 49.7 7.4 20.2 36.3 29.6 17.2 71.6 0 0 17.8-38.2 16.8-48.7-2.4-23.3-27.3-27-26.3-52.6 1.9-45.8 45.9-29.3 46.1-20zM263.8 219.6s5.9-33.5 2-43.1c-3.6-8.8-8.6-10.7-18.4-12.1-9.8-1.4-14.7-9.4-13.8-14.1 2.8-13.7 24.9-8.8 24.9-8.8s-5.8-11.3-22.2-4.9c-9.2 3.6-13.8 12.6-13.7 17.1.1 6.9 3.5 15.8 10.8 20.2 4.8 3 18.9 3.8 22.8 7.8 6.9 7 7.6 37.9 7.6 37.9zM290.2 146.2c-.8-7.9 1.9-18.2 9.4-24.9 3.8-3.4 8.3-7.1 12.7-10.8 4.2-3.5 8.2-11.2 8.5-16.9.8-13.8-19.3-16.6-19.3-16.6s23.4-7.8 27.6 10c1.1 4.8-.1 12.7-1.2 17.6-1 4.7-6 10.4-9.3 13.8-3 3.1-14.8 9.4-17.6 12.7-6.8 8-9.3 38-9.3 38"
                opacity=".39"
                fill="#FFF"
              />
            </g>
          </g>
          <filter id="steamy-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <clipPath id="steamy-steam">
            <circle
              id="steam-left"
              cx="150"
              cy="291.7"
              r="102.5"
              opacity=".6"
              fill="#FFF"
            />
            <circle
              id="steam-right"
              cx="450"
              cy="291.7"
              r="102.5"
              opacity=".6"
              fill="#FFF"
            />
          </clipPath>
          <clipPath id="steam-left-clip">
            <rect
              className="steam-clip-rect"
              x="50"
              y="191.7"
              width="200"
              height="200"
              opacity=".6"
              fill="black"
            />
          </clipPath>
          <clipPath id="steam-right-clip">
            <rect
              className="steam-clip-rect"
              x="350"
              y="191.7"
              width="200"
              height="200"
              opacity=".6"
              fill="black"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#steamy-clip)">
          <use xlinkHref="#steamy-bg" filter="url(#steamy-blur)" />
          <use xlinkHref="#steamy-bg" clipPath="url(#steamy-steam)" />
          <circle
            cx="150"
            cy="291.7"
            r="102.5"
            fill="none"
            stroke="#FFF"
            strokeWidth="20"
            strokeMiterlimit="10"
          />
          <circle
            cx="450"
            cy="291.7"
            r="102.5"
            fill="none"
            stroke="#FFF"
            strokeWidth="20"
            strokeMiterlimit="10"
          />
          <path
            d="M252.5 287.2c0-23.8 95-23.8 95 0"
            fill="none"
            stroke="#FFF"
            strokeWidth="20"
            strokeMiterlimit="10"
          />
          <circle
            className="steam-circles"
            id="steam-left"
            clipPath="url(#steam-left-clip)"
            cx="150"
            cy="291.7"
            r="102.5"
            opacity=".6"
            fill="#FFF"
          />
          <circle
            className="steam-circles"
            id="steam-right"
            clipPath="url(#steam-right-clip)"
            cx="450"
            cy="291.7"
            r="102.5"
            opacity=".6"
            fill="#FFF"
          />
        </g>
      </svg>
    )
  }
}
