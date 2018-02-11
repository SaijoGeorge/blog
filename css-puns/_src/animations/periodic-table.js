import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const elements = this.el.querySelectorAll("#periodic-table-elements path")
    const elementsGroup = this.el.querySelectorAll("#periodic-table-group path")

    const tlElementsOne = new TimelineMax()
      .staggerFrom(elements, 1, { x: -600 }, 0.05)
      .staggerTo(elements, 1, { x: 600, delay: 0.5 }, 0.03)

    const tlElementsTwo = new TimelineMax()
      .staggerFrom(elementsGroup, 1, { y: 600 }, 0.05)
      .staggerTo(elementsGroup, 1, { y: 600, delay: 4 }, 0.05)

    this.animation = new TimelineMax({ repeat: -1 })
      .add([tlElementsOne, tlElementsTwo])
      .timeScale(1.5)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="periodic-table-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#periodic-table-clip)">
          <path
            d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
            fill="#80CBC4"
          />
          <g id="periodic-table-group">
            <path
              d="M160.18 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M189.58 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M218.55 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M247.08 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M276.04 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path d="M304.9 410.95h-26.46v-26.13h26.46v26.13z" fill="#EC407A" />
            <path
              d="M333.65 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M362.07 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path d="M391.8 410.95h-26.46v-26.13h26.46v26.13z" fill="#EC407A" />
            <path
              d="M420.54 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M449.29 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M477.71 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M506.79 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path
              d="M535.53 410.95h-26.46v-26.13h26.46v26.13z"
              fill="#EC407A"
            />
            <path d="M160.18 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M189.58 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M218.55 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M247.4 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M276.15 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M304.9 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M333.65 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M362.07 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M391.8 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M420.54 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M449.29 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M477.71 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M506.79 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M535.53 439.7h-26.46v-26.13h26.46v26.13z" fill="#F06292" />
          </g>
          <g id="periodic-table-elements">
            <path d="M62.18 369.79H35.72v-26.13h26.46v26.13z" fill="#C62828" />
            <path d="M62.18 340.39H35.72v-26.13h26.46v26.13z" fill="#C62828" />
            <path d="M62.18 311.64H35.72V285.5h26.46v26.14z" fill="#C62828" />
            <path d="M62.18 282.89H35.72v-26.13h26.46v26.13z" fill="#C62828" />
            <path d="M62.18 254.14H35.72v-26.13h26.46v26.13z" fill="#C62828" />
            <path d="M61.53 225.4H35.06v-26.13h26.46v26.13z" fill="#C62828" />
            <path d="M61.53 195.99H35.06v-26.13h26.46v26.13z" fill="#3949AB" />
            <path d="M90.6 369.79H64.14v-26.13H90.6v26.13z" fill="#F57F17" />
            <path d="M90.6 340.39H64.14v-26.13H90.6v26.13z" fill="#F57F17" />
            <path d="M90.6 311.64H64.14V285.5H90.6v26.14z" fill="#F57F17" />
            <path d="M90.6 282.89H64.14v-26.13H90.6v26.13z" fill="#F57F17" />
            <path d="M90.6 254.14H64.14v-26.13H90.6v26.13z" fill="#F57F17" />
            <path d="M90.6 225.4H64.14v-26.13H90.6v26.13z" fill="#F57F17" />
            <path d="M119.35 369.79H92.89v-26.13h26.46v26.13z" fill="#F06292" />
            <path d="M119.35 340.39H92.89v-26.13h26.46v26.13z" fill="#EC407A" />
            <path d="M119.35 311.64H92.89V285.5h26.46v26.14z" fill="#FFEE58" />
            <path d="M119.35 282.89H92.89v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path
              d="M160.18 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M160.18 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M160.18 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path
              d="M160.18 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M188.93 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M188.93 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M188.93 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path
              d="M188.93 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M218 369.79h-26.46v-26.13H218v26.13z" fill="#FFEE58" />
            <path d="M218 340.39h-26.46v-26.13H218v26.13z" fill="#FFEE58" />
            <path d="M218 311.64h-26.46V285.5H218v26.14z" fill="#FFEE58" />
            <path d="M218 282.89h-26.46v-26.13H218v26.13z" fill="#FFEE58" />
            <path d="M247.4 369.79h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M247.4 340.39h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M247.4 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path d="M247.4 282.89h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path
              d="M276.15 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M276.15 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M276.15 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path
              d="M276.15 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M304.9 369.79h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M304.9 340.39h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M304.9 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path d="M304.9 282.89h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path
              d="M333.65 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M333.65 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M333.65 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path
              d="M333.65 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M362.07 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path
              d="M362.07 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M362.07 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path
              d="M362.07 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#FFEE58"
            />
            <path d="M391.8 369.79h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M391.8 340.39h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path d="M391.8 311.64h-26.46V285.5h26.46v26.14z" fill="#FFEE58" />
            <path d="M391.8 282.89h-26.46v-26.13h26.46v26.13z" fill="#FFEE58" />
            <path
              d="M420.54 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M420.54 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path d="M420.54 311.64h-26.46V285.5h26.46v26.14z" fill="#7CB342" />
            <path
              d="M420.54 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M420.54 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M420.54 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#AB47BC"
            />
            <path
              d="M449.29 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M449.29 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path d="M449.29 311.64h-26.46V285.5h26.46v26.14z" fill="#7CB342" />
            <path
              d="M449.29 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#AB47BC"
            />
            <path
              d="M449.29 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#AB47BC"
            />
            <path
              d="M449.29 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M477.71 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M477.71 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path d="M477.71 311.64h-26.46V285.5h26.46v26.14z" fill="#AB47BC" />
            <path
              d="M477.71 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#AB47BC"
            />
            <path
              d="M477.71 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M477.71 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M506.79 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#7CB342"
            />
            <path
              d="M506.79 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#AB47BC"
            />
            <path d="M506.79 311.64h-26.46V285.5h26.46v26.14z" fill="#AB47BC" />
            <path
              d="M506.79 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M506.79 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M506.79 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#3949AB"
            />
            <path
              d="M535.53 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#0097A7"
            />
            <path
              d="M535.53 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#0097A7"
            />
            <path d="M535.53 311.64h-26.46V285.5h26.46v26.14z" fill="#0097A7" />
            <path
              d="M535.53 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#0097A7"
            />
            <path
              d="M535.53 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#0097A7"
            />
            <path
              d="M535.53 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#0097A7"
            />
            <path
              d="M564.94 369.79h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
            <path
              d="M564.94 340.39h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
            <path d="M564.94 311.64h-26.46V285.5h26.46v26.14z" fill="#00B0FF" />
            <path
              d="M564.94 282.89h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
            <path
              d="M564.94 253.16h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
            <path
              d="M564.94 224.74h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
            <path
              d="M564.94 195.99h-26.46v-26.13h26.46v26.13z"
              fill="#00B0FF"
            />
          </g>
        </g>
      </svg>
    )
  }
}
