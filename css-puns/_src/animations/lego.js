import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const legos = this.el.querySelectorAll("#lego-legos g")

    this.animation = new TimelineMax({ repeat: -1 })
      .staggerFrom(legos, 1, { y: -500 }, 0.2)
      .staggerTo(legos, 0.5, { y: 500, delay: 2 }, 0.1)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="2 120.89 600 600">
        <path
          d="M602 421.8c0 165.7-134.3 300-300 300S2 587.5 2 421.8s134.3-300 300-300 300 134.3 300 300"
          fill="#FFCD03"
        />
        <path d="M591 421.8c0 159.6-129.4 289-289 289S13 581.4 13 421.8s129.4-289 289-289 289 129.4 289 289" />
        <path
          d="M578.5 421.8c0 152.7-123.8 276.5-276.5 276.5S25.5 574.5 25.5 421.8C25.5 269 149.3 145.3 302 145.3S578.5 269 578.5 421.8"
          fill="#FFF"
          stroke="#000"
        />
        <defs>
          <path d="M578.5 421.8c0 152.7-123.8 276.5-276.5 276.5S25.5 574.5 25.5 421.8C25.5 269 149.3 145.3 302 145.3S578.5 269 578.5 421.8" />
        </defs>
        <clipPath id="lego-legos-clip">
          <path d="M578.5 421.8c0 152.7-123.8 276.5-276.5 276.5S25.5 574.5 25.5 421.8C25.5 269 149.3 145.3 302 145.3S578.5 269 578.5 421.8" />
        </clipPath>
        <g id="lego-legos" clipPath="url(#lego-legos-clip)">
          <g id="lego-one">
            <path
              d="M203.5 500.3v-9.6h-15v9.6h-14v-9.6h-15v9.6h-14.7v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50H212v-50z"
              fill="#F57D20"
            />
            <path
              d="M352.8 500.3v-9.6h-15v9.6h-14v-9.6h-15v9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h118.6v-50zM501.2 500.3v-9.6h-15v9.6h-14v-9.6h-15l-.1 9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6H391v50h118.7v-50z"
              fill="#DD1A21"
            />
          </g>
          <g id="lego-two">
            <path
              d="M144.8 450.43v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#DD1A21"
            />
            <path
              d="M352.8 450.43v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#009247"
            />
            <path
              d="M501.2 450.43v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#F57D20"
            />
          </g>
          <g id="lego-three">
            <path
              d="M144.8 400.57v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#009247"
            />
            <path
              d="M352.8 400.57v-9.6h-15v9.6h-14v-9.6h-15v9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h118.6v-50z"
              fill="#006CB7"
            />
            <path
              d="M501.2 400.57v-9.6h-15v9.6h-14v-9.6h-15l-.1 9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6H391v50h118.7v-50z"
              fill="#DD1A21"
            />
          </g>
          <g id="lego-four">
            <path
              d="M144.8 350.7v-9.58h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#006CB7"
            />
            <path
              d="M294.2 350.7v-9.58h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h60v-50z"
              fill="#FFCD03"
            />
            <path
              d="M442.5 350.7v-9.58h-15v9.6h-14v-9.6h-15v9.6H391v50h60v-50z"
              fill="#009247"
            />
          </g>
          <g id="lego-five">
            <path
              d="M203.5 300.86v-9.6h-15v9.6h-14v-9.6h-15v9.6h-14.7v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50H212v-50z"
              fill="#FFCD03"
            />
            <path
              d="M352.8 300.86v-9.6h-15v9.6h-14v-9.6h-15v9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6h-7.5v50h118.6v-50z"
              fill="#009247"
            />
            <path
              d="M501.2 300.86v-9.6h-15v9.6h-14v-9.6h-15l-.1 9.6h-14.6v-9.6h-15v9.6h-14v-9.6h-15v9.6H391v50h118.7v-50z"
              fill="#FFCD03"
            />
          </g>
        </g>
      </svg>
    )
  }
}
