import React, { Component } from "react"
import "gsap"

class Logo extends Component {
  componentWillMount() {
    this.maskID = Math.random()
  }

  componentDidMount() {
    this.initAnimation()
  }

  initAnimation() {
    const paths = this.letters.querySelectorAll("path")
    const letters = []

    Array.from(paths).forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length} ${length}`
      path.style.strokeDashoffset = length

      letters.push({ path, length })
    })

    this.animation = new TimelineMax({ repeat: -1 })

    if (this.props.fast) {
      this.animation.staggerTo(
        paths,
        0.2,
        {
          strokeDashoffset: 0,
          ease: Power1.easeOut
        },
        0.1
      )

      letters.forEach(letter => {
        this.animation.to(
          letter.path,
          0.2,
          {
            strokeDashoffset: -letter.length,
            ease: Linear.easeNone
          },
          "-=.1"
        )
      })
    } else {
      this.animation.staggerTo(
        paths,
        0.7,
        {
          strokeDashoffset: 0,
          ease: Power1.easeOut
        },
        0.55
      )

      this.animation.set({}, {}, "+=2")

      letters.forEach(letter => {
        this.animation.to(
          letter.path,
          0.2,
          {
            strokeDashoffset: -letter.length,
            ease: Linear.easeNone
          },
          "-=.1"
        )
      })
    }
  }

  componentWillUnmount() {
    this.animation && this.animation.kill()
  }

  render() {
    const { width } = this.props

    return (
      <svg
        viewBox="0 0 381.3 97"
        style={{ display: "block", width: width || 142 }}
      >
        <g
          fontSize="94.8568px"
          fontWeight="600"
          fill="#fff"
          style={{ transform: "translateY(-5px)" }}
        >
          <mask id={this.maskID}>
            <rect height="100%" width="100%" fill="#000" />
            <g
              ref={el => (this.letters = el)}
              fill="none"
              stroke="#fff"
              strokeWidth="19"
            >
              <path d="M51.8,39.5c0,0-1.4-16.8-12.1-19.5s-23.3,16.2-23,34.2c0.3,18.5,6.7,25.5,15.7,27.2c9,1.7,18.3-8,19.6-22.1" />
              <path d="M105.8,30c-1.1-6.5-7.5-19.5-20.1-16.4c-12.1,3-17.7,17.6,2.3,32.1c20.3,14.8,14.9,29.6,5.9,33.3s-19.7,3.8-26.5-20" />
              <path d="M155.7,30c-1.1-6.5-7.5-19.5-20.1-16.4c-12.1,3-17.7,17.6,2.3,32.1c20.3,14.8,14.9,29.6,5.9,33.3s-19.7,3.8-26.5-20" />
              <path d="M202,55.7c8.2-0.1,26.2-11.2,25.1-27.7c-1.1-16.5-30-16.9-31.6-8.6c-2.5,13.1-2.8,41.4-0.1,70.3" />
              <path d="M249.5,30.2c0,0-12.1,45.7,8,47S270.2,34,270.2,34" />
              <path
                d="M293.7,85.2c0,0-5.2-34-0.3-43.6c4.3-8.3,18.9-12.5,27-2.5c5.4,6.6-1.3,31-2.5,41.1"
                strokeWidth="25"
              />
              <path d="M368.2,45.1c-2.5-12.6-16.8-19.5-23.6-7.4c-9.9,17.4,30.6,19.7,17.2,39.6c-7.2,10.6-21,0.4-22.7-10.1" />
            </g>
          </mask>
          <text x="4.3218" y="81.3303" opacity=".4">
            CSS Puns
          </text>
          <text x="4.3218" y="81.3303" mask={`url(#${this.maskID})`}>
            CSS Puns
          </text>
        </g>
      </svg>
    )
  }
}

export default Logo
