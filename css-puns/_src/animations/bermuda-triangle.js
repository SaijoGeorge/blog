import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const waves = this.el.querySelector("#bermuda-triangle-waves")
    const ship = this.el.querySelector("#bermuda-triangle-ship")
    const airplane01 = this.el.querySelector("#bermuda-triangle-airplane-01")
    const airplane02 = this.el.querySelector("#bermuda-triangle-airplane-02")
    const triangles = this.el.querySelectorAll(".bermuda-triangle-triangle")

    TweenMax.set(triangles[0], { transformOrigin: "224 212" })
    TweenMax.set(triangles[1], { transformOrigin: "160 162" })
    TweenMax.set(triangles[2], { transformOrigin: "83 97" })

    this.animation = new TimelineMax()
    this.animation.paused(!this.props.isActive)

    this.animation.to(
      ship,
      5,
      {
        transformOrigin: "center",
        rotation: 360,
        scale: 0.3,
        opacity: 0,
        x: 180,
        y: -100,
        repeat: -1,
        ease: Power2.easeIn,
        yoyo: true
      },
      0
    )

    this.animation.to(
      airplane01,
      5,
      {
        transformOrigin: "center",
        rotation: 360,
        scale: 0.3,
        opacity: 0,
        y: 140,
        repeat: -1,
        ease: Power2.easeIn,
        yoyo: true
      },
      0
    )

    this.animation.to(
      airplane02,
      5,
      {
        transformOrigin: "center",
        rotation: 360,
        scale: 0.3,
        opacity: 0,
        x: -140,
        y: -140,
        repeat: -1,
        ease: Power2.easeIn,
        yoyo: true
      },
      0
    )

    this.animation.fromTo(
      waves,
      3,
      {
        opacity: 0.4,
        transformOrigin: "center"
      },
      {
        rotation: 5,
        opacity: 1,
        repeat: -1,
        ease: Power2.easeInOut,
        yoyo: true
      },
      0
    )

    this.animation.staggerTo(
      triangles,
      7,
      {
        rotation: 122,
        repeat: -1,
        ease: Back.easeInOut,
        yoyo: true
      },
      -0.3,
      0
    )
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 672.2 672.2">
        <circle cx="336.1" cy="336.1" r="336.1" fill="#00CFF7" />
        <path
          className="bermuda-triangle-triangle"
          fill="#00BCE0"
          d="M125.3 385.5l299.2-260.4c2.9-2.6 7.6-1 8.3 2.9l75.9 389.3c.7 3.8-2.9 7-6.6 5.8L127 394.1c-3.7-1.3-4.6-6.1-1.7-8.6z"
        />
        <path
          className="bermuda-triangle-triangle"
          fill="#0092AD"
          d="M188.9 395.7l193-219.9c2.6-2.9 7.4-2 8.6 1.7l93.9 277.1c1.3 3.7-2 7.4-5.8 6.6l-287-57.2c-3.7-.7-5.3-5.4-2.7-8.3z"
        />
        <path
          className="bermuda-triangle-triangle"
          fill="#006375"
          d="M265.1 399.4l74.4-157.1c1.7-3.5 6.5-3.9 8.7-.7l98.8 143c2.2 3.2.1 7.6-3.8 7.9l-173.3 14.1c-3.7.4-6.4-3.7-4.8-7.2z"
        />
        <path
          id="bermuda-triangle-airplane-01"
          fill="#FFF"
          d="M433.6 116.6l-36.5 35.9 26.4 89.4c.8 2.6 0 5.4-1.9 7.3l-7.4 7.3c-1 1-2.6.7-3.2-.5l-41.8-76.1-38.4 37.8 4.8 16.2c.4 1.4 0 3-1.1 4l-5.2 5.1c-.6.6-1.6.4-2-.3L315 220.4c-1.1-2-2.8-3.7-4.8-4.9l-22.1-12.6c-.7-.4-.8-1.4-.3-2l5.2-5.1c1.1-1 2.6-1.4 4-1l16.1 5.1 38.4-37.8-75.4-43c-1.2-.7-1.4-2.3-.4-3.2l7.4-7.3c1.9-1.9 4.8-2.6 7.3-1.8l88.9 27.9 36.5-36c4.9-4.8 12.8-4.8 17.6.2 5.2 4.9 5.1 12.8.2 17.7z"
        />
        <path
          id="bermuda-triangle-waves"
          fill="none"
          stroke="#9EEFFF"
          strokeWidth="3"
          d="M185.2 240.8s-4.2 28.3-34.5 19.2c-30.3-9-34.5 19.2-34.5 19.2s-4.2 28.3-34.5 19.2-34.5 19.2-34.5 19.2m193-147.1s-4.2 28.3-34.5 19.2c-30.3-9-34.5 19.2-34.5 19.2s-4.2 28.3-34.5 19.2c-30.3-9-34.5 19.2-34.5 19.2M514.4 288s-23-17-.7-39.5-.7-39.5-.7-39.5-23-17-.7-39.5-.7-39.5-.7-39.5m36.1 242.9s-23-17-.7-39.5-.7-39.5-.7-39.5-23-17-.7-39.5-.7-39.5-.7-39.5m-110.3 382s-26.6 10.4-33.8-20.4-33.8-20.4-33.8-20.4-26.6 10.4-33.8-20.4-33.8-20.4-33.8-20.4m48.4 66.4s-26.6 10.4-33.8-20.4-33.8-20.4-33.8-20.4-26.6 10.4-33.8-20.4c-7.2-30.8-33.8-20.4-33.8-20.4"
        />
        <path
          id="bermuda-triangle-airplane-02"
          fill="#FFF"
          d="M516.3 469.6c-.7 3.2-3.9 5.2-7.1 4.5l-23.8-5.2-28.8 33.7c-.8 1-2.1 1.4-3.4 1.2l-4.8-1.1c-.6-.1-1-.8-.6-1.4l19.5-36.4-25.1-5.5-5.2 6.1c-.5.5-1.2.8-1.9.6l-3.4-.8c-.4-.1-.6-.5-.4-.9l5.7-10.7c.5-1 .8-2.1.7-3.2l-.7-12.1c0-.4.3-.7.7-.6l3.4.8c.7.1 1.2.7 1.4 1.4l2.2 7.7 25 5.5-2.4-41.2c0-.6.5-1.1 1.2-1l4.8 1.1c1.3.3 2.3 1.2 2.6 2.5l12 42.7 23.8 5.2c3.3.7 5.3 3.9 4.6 7.1z"
        />
        <path
          id="bermuda-triangle-ship"
          fill="#FFF"
          d="M78.1 357.8l11.3 38.6c1.1 3.9 5 7.5 9.9 9.2l144.9 49.8c4.4 1.5 9.1 1.3 12.4-.5l40.5-21.9-219-75.2zm66.8 33.2l-1.1 3.2c-.3.8-1.2 1.3-2 1l-28.6-9.8c-.8-.3-1.2-1.2-1-2l1.1-3.2c.3-.8 1.2-1.2 2-1l28.6 9.8c.8.3 1.3 1.2 1 2zm36.9 12.7l-1.1 3.1c-.3.8-1.2 1.3-2 1l-28.6-9.8c-.8-.3-1.2-1.2-1-2l1.1-3.2c.3-.8 1.2-1.3 2-1l28.6 9.8c.8.4 1.3 1.3 1 2.1zm36.9 12.7l-1.1 3.2c-.3.8-1.2 1.2-2 1l-28.6-9.8c-.8-.3-1.3-1.2-1-2l1.1-3.2c.3-.8 1.2-1.2 2-1l28.6 9.8c.8.3 1.3 1.2 1 2zm36.9 12.7l-1.1 3.2c-.3.8-1.2 1.3-2 1l-28.6-9.8c-.8-.3-1.3-1.2-1-2l1.1-3.2c.3-.8 1.2-1.2 2-1l28.6 9.8c.8.3 1.3 1.2 1 2zm5.5-40.6c-1.1-2.8-3.8-5.2-7.1-6.4l-19.3-6.6 8.4-24.5c.4-1.2-.2-2.4-1.4-2.8l-12-4.1c-1.1-.4-2.4.2-2.8 1.4l-8.4 24.5-10-3.4 3.2-9.3c.4-1.1-.2-2.4-1.4-2.8l-12-4.1c-1.2-.4-2.4.2-2.8 1.4l-3.2 9.3-48.7-16.7c-3.8-1.3-7.8-.8-10.4 1.2l-25.6 20.2 166.6 57.3-13.1-34.6zm-14.2 17.8l-112.4-38.6.4-1 112.4 38.6-.4 1zm1.2-3.4l-112.4-38.6.4-1 112.4 38.6-.4 1zm1.2-3.4l-112.4-38.6.4-1 112.4 38.6-.4 1zm1.1-3.4L138 357.4l.4-1L250.8 395l-.4 1.1zm1.2-3.4L139.2 354l.4-1.1L252 391.6l-.4 1.1zm1.2-3.4l-112.4-38.6.4-1 112.4 38.6-.4 1z"
        />
      </svg>
    )
  }
}
