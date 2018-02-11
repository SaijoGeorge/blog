import React, { Component } from "react"
import styled from "styled-components"
import { z } from "../styles"

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: ${z("slider")};
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  cursor: move;
  cursor: grab;
  cursor: -webkit-grab;
  -webkit-tap-highlight-color: transparent;

  &:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
`

const SliderList = styled.ul`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  will-change: transform;
`

const SliderItem = styled.li`
  flex: 1 0 100%;
  position: relative;
`

class Slider extends Component {
  wrapper = null
  list = null

  prevSlide = 0
  currentSlide = 0
  slidesCount = 0
  slideWidth = 0
  posX = 0
  translateX = 0
  swipeProgress = 0
  touching = false
  swiping = false

  _startX = 0
  _currentX = 0
  _shiftX = 0
  _testX = 0
  _testY = 0
  _runCallbacks = false

  defaultOptions = {
    speed: 600,
    initialSlide: 0,
    keyboardControll: false,
    runCallbacks: true,

    onSlideChangeStart: null,
    onSlideChangeEnd: null,
    onSwipe: null
  }

  setOptions(options) {
    this.options = { ...this.defaultOptions, ...options }
  }

  componentWillMount() {
    this.setOptions(this.props)

    this.currentSlide = this.options.initialSlide
    this._runCallbacks = this.options.runCallbacks
  }

  componentDidMount() {
    this.slideWidth = this.wrapper.offsetWidth
    this.slidesCount = this.list.children.length

    this._setInitialSlide()
    this._addEventListeners()
  }

  componentWillReceiveProps(nextProps) {
    this.setOptions(nextProps)
  }

  componentWillUpdate(nextProps) {
    this.slideTo(
      nextProps.currentSlide,
      false // runCallbacks
    )
  }

  componentWillUnmount() {
    this._removeEventListeners()
  }

  render() {
    const slides = this.props.children

    return (
      <SliderWrapper
        innerRef={el => (this.wrapper = el)}
        onTouchStart={this._onPointerStart}
        onMouseDown={this._onPointerStart}
        onTouchMove={this._onPointerMove}
        onMouseMove={this._onPointerMove}
        onTouchEnd={this._onPointerEnd}
        onMouseUp={this._onPointerEnd}
        onMouseLeave={this._onPointerEnd}
      >
        <SliderList innerRef={el => (this.list = el)}>
          {slides.map((slide, i) =>
            <SliderItem key={i}>
              {slide}
            </SliderItem>
          )}
        </SliderList>
      </SliderWrapper>
    )
  }

  slideTo(index, runCallbacks = this.options.runCallbacks, slow = true) {
    this.prevSlide = this.currentSlide
    this._runCallbacks = runCallbacks

    this.currentSlide = Math.max(0, index)
    this.currentSlide = Math.min(this.slidesCount - 1, this.currentSlide)

    this._onSlideChangeStart()

    this.translateX = -this.currentSlide * this.slideWidth

    if (this.posX === this.translateX) return

    this._setAnimatable(slow)
    this.list.style.transform = `translateX(${this.translateX}px)`

    this.posX = this.translateX
  }

  slidePrev = () => {
    this.slideTo(this.currentSlide - 1)
  }

  slideNext = () => {
    this.slideTo(this.currentSlide + 1)
  }

  _setInitialSlide() {
    if (this.currentSlide === 0) return

    this.translateX = -this.currentSlide * this.slideWidth
    this.posX = this.translateX

    this.list.style.transform = `translateX(${this.translateX}px)`
  }

  _addEventListeners() {
    if (typeof document === "undefined") return

    this.options.keyboardControll &&
      document.addEventListener("keydown", this._onKeyDown)

    window.addEventListener("resize", this._onWindowResize)
  }

  _removeEventListeners() {
    if (typeof document === "undefined") return

    this.options.keyboardControll &&
      document.removeEventListener("keydown", this._onKeyDown)

    window.removeEventListener("resize", this._onWindowResize)
  }

  _onKeyDown = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        this.slidePrev()
        break
      case 39:
        this.slideNext()
        break
    }
  }

  _onWindowResize = () => {
    this.slideWidth = this.wrapper.offsetWidth

    this.translateX = -this.currentSlide * this.slideWidth
    this.list.style.transform = `translateX(${this.translateX}px)`

    this.posX = this.translateX
  }

  // e.pageX || e.touches[0].pageX
  // ^ when pageX === 0 then accessing e.touches[0] throws an error
  _getX = e => (e.touches ? e.touches[0].pageX : e.pageX)
  _getY = e => (e.touches ? e.touches[0].pageY : e.pageY)

  _onPointerStart = e => {
    // Prevent only when using mouse
    !e.touches && e.preventDefault()

    this.touching = true

    this._startX = this._getX(e)
    this._currentX = this._startX

    this._testX = this._getX(e)
    this._testY = this._getY(e)

    if (!e.touches) {
      this.swiping = true
      requestAnimationFrame(this._update)
    }
  }

  _onPointerMove = e => {
    if (!this.touching) return

    this._currentX = this._getX(e)
    this._currentY = this._getY(e)

    if (e.touches && this._testX && this._testY) {
      const xDiff = this._testX - this._currentX
      const yDiff = this._testY - this._currentY

      // Is swiping horizontal
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        e.preventDefault()
        this.swiping = true
        requestAnimationFrame(this._update)
      }

      this._testX = null
      this._testY = null
    }
  }

  _onPointerEnd = () => {
    if (!this.touching) return

    this.touching = false
    this.posX = this.translateX

    const progress = Math.abs(this._shiftX) / this.slideWidth
    const minShift = progress >= 0.1 || Math.abs(this._shiftX) > 50
    const direction = this._shiftX < 0 ? 1 : -1
    let index = this.currentSlide

    if (this.swiping && minShift) {
      index += direction
    }

    this.slideTo(index, this.options.runCallbacks, false)

    this.swiping = false
    this.swipeProgress = 0
  }

  _update = () => {
    if (!this.touching) return

    requestAnimationFrame(this._update)

    this._shiftX = this._currentX - this._startX
    this.translateX = this.posX + this._shiftX

    this.list.style.transform = `translateX(${this.translateX}px)`

    if (this.options.onSwipe) {
      this.swipeProgress = this._shiftX / this.slideWidth
      this.options.onSwipe && this.options.onSwipe(this)
    }
  }

  _setAnimatable(slow = false) {
    const transition = slow
      ? `transform ${this.options.speed}ms cubic-bezier(0.6, 0.6, 0.2, 1)`
      : `transform ${this.options.speed *
          0.75}ms cubic-bezier(0.3, 0.4, 0.6, 1)`

    this.list.style.transition = transition

    const onTransitionEnd = () => {
      this.list.style.transition = ""

      this._onSlideChangeEnd()
      this.list.removeEventListener("transitionend", onTransitionEnd)
    }
    this.list.addEventListener("transitionend", onTransitionEnd)
  }

  _onSlideChangeStart() {
    if (
      this.prevSlide !== this.currentSlide &&
      this._runCallbacks &&
      this.options.onSlideChangeStart
    ) {
      this.options.onSlideChangeStart(this)
    }
  }

  _onSlideChangeEnd() {
    if (
      this.prevSlide !== this.currentSlide &&
      this._runCallbacks &&
      this.options.onSlideChangeStart
    ) {
      this.options.onSlideChangeEnd(this)
    }
  }
}

export default Slider
