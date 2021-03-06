import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const fearRightBase = this.el.querySelector("#fear-fear-right-base")
    const fearRightPupil = this.el.querySelector("#fear-fear-right-pupil")
    const fearRightMask = this.el.querySelector("#fear-fear-right-mask")
    const fearRightBrow = this.el.querySelector("#fear-fear-right-brow")
    const fearLeftBase = this.el.querySelector("#fear-fear-left-base")
    const fearLeftPupil = this.el.querySelector("#fear-fear-left-pupil")
    const fearLeftMask = this.el.querySelector("#fear-fear-left-mask")
    const fearLeftBrow = this.el.querySelector("#fear-fear-left-brow")

    const neutralRightBase = this.el.querySelector("#fear-neutral-right-base")
    const neutralRightPupil = this.el.querySelector("#fear-neutral-right-pupil")
    const neutralRightMask = this.el.querySelector("#fear-neutral-right-mask")
    const neutralRightBrow = this.el.querySelector("#fear-neutral-right-brow")
    const neutralLeftBase = this.el.querySelector("#fear-neutral-left-base")
    const neutralLeftPupil = this.el.querySelector("#fear-neutral-left-pupil")
    const neutralLeftMask = this.el.querySelector("#fear-neutral-left-mask")
    const neutralLeftBrow = this.el.querySelector("#fear-neutral-left-brow")

    const angryRightBase = this.el.querySelector("#fear-angry-right-base")
    const angryRightPupil = this.el.querySelector("#fear-angry-right-pupil")
    const angryRightMask = this.el.querySelector("#fear-angry-right-mask")
    const angryRightBrow = this.el.querySelector("#fear-angry-right-brow")
    const angryLeftBase = this.el.querySelector("#fear-angry-left-base")
    const angryLeftPupil = this.el.querySelector("#fear-angry-left-pupil")
    const angryLeftMask = this.el.querySelector("#fear-angry-left-mask")
    const angryLeftBrow = this.el.querySelector("#fear-angry-left-brow")
    const ease = Power0.easeNone

    this.animation = new TimelineMax({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5
    })
      .to(fearRightBase, 1, { morphSVG: neutralRightBase, ease }, 1)
      .to(fearRightPupil, 1, { morphSVG: neutralRightPupil, ease }, 1)
      .to(fearRightMask, 1, { morphSVG: neutralRightMask, ease }, 1)
      .to(fearRightBrow, 1, { morphSVG: neutralRightBrow, ease }, 1)
      .to(fearLeftBase, 1, { morphSVG: neutralLeftBase, ease }, 1)
      .to(fearLeftPupil, 1, { morphSVG: neutralLeftPupil, ease }, 1)
      .to(fearLeftMask, 1, { morphSVG: neutralLeftMask, ease }, 1)
      .to(fearLeftBrow, 1, { morphSVG: neutralLeftBrow, ease }, 1)
      .to(fearRightBase, 1, { morphSVG: angryRightBase, ease }, 2)
      .to(fearRightPupil, 1, { morphSVG: angryRightPupil, ease }, 2)
      .to(fearRightMask, 1, { morphSVG: angryRightMask, ease }, 2)
      .to(fearRightBrow, 1, { morphSVG: angryRightBrow, ease }, 2)
      .to(fearLeftBase, 1, { morphSVG: angryLeftBase, ease }, 2)
      .to(fearLeftPupil, 1, { morphSVG: angryLeftPupil, ease }, 2)
      .to(fearLeftMask, 1, { morphSVG: angryLeftMask, ease }, 2)
      .to(fearLeftBrow, 1, { morphSVG: angryLeftBrow, ease }, 2)
      .timeScale(2.7)

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
          fill="#F4511E"
        />
        <g id="fear-fear">
          <defs>
            <path
              id="fear-fear-right-mask"
              d="M539.51 327.17l-11.74-26.18c-3.96-8.83-10.32-16.42-18.5-21.58-2.23-1.4-26.11-5.51-28.42-5.84l-26-3.61c-10.31-1.43-20.77-1.35-31.05.25l-23.44 3.63c-13.56 2.1-37.73 14.33-37.73 14.33-11.79 7.24-30.55 50.91-34.23 60.71l43.97 9.23c6.5 1.36 13.15 2.05 19.83 2.05h69.02c13.92 0 27.63-2.99 39.95-8.71v10c12.82-5.96 23.72-14.68 31.69-25.36l6.65-8.92z"
            />
          </defs>
          <clipPath id="fear-fear-right-mask_1_">
            <use xlinkHref="#fear-fear-right-mask" overflow="visible" />
          </clipPath>
          <path
            id="fear-fear-right-base"
            d="M539.51 327.78l-11.73-30.49c-1.5-3.9-6.58-8.02-12.47-11.69-11.88-7.41-25.4-11.78-39.34-13.07l-21.11-1.95c-6.87-.95-18.4-.53-25.31-.14-3.47.2-6.93.56-10.37 1.1l-8.02 1.24c-9.08 1.41-18.04 3.52-26.78 6.37-7.71 2.51-16.42 5.75-21.75 9.03l-5.66 3.48c-11.79 7.24-28.56 57.83-28.56 57.83l14.77 2.2c10.14 1.51 20.14 3.84 30.04 6.53 6.18 1.68 12.57 2.54 19 2.54h69.02c13.92 0 27.63-2.99 39.95-8.71 12.82-5.96 23.72-4.68 31.69-15.36l6.63-8.91z"
            clipPath="url(#fear-fear-right-mask_1_)"
            fill="#FFF"
          />
          <path
            id="fear-fear-right-pupil"
            d="M473.61 334.08c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03 40.03 17.92 40.03 40.03z"
            clipPath="url(#fear-fear-right-mask_1_)"
            fill="#212121"
          />
          <path
            id="fear-fear-right-brow"
            d="M347.1 174.93l64.23 7.47c20.4 2.37 40.3 7.95 58.96 16.53l41.57 19.12c4.01 1.84 8.07 3.55 12.2 5.12l34.03 12.94-7.78-9.91c-12.75-16.26-28.42-30.01-46.19-40.56l-21.19-12.57c-17.73-10.52-37.27-17.67-57.6-21.08l-73.36-12.29c-7-1.17-13.57 3.7-14.48 10.73l-1.36 10.47c-.89 6.91 4.04 13.22 10.97 14.03z"
            fill="#212121"
          />
          <g>
            <defs>
              <path
                id="fear-fear-left-mask"
                d="M190.99 283.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-12.54 1.26-22.64 3.14-33.95 7.07-4.41 1.53-29.32 38.09-29.32 38.09s2.35 3.12 13.46 18.84c7.25 10.27 33.88 14.05 47.35 14.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c1.25 0 18.33-1.52 19.57-1.6l42.19-3.93s-23.43-50.48-41.24-59.1c-12.03-5.82-25.59-11.57-35.76-13.63z"
              />
            </defs>
            <clipPath id="fear-fear-left-mask_1_">
              <use xlinkHref="#fear-fear-left-mask" overflow="visible" />
            </clipPath>
            <path
              id="fear-fear-left-base"
              d="M190.99 273.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-.45.04-.91.1-1.38.15-19.46 2.32-36.69 13.67-46.89 30.4l-15.01 24.61s2.35 3.12 13.46 18.84c7.25 10.27 33.88 24.05 47.35 24.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c1.25 0 18.33-1.52 19.57-1.6l42.19-13.93s-25.98-74.07-76.99-82.73z"
              clipPath="url(#fear-fear-left-mask_1_)"
              fill="#FFF"
            />
            <path
              id="fear-fear-left-pupil"
              d="M199.01 334.08c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03 40.03 17.92 40.03 40.03z"
              clipPath="url(#fear-fear-left-mask_1_)"
              fill="#212121"
            />
          </g>
          <path
            id="fear-fear-left-brow"
            d="M246.03 151.63l2 9.52c1.38 6.59-2.69 13.09-9.23 14.72l-103.42 25.7c-4.72 1.17-9.4 2.52-14.03 4.05-13.79 4.55-27.02 10.62-39.46 18.1l-39.97 24.04 30.76-34.93c9.24-10.49 19.75-19.78 31.31-27.65 15.81-10.77 33.35-18.74 51.86-23.57l74.77-19.51c6.92-1.81 13.94 2.53 15.41 9.53z"
            fill="#212121"
          />
        </g>
        <g id="fear-neutral" display="none">
          <defs>
            <path
              id="fear-neutral-right-mask"
              d="M539.51 327.17l-8.93-13.12c-6.49-9.53-16.7-15.88-28.12-17.47l-47.61-6.6c-10.31-1.43-20.78-1.35-31.07.25l-23.43 3.63c-13.56 2.1-26.43 6.78-37.73 13.73l-5.66 3.48c-11.79 7.24-17.41 24.37-28.56 37.83l34.1 14.91c9.31 4.07 19.34 6.35 29.51 6.37h69.22c13.92 0 27.63-2.99 39.95-8.71 12.82-5.96 23.72-14.68 31.69-25.36l6.64-8.94z"
            />
          </defs>
          <clipPath id="fear-neutral-right-mask_1_">
            <use xlinkHref="#fear-neutral-right-mask" overflow="visible" />
          </clipPath>
          <path
            id="fear-neutral-right-base"
            d="M539.51 327.78l-17.71-26.02c-6.25-2.12-12.73-3.66-19.34-4.57l-47.61-6.6c-10.3-1.43-20.79-1.35-31.06.24l-23.44 3.63c-13.56 2.1-26.43 6.78-37.73 13.73l-5.66 3.48c-11.79 7.24-28.56 37.83-28.56 37.83l43.97 19.23c6.5 1.36 13.15 2.05 19.83 2.05h69.02c13.92 0 27.63-2.99 39.95-8.71 12.82-5.96 23.72-14.68 31.69-25.36l6.65-8.93z"
            clipPath="url(#fear-neutral-right-mask_1_)"
            fill="#FFF"
          />
          <path
            id="fear-neutral-right-pupil"
            d="M473.99 325.33c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03c22.11-.01 40.03 17.92 40.03 40.03z"
            clipPath="url(#fear-neutral-right-mask_1_)"
            fill="#212121"
          />
          <path
            id="fear-neutral-right-brow"
            d="M349.19 230.21l77.28-4.25c13.34-.73 26.72.27 39.8 2.99l55.76 11.58 41.85 9.99-6.36-6.26c-16.41-16.13-36.21-28.38-57.97-35.86l-20.98-7.21c-17.17-5.9-35.25-8.72-53.41-8.33l-77.06 1.66c-7.77.17-13.98 6.51-13.98 14.29v7.14c0 8.19 6.88 14.71 15.07 14.26z"
            fill="#212121"
          />
          <g>
            <defs>
              <path
                id="fear-neutral-left-mask"
                d="M190.99 293.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-12.54 1.26-22.64 3.14-33.95 7.07-4.41 1.53-29.32 28.09-29.32 28.09s2.35 3.12 13.46 18.84c7.25 10.27 33.88 24.05 47.35 24.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c1.25 0 18.33-1.52 19.57-1.6l42.19-13.93s-7.33-12.67-16.9-25.34c-7.54-9.98-16.48-19.97-24.33-23.77-12.04-5.81-25.6-11.56-35.77-13.62z"
              />
            </defs>
            <clipPath id="fear-neutral-left-mask_1_">
              <use xlinkHref="#fear-neutral-left-mask" overflow="visible" />
            </clipPath>
            <path
              id="fear-neutral-left-base"
              d="M190.99 293.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-4.87.49-11.07 1.66-16.84 2.92-10.83 2.36-20.78 7.68-28.79 15.34l-17.65 16.9s2.35 3.12 13.46 18.84c7.25 10.27 33.88 24.05 47.35 24.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c.87 0 9.43-.74 14.95-1.21 3.09-.27 6.13-.89 9.08-1.86l37.73-12.46s-23.43-40.48-41.24-49.1c-12.02-5.82-25.58-11.57-35.75-13.63z"
              clipPath="url(#fear-neutral-left-mask_1_)"
              fill="#FFF"
            />
            <path
              id="fear-neutral-left-pupil"
              d="M199.39 326.06c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03 40.03 17.92 40.03 40.03z"
              clipPath="url(#fear-neutral-left-mask_1_)"
              fill="#212121"
            />
          </g>
          <path
            id="fear-neutral-left-brow"
            d="M249.87 210.42v2.79c0 7.44-5.71 13.64-13.13 14.24L144.29 235c-12.97 1.06-25.75 3.76-38.05 8.03l-13.54 4.7c-8.9 3.09-17.49 6.99-25.68 11.65l-30.91 17.6 42.43-37.19c5.59-4.9 11.54-9.4 17.78-13.44 21.12-13.69 45.27-22 70.34-24.2l67.67-5.95c8.35-.75 15.54 5.83 15.54 14.22z"
            fill="#212121"
          />
        </g>
        <g id="fear-angry" display="none">
          <defs>
            <path
              id="fear-angry-right-mask"
              d="M539.51 327.17l-17.71-6.02c-6.25-2.12-12.73-3.66-19.34-4.57l-47.61-6.6c-10.3-1.43-20.79-1.35-31.06.24l-23.44 3.63c-13.56 2.1-26.43 6.78-37.73 13.73l-5.66 3.48c-11.79 7.24-17.46 11.46-28.56 17.83l43.97 19.23c6.5 1.36 13.15 2.05 19.83 2.05h69.02c13.92 0 27.63-2.99 39.95-8.71 12.82-5.96 23.72-14.68 31.69-25.36l6.65-8.93z"
            />
          </defs>
          <clipPath id="fear-angry-right-mask_1_">
            <use xlinkHref="#fear-angry-right-mask" overflow="visible" />
          </clipPath>
          <path
            id="fear-angry-right-base"
            d="M539.51 327.78l-17.71-6.02c-6.25-2.12-12.73-3.66-19.34-4.57l-47.61-6.6c-10.3-1.43-20.79-1.35-31.06.24l-23.44 3.63c-13.56 2.1-26.43 6.78-37.73 13.73l-5.66 3.48c-11.79 7.24-28.56 17.83-28.56 17.83l43.97 19.23c6.5 1.36 13.15 2.05 19.83 2.05h69.02c13.92 0 27.63-2.99 39.95-8.71 12.82-5.96 23.72-14.68 31.69-25.36l6.65-8.93z"
            clipPath="url(#fear-angry-right-mask_1_)"
            fill="#FFF"
          />
          <path
            id="fear-angry-right-pupil"
            d="M473.99 342.34c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03 40.03 17.92 40.03 40.03z"
            clipPath="url(#fear-angry-right-mask_1_)"
            fill="#212121"
          />
          <path
            id="fear-angry-right-brow"
            d="M334.12 280.4c0 7.58 7.29 13.03 14.56 10.88l114.96-33.94c6.88-2.24 14.02-3.54 21.25-3.86l17.65-.79c12.01-.54 23.98 1.64 35.03 6.35l26.32 11.24-7.11-8.58c-15.3-18.45-38.06-29.08-62.03-28.97l-32.21.14c-6.59.03-13.16.87-19.55 2.51l-100.67 29.08c-4.86 1.4-8.2 5.85-8.2 10.9v5.04z"
            fill="#212121"
          />
          <g>
            <defs>
              <path
                id="fear-angry-left-mask"
                d="M190.99 313.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-12.54 1.26-22.64 3.14-33.95 7.07-4.41 1.53-29.32 8.09-29.32 8.09s2.35 3.12 13.46 18.84c7.25 10.27 33.88 24.05 47.35 24.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c1.25 0 18.33-1.52 19.57-1.6l42.19-13.93s-23.43-20.48-41.24-29.1c-12.03-5.82-25.59-11.57-35.76-13.63z"
              />
            </defs>
            <clipPath id="fear-angry-left-mask_1_">
              <use xlinkHref="#fear-angry-left-mask" overflow="visible" />
            </clipPath>
            <path
              id="fear-angry-left-base"
              d="M190.99 313.67l-3.12-.63c-15.67-3.17-31.72-3.97-47.62-2.37l-20.43 2.04c-12.54 1.26-22.64 3.14-33.95 7.07-4.41 1.53-29.32 8.09-29.32 8.09s2.35 3.12 13.46 18.84c7.25 10.27 33.88 24.05 47.35 24.05l20.97 1.49c1.95-.21 3.91-.32 5.88-.32h62.02c1.25 0 18.33-1.52 19.57-1.6l42.19-13.93s-23.43-20.48-41.24-29.1c-12.03-5.82-25.59-11.57-35.76-13.63z"
              clipPath="url(#fear-angry-left-mask_1_)"
              fill="#FFF"
            />
            <path
              id="fear-angry-left-pupil"
              d="M199.39 339.56c0 22.11-17.92 40.03-40.03 40.03s-40.03-17.92-40.03-40.03 17.92-40.03 40.03-40.03 40.03 17.92 40.03 40.03z"
              clipPath="url(#fear-angry-left-mask_1_)"
              fill="#212121"
            />
          </g>
          <path
            id="fear-angry-left-brow"
            d="M249.87 272.35v7.23c0 7.82-7.72 13.29-15.1 10.71l-93.64-32.85c-14.25-5-29.62-5.87-44.34-2.51l-11.07 2.53c-4.25.97-8.42 2.29-12.46 3.93l-37.14 15.16 33-28.93c11.64-10.2 25.98-16.82 41.3-19.04 11.89-1.73 24.02-.76 35.49 2.84l96.02 30.11c4.72 1.48 7.94 5.86 7.94 10.82z"
            fill="#212121"
          />
        </g>
      </svg>
    )
  }
}
