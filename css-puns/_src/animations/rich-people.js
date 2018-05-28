import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const chart = this.el.querySelector("#rich-people-chart")
    const chartLength = 2 * Math.PI * chart.getAttribute("r")

    TweenMax.set(chart, {
      strokeDasharray: `${chartLength * 0.01} ${chartLength}`,
      rotation: -90,
      y: 150
    })

    this.animation = TweenMax.from(chart, 3, {
      strokeDasharray: `${chartLength} ${chartLength}`,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeOut,
      repeatDelay: 1
    })

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
          fill="#A5D6A7"
        />
        <path
          d="M370.07 467.03c10.04 0 18.25 8.21 18.25 18.25s-8.21 18.25-18.25 18.25-18.25-8.21-18.25-18.25 8.22-18.25 18.25-18.25m0 45.62c20.07 0 36.5 8.21 36.5 18.25v9.13h-73v-9.13c0-10.04 16.43-18.25 36.5-18.25z"
          fill="#43A047"
        />
        <circle cx="300" cy="300" r="150" fill="#43A047" />
        <circle
          id="rich-people-chart"
          cx="300"
          cy="300"
          r="75"
          fill="none"
          stroke="#1B5E20"
          strokeWidth="150"
          strokeMiterlimit="10"
        />
        <g fill="#1B5E20">
          <path d="M348.85 110.17c-3.74.34-7.47-.84-10.32-3.29l-4.28-3.66c-.07-.06-.14-.12-.22-.18-1.26-.98-2.91-1.35-4.49-1.1l-4.25.67c-1.68.27-3.39.27-5.07 0l-4.25-.67c-1.58-.25-3.22.12-4.49 1.1-.07.06-.15.12-.22.18l-4.28 3.66c-2.86 2.44-6.58 3.63-10.32 3.29l-3.76-.34 2.72 3.44c2.64 3.34 6.67 5.29 10.93 5.29 2.88 0 5.69-.89 8.04-2.55l5.57-3.94c1.63-1.15 2.6-3.02 2.6-5.01 0 1.99.97 3.86 2.6 5.01l5.57 3.94c2.35 1.66 5.16 2.55 8.04 2.55 4.26 0 8.28-1.95 10.93-5.29l2.72-3.44-3.77.34z" />
          <path d="M302.16 90.66c-8.66 0-15.71-7.05-15.71-15.71s7.05-15.71 15.71-15.71 15.71 7.05 15.71 15.71-7.05 15.71-15.71 15.71zm0-26.95c-6.19 0-11.23 5.04-11.23 11.23s5.04 11.23 11.23 11.23 11.23-5.04 11.23-11.23-5.04-11.23-11.23-11.23z" />
          <path d="M282.16 136.55c-1.37 0-2.48-.59-2.48-1.33V91.38c0-.73 1.11-1.33 2.48-1.33 1.37 0 2.48.59 2.48 1.33v43.85c0 .73-1.11 1.32-2.48 1.32z" />
          <path d="M282.16 80.38c-1.37 0-2.48-.98-2.48-2.19v-3.21c0-1.21 1.11-2.19 2.48-2.19 1.37 0 2.48.98 2.48 2.19v3.21c0 1.22-1.11 2.19-2.48 2.19z" />
          <path d="M339.17 82.87c-3.85 0-7.66-1.56-11.17-4.67l-.11-.11-.33-.37c-.55-.61-.57-1.63-.05-2.27l.01-.01c.53-.64 1.4-.67 1.95-.06l.21.23.15.15c5.96 5.21 12.68 5.2 18.94-.01.06-.05.12-.11.17-.17l.18-.2c.55-.61 1.43-.59 1.95.06.53.65.5 1.67-.05 2.28l-.38.42c-.05.05-.1.11-.16.15-3.65 3.06-7.5 4.58-11.31 4.58z" />
          <circle cx="282.16" cy="84.9" r="2.48" />
        </g>
      </svg>
    )
  }
}