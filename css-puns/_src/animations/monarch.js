import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const king = this.el.querySelector("#monarch-king")
    const prince = this.el.querySelector("#monarch-prince")
    const crown = this.el.querySelector("#monarch-crown")
    const princeHair = this.el.querySelector("#monarch-prince-hair")
    const princeEyebrows = this.el.querySelector("#monarch-prince-eyebrows")
    const beard = this.el.querySelector("#monarch-king-beard")
    const princeCopy = this.el.querySelector("#monarch-prince-copy")

    this.animation = new TimelineMax({ repeat: -1, repeatDelay: 2 })
      .to(king, 5, {
        x: -400,
        delay: 1
      })
      .to(
        prince,
        3,
        {
          x: -125
        },
        "-=5"
      )
      .to(
        crown,
        3,
        {
          x: 125
        },
        "-=5"
      )
      .to(prince, 4, {
        x: -250,
        delay: 1
      })
      .to(
        crown,
        4,
        {
          x: 0
        },
        "-=4"
      )
      .to([princeHair, princeEyebrows, beard], 1, {
        fill: "#757575",
        opacity: 1,
        delay: 0.5
      })
      .to(princeCopy, 1, { opacity: 1, delay: 1 })
      .timeScale(2)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="monarch-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#monarch-clip)">
          <path
            d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
            fill="#B71C1C"
          />
          <g id="monarch-prince-copy" opacity="0">
            <path
              d="M500.5 312.11l17.9-24.03c3-7.28 10.09-12.03 17.97-12.03 5.1 0 9.04 4.47 8.41 9.53l-9.58 38.94c-.23.95-.42 1.92-.57 2.88l-2.57 17.19c-.41 2.73-3.29 4.34-5.83 3.25l-25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M518.69 258.21v105.13c0 10.35-3.84 20.32-10.8 27.99l-43.08 47.54c-5.58 6.15-12.96 10.38-21.09 12.06l-10.78 2.23c-5.24 1.08-10.64 1.08-15.87 0l-10.78-2.23c-8.13-1.68-15.52-5.9-21.09-12.06l-43.08-47.54c-6.96-7.67-10.8-17.64-10.8-27.99V258.21c0-18.02 8.11-35.07 22.08-46.46l14.69-11.96c.63-.52 1.28-1.02 1.93-1.52 12.94-9.88 28.93-14.9 45.21-14.9h19.57c16.28 0 32.27 5.03 45.21 14.9.65.5 1.29 1 1.93 1.52l14.69 11.96c13.95 11.39 22.06 28.45 22.06 46.46z"
              fill="#FFE0B2"
            />
            <path
              d="M349.5 312.11l-17.9-24.03c-3-7.28-10.09-12.03-17.97-12.03-5.1 0-9.04 4.47-8.41 9.53l9.58 38.94c.23.95.42 1.92.57 2.88l2.57 17.19c.41 2.73 3.29 4.34 5.83 3.25l25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M410.16 334.95l9.9-4.95c3.11-1.56 6.77-1.56 9.89 0l9.17 4.58c4.4 2.2 6.82 7.04 5.93 11.88l-.07.36c-.96 5.25-5.54 9.06-10.87 9.06h-19c-4.97 0-9.33-3.32-10.65-8.11-1.42-5.08.98-10.46 5.7-12.82z"
              fill="#FFC59C"
            />
            <path
              d="M457.9 305.84h32.36c3.4 0 6.35-2.35 7.12-5.66.74-3.19-.48-6.52-3.1-8.49l-2.82-2.12c-5.16-3.88-11.44-5.98-17.89-5.98-6.36 0-12.56 2.04-17.68 5.82l-2.17 1.6c-2.97 2.2-4.14 6.09-2.85 9.56l.19.51c1.05 2.86 3.78 4.76 6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="473.97" cy="294.71" r="11.13" fill="#3E2723" />
            <path
              d="M396.14 305.48h-32.36c-3.4 0-6.35-2.35-7.12-5.66-.74-3.19.48-6.52 3.1-8.49l2.82-2.12c5.16-3.88 11.44-5.98 17.89-5.98 6.36 0 12.56 2.04 17.68 5.82l2.17 1.6c2.97 2.2 4.14 6.09 2.85 9.56l-.19.51c-1.06 2.86-3.79 4.76-6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="380.07" cy="294.35" r="11.13" fill="#3E2723" />
            <g fill="#FFB300">
              <path d="M501.43 274.15l-16.74-3.5c-.78-.16-1.58-.26-2.37-.29l-32.58-1.07c-2.51-.08-4.51-2.14-4.51-4.66v-4.14c0-1.72 1.39-3.11 3.11-3.11h22.55c5.26 0 10.49.95 15.42 2.8l10.51 3.94c3.12 1.17 5.42 3.86 6.1 7.12l.25 1.19c.2 1.03-.71 1.94-1.74 1.72zM351.68 274.15l16.74-3.5c.78-.16 1.58-.26 2.37-.29l32.58-1.07c2.51-.08 4.51-2.14 4.51-4.66v-4.14c0-1.72-1.39-3.11-3.11-3.11h-22.55c-5.26 0-10.49.95-15.42 2.8l-10.51 3.94c-3.12 1.17-5.42 3.86-6.1 7.12l-.25 1.19c-.2 1.03.71 1.94 1.74 1.72z" />
            </g>
            <path
              d="M522.61 291.04l-3.8 27.64h-5.38l-5.69-43.89c-.84-6.52-3.42-12.39-7.24-16.49l-17.8-19.1c-.05-.05-.09-.1-.14-.15-1.05-1.12-2.11-2.22-3.19-3.29-10.02-9.96-23.46-15.72-37.58-16.1l-29.33-.79c-13.52-.37-26.8 4.12-37.08 12.92-2.04 1.74-4.04 3.57-5.99 5.48-1.93 1.88-3.82 3.81-5.68 5.81l-14.2 15.23c-3.82 4.1-6.4 9.97-7.24 16.49l-5.69 43.89h-5.38l-3.8-27.64c-4.69-24.41-5.08-49.98-1.12-74.63.73-4.53 2.44-8.65 4.91-11.83l20.71-26.64c8.62-11.09 18.86-19.59 30.06-24.94l.99-.47c11.06-5.29 22.82-7.38 34.51-6.15l10.94 1.15 3.16-.44c12.34-1.7 24.8.31 36.51 5.91 11.2 5.35 21.44 13.85 30.06 24.94l20.71 26.65c2.47 3.18 4.19 7.31 4.91 11.83 3.94 24.63 3.56 50.2-1.14 74.61z"
              fill="#FFCA28"
            />
            <path
              d="M389.24 391.94h71.64l-7.47 4.26c-3.29 1.88-7.02 2.87-10.82 2.87h-35.07c-3.79 0-7.52-.99-10.82-2.87l-7.46-4.26z"
              fill="#212121"
            />
          </g>
          <g id="monarch-prince">
            <path
              d="M500.5 312.11l17.9-24.03c3-7.28 10.09-12.03 17.97-12.03 5.1 0 9.04 4.47 8.41 9.53l-9.58 38.94c-.23.95-.42 1.92-.57 2.88l-2.57 17.19c-.41 2.73-3.29 4.34-5.83 3.25l-25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M518.69 258.21v105.13c0 10.35-3.84 20.32-10.8 27.99l-43.08 47.54c-5.58 6.15-12.96 10.38-21.09 12.06l-10.78 2.23c-5.24 1.08-10.64 1.08-15.87 0l-10.78-2.23c-8.13-1.68-15.52-5.9-21.09-12.06l-43.08-47.54c-6.96-7.67-10.8-17.64-10.8-27.99V258.21c0-18.02 8.11-35.07 22.08-46.46l14.69-11.96c.63-.52 1.28-1.02 1.93-1.52 12.94-9.88 28.93-14.9 45.21-14.9h19.57c16.28 0 32.27 5.03 45.21 14.9.65.5 1.29 1 1.93 1.52l14.69 11.96c13.95 11.39 22.06 28.45 22.06 46.46z"
              fill="#FFE0B2"
            />
            <path
              d="M349.5 312.11l-17.9-24.03c-3-7.28-10.09-12.03-17.97-12.03-5.1 0-9.04 4.47-8.41 9.53l9.58 38.94c.23.95.42 1.92.57 2.88l2.57 17.19c.41 2.73 3.29 4.34 5.83 3.25l25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M410.16 334.95l9.9-4.95c3.11-1.56 6.77-1.56 9.89 0l9.17 4.58c4.4 2.2 6.82 7.04 5.93 11.88l-.07.36c-.96 5.25-5.54 9.06-10.87 9.06h-19c-4.97 0-9.33-3.32-10.65-8.11-1.42-5.08.98-10.46 5.7-12.82z"
              fill="#FFC59C"
            />
            <path
              d="M457.9 305.84h32.36c3.4 0 6.35-2.35 7.12-5.66.74-3.19-.48-6.52-3.1-8.49l-2.82-2.12c-5.16-3.88-11.44-5.98-17.89-5.98-6.36 0-12.56 2.04-17.68 5.82l-2.17 1.6c-2.97 2.2-4.14 6.09-2.85 9.56l.19.51c1.05 2.86 3.78 4.76 6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="473.97" cy="294.71" r="11.13" fill="#3E2723" />
            <path
              d="M396.14 305.48h-32.36c-3.4 0-6.35-2.35-7.12-5.66-.74-3.19.48-6.52 3.1-8.49l2.82-2.12c5.16-3.88 11.44-5.98 17.89-5.98 6.36 0 12.56 2.04 17.68 5.82l2.17 1.6c2.97 2.2 4.14 6.09 2.85 9.56l-.19.51c-1.06 2.86-3.79 4.76-6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="380.07" cy="294.35" r="11.13" fill="#3E2723" />
            <g id="monarch-prince-eyebrows" fill="#FFB300">
              <path d="M501.43 274.15l-16.74-3.5c-.78-.16-1.58-.26-2.37-.29l-32.58-1.07c-2.51-.08-4.51-2.14-4.51-4.66v-4.14c0-1.72 1.39-3.11 3.11-3.11h22.55c5.26 0 10.49.95 15.42 2.8l10.51 3.94c3.12 1.17 5.42 3.86 6.1 7.12l.25 1.19c.2 1.03-.71 1.94-1.74 1.72zM351.68 274.15l16.74-3.5c.78-.16 1.58-.26 2.37-.29l32.58-1.07c2.51-.08 4.51-2.14 4.51-4.66v-4.14c0-1.72-1.39-3.11-3.11-3.11h-22.55c-5.26 0-10.49.95-15.42 2.8l-10.51 3.94c-3.12 1.17-5.42 3.86-6.1 7.12l-.25 1.19c-.2 1.03.71 1.94 1.74 1.72z" />
            </g>
            <path
              id="monarch-prince-hair"
              d="M522.61 291.04l-3.8 27.64h-5.38l-5.69-43.89c-.84-6.52-3.42-12.39-7.24-16.49l-17.8-19.1c-.05-.05-.09-.1-.14-.15-1.05-1.12-2.11-2.22-3.19-3.29-10.02-9.96-23.46-15.72-37.58-16.1l-29.33-.79c-13.52-.37-26.8 4.12-37.08 12.92-2.04 1.74-4.04 3.57-5.99 5.48-1.93 1.88-3.82 3.81-5.68 5.81l-14.2 15.23c-3.82 4.1-6.4 9.97-7.24 16.49l-5.69 43.89h-5.38l-3.8-27.64c-4.69-24.41-5.08-49.98-1.12-74.63.73-4.53 2.44-8.65 4.91-11.83l20.71-26.64c8.62-11.09 18.86-19.59 30.06-24.94l.99-.47c11.06-5.29 22.82-7.38 34.51-6.15l10.94 1.15 3.16-.44c12.34-1.7 24.8.31 36.51 5.91 11.2 5.35 21.44 13.85 30.06 24.94l20.71 26.65c2.47 3.18 4.19 7.31 4.91 11.83 3.94 24.63 3.56 50.2-1.14 74.61z"
              fill="#FFCA28"
            />
            <path
              d="M389.24 391.94h71.64l-7.47 4.26c-3.29 1.88-7.02 2.87-10.82 2.87h-35.07c-3.79 0-7.52-.99-10.82-2.87l-7.46-4.26z"
              fill="#212121"
            />
          </g>
          <g id="monarch-king">
            <path
              d="M250.5 312.11l17.9-24.03c3-7.28 10.09-12.03 17.97-12.03 5.1 0 9.04 4.47 8.41 9.53l-9.58 38.94c-.23.95-.42 1.92-.57 2.88l-2.57 17.19c-.41 2.73-3.29 4.34-5.83 3.25l-25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M268.69 258.21v105.13c0 10.35-3.84 20.32-10.8 27.99l-43.08 47.54c-5.58 6.15-12.96 10.38-21.09 12.06l-10.78 2.23c-5.24 1.08-10.64 1.08-15.87 0l-10.78-2.23c-8.13-1.68-15.52-5.9-21.09-12.06l-43.08-47.54c-6.96-7.67-10.8-17.64-10.8-27.99V258.21c0-18.02 8.11-35.07 22.08-46.46l14.69-11.96c.63-.52 1.28-1.02 1.93-1.52 12.94-9.88 28.93-14.9 45.21-14.9h19.57c16.28 0 32.27 5.03 45.21 14.9.65.5 1.29 1 1.93 1.52l14.69 11.96c13.95 11.39 22.06 28.45 22.06 46.46z"
              fill="#FFE0B2"
            />
            <path
              d="M99.5 312.11l-17.9-24.03c-3-7.28-10.09-12.03-17.97-12.03-5.1 0-9.04 4.47-8.41 9.53l9.58 38.94c.23.95.42 1.92.57 2.88l2.57 17.19c.41 2.73 3.29 4.34 5.83 3.25l25.73-11.07v-24.66z"
              fill="#FFE0B2"
            />
            <path
              d="M160.16 334.95l9.9-4.95c3.11-1.56 6.77-1.56 9.89 0l9.17 4.58c4.4 2.2 6.82 7.04 5.93 11.88l-.07.36c-.96 5.25-5.54 9.06-10.87 9.06h-19c-4.97 0-9.33-3.32-10.65-8.11-1.42-5.08.98-10.46 5.7-12.82z"
              fill="#FFC59C"
            />
            <path
              d="M207.9 305.84h32.36c3.4 0 6.35-2.35 7.12-5.66.74-3.19-.48-6.52-3.1-8.49l-2.82-2.12c-5.16-3.88-11.44-5.98-17.89-5.98-6.36 0-12.56 2.04-17.68 5.82l-2.17 1.6c-2.97 2.2-4.14 6.09-2.85 9.56l.19.51c1.05 2.86 3.78 4.76 6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="223.97" cy="294.71" r="11.13" fill="#3E2723" />
            <path
              d="M146.14 305.48h-32.36c-3.4 0-6.35-2.35-7.12-5.66-.74-3.19.48-6.52 3.1-8.49l2.82-2.12c5.16-3.88 11.44-5.98 17.89-5.98 6.36 0 12.56 2.04 17.68 5.82l2.17 1.6c2.97 2.2 4.14 6.09 2.85 9.56l-.19.51c-1.06 2.86-3.79 4.76-6.84 4.76z"
              fill="#FFF"
            />
            <circle cx="130.07" cy="294.35" r="11.13" fill="#3E2723" />
            <g fill="#757575">
              <path d="M251.43 274.15l-16.74-3.5c-.78-.16-1.58-.26-2.37-.29l-32.58-1.07c-2.51-.08-4.51-2.14-4.51-4.66v-4.14c0-1.72 1.39-3.11 3.11-3.11h22.55c5.26 0 10.49.95 15.42 2.8l10.51 3.94c3.12 1.17 5.42 3.86 6.1 7.12l.25 1.19c.2 1.03-.71 1.94-1.74 1.72zM101.68 274.15l16.74-3.5c.78-.16 1.58-.26 2.37-.29l32.58-1.07c2.51-.08 4.51-2.14 4.51-4.66v-4.14c0-1.72-1.39-3.11-3.11-3.11h-22.55c-5.26 0-10.49.95-15.42 2.8l-10.51 3.94c-3.12 1.17-5.42 3.86-6.1 7.12l-.25 1.19c-.2 1.03.71 1.94 1.74 1.72z" />
            </g>
            <path
              d="M139.24 391.94h71.64l-7.47 4.26c-3.29 1.88-7.02 2.87-10.82 2.87h-35.07c-3.79 0-7.52-.99-10.82-2.87l-7.46-4.26z"
              fill="#212121"
            />
            <path
              d="M272.61 291.04l-3.8 27.64h-5.38l-5.69-43.89c-.84-6.52-3.42-12.39-7.24-16.49l-17.8-19.1c-.05-.05-.09-.1-.14-.15-1.05-1.12-2.11-2.22-3.19-3.29-10.02-9.96-23.46-15.72-37.58-16.1l-29.33-.79c-13.52-.37-26.8 4.12-37.08 12.92-2.04 1.74-4.04 3.57-5.99 5.48-1.93 1.88-3.82 3.81-5.68 5.81L99.5 258.3c-3.82 4.1-6.4 9.97-7.24 16.49l-5.69 43.89h-5.38l-3.8-27.64c-4.69-24.41-5.08-49.98-1.12-74.63.73-4.53 2.44-8.65 4.91-11.83l20.71-26.64c8.62-11.09 18.86-19.59 30.06-24.94l.99-.47c11.06-5.29 22.82-7.38 34.51-6.15l10.94 1.15 3.16-.44c12.34-1.7 24.8.31 36.51 5.91 11.2 5.35 21.44 13.85 30.06 24.94l20.71 26.65c2.47 3.18 4.19 7.31 4.91 11.83 3.95 24.64 3.57 50.21-1.13 74.62z"
              fill="#757575"
            />
            <path
              d="M272.54 353.35l-2.87-61.47h-6.94l-7.33 38.89c-1.21 5.18-4.95 9.4-9.95 11.22l-25.09 9.15c-9.95 3.63-20.46 5.49-31.05 5.49h-28.46c-10.6 0-21.11-1.86-31.06-5.49l-25.08-9.15c-4.99-1.82-8.73-6.04-9.94-11.22l-7.39-38.89h-6.94l-2.82 61.47c-.2 3.13-.16 6.28.13 9.4l1.8 19.81c1.14 12.55 6.16 24.42 14.35 33.99l22.71 26.52c11.53 13.48 28.39 21.24 46.12 21.24H175c17.74 0 47.02-7.75 58.56-21.24l22.71-26.52c8.2-9.56 13.2-21.44 14.34-33.99l1.81-19.81c.28-3.12.33-6.27.12-9.4zM213 401.75c-8.68 7.03-19.51 10.87-30.68 10.87h-14.47c-11.17 0-22-3.83-30.68-10.87l-9.31-7.54c-2.27-1.84-1.32-5.5 1.56-6l24.77-4.32c13.89-2.42 28.09-2.42 41.98.01l24.59 4.3c2.88.5 3.83 4.16 1.56 6l-9.32 7.55z"
              fill="#757575"
            />
          </g>
          <path
            id="monarch-crown"
            fill="#FFA726"
            d="M261.52 110.76v81.41H88.48v-81.41l51.18 36.51 35.33-55.05 35.35 55.05z"
          />
          <path
            id="monarch-king-beard"
            d="M272.5 353.35l-2.87-61.47h-6.94l-7.33 38.89c-1.21 5.18-4.95 9.4-9.95 11.22l-25.09 9.15c-9.95 3.63-20.46 5.49-31.05 5.49h-28.46c-10.6 0-21.11-1.86-31.06-5.49l-25.08-9.15c-4.99-1.82-8.73-6.04-9.94-11.22l-7.39-38.89H80.4l-2.82 61.47c-.2 3.13-.16 6.28.13 9.4l1.8 19.81c1.14 12.55 6.16 24.42 14.35 33.99l22.71 26.52c11.53 13.48 28.39 21.24 46.12 21.24h12.25c17.74 0 47.02-7.75 58.56-21.24l22.71-26.52c8.2-9.56 13.2-21.44 14.34-33.99l1.81-19.81c.3-3.12.34-6.27.14-9.4zm-59.54 48.4c-8.68 7.03-19.51 10.87-30.68 10.87h-14.47c-11.17 0-22-3.83-30.68-10.87l-9.31-7.54c-2.27-1.84-1.32-5.5 1.56-6l24.77-4.32c13.89-2.42 28.09-2.42 41.98.01l24.59 4.3c2.88.5 3.83 4.16 1.56 6l-9.32 7.55z"
            opacity="0"
            fill="#757575"
          />
        </g>
      </svg>
    )
  }
}
