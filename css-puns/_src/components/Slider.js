import React, { Component } from "react"
import Swiper from "../libs/swiper"
import styled from "styled-components"
import { z } from "../styles"
import debounce from "lodash.debounce"

const SliderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  /* Fix of Webkit flickering */
  z-index: ${z("slider")};

  .swiper-wrapper {
    position: relative;
    width: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    will-change: transform;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }
`

class Slider extends Component {
  componentDidMount() {
    this.slider = new Swiper(".swiper-container", {
      speed: this.props.speed,
      initialSlide: this.props.activeIndex,
      runCallbacksOnInit: false,
      keyboardControl: true,
      grabCursor: false,
      simulateTouch: false,

      onSlideChangeStart: slider => {
        this.props.onSlideChangeStart(slider.activeIndex)
      },
      onSlideChangeEnd: debounce(slider => {
        // console.log("onSlideChangeEnd")
        this.props.onSlideChangeEnd(slider.activeIndex)
        this.forceUpdate()
      }, this.props.speed)
    })
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.slider.activeIndex) {
      // console.log("slideTo")
      this.slider.slideTo(nextProps.activeIndex)
    }
  }

  render() {
    // console.log("Slider render")

    return (
      <SliderContainer className="swiper-container">
        <div className="swiper-wrapper">{this.props.children}</div>
      </SliderContainer>
    )
  }
}

export default Slider
