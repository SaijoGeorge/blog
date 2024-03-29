import React, { Component } from "react"
import "gsap"

export default class extends Component {
  componentDidMount() {
    const hat = this.el.querySelector("#gangsta-hat")
    const glasses = this.el.querySelector("#gangsta-glasses")
    const bottomClosed = this.el.querySelector("#gangsta-bottom-closed")
    const topClosed = this.el.querySelector("#gangsta-top-closed")
    const teethClosed = this.el.querySelector("#gangsta-teeth-closed")
    const bottomOpen = this.el.querySelector("#gangsta-bottom-open")
    const topOpen = this.el.querySelector("#gangsta-top-open")
    const teethOpen = this.el.querySelector("#gangsta-teeth-open")
    const blink = this.el.querySelector("#gangsta-blink")
    const notes = this.el.querySelectorAll("#gangsta-notes path")

    this.animation = new TimelineMax({ repeat: -1 })
      .to(hat, 1, { x: 23, rotation: 10 })
      .to(glasses, 1, { y: 300 }, "-=.5")
      .to(bottomClosed, 0.5, { morphSVG: bottomOpen })
      .to(
        topClosed,
        0.5,
        { morphSVG: { shape: topOpen, shapeIndex: 0 } },
        "-=.5"
      )
      .to(teethClosed, 0.5, { morphSVG: teethOpen }, "-=.5")
      .staggerTo(notes, 0.5, { opacity: 1 }, 0.05)
      .to(blink, 0.05, { opacity: 1 })
      .to(blink, 0.05, { opacity: 0, delay: 0.1 })
      .staggerTo(notes, 0.5, { opacity: 0 }, 0.05)
      .to(bottomClosed, 0.5, { morphSVG: bottomClosed })
      .to(
        topClosed,
        0.5,
        { morphSVG: { shape: topClosed, shapeIndex: 1 } },
        "-=.5"
      )
      .to(teethClosed, 0.5, { morphSVG: teethClosed }, "-=.5")
      .to(glasses, 3.5, { y: 900 })
      .to(hat, 1, { x: 0, rotation: 0 }, "-=3.5")
      .timeScale(1.8)

    this.animation.paused(!this.props.isActive)
  }

  componentWillReceiveProps(nextProps) {
    this.animation.paused(!nextProps.isActive)
  }

  render() {
    return (
      <svg ref={el => (this.el = el)} viewBox="0 0 600 600">
        <clipPath id="gangsta-clip">
          <path d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300" />
        </clipPath>
        <g clipPath="url(#gangsta-clip)">
          <path
            d="M600 300c0 165.69-134.31 300-300 300S0 465.69 0 300 134.31 0 300 0s300 134.31 300 300"
            fill="#455A64"
          />
          <path
            d="M381.48 278.45l21.19-19.68c3.62-3.36 8.37-5.02 13.15-4.6 4.82.42 8.05 5.33 6.75 10.24l-9 33.98c-.11.41-.2.82-.27 1.23l-2.12 12.32c-.88 5.11-5.69 8.41-10.48 7.18l-18.08-4.64-1.14-36.03z"
            fill="#5D4037"
          />
          <path
            d="M218.52 278.45l-21.19-19.68c-3.62-3.36-8.37-5.02-13.15-4.6-4.82.42-8.05 5.33-6.75 10.24l9 33.98c.11.41.2.82.27 1.23l2.12 12.32c.88 5.11 5.69 8.41 10.48 7.18l18.08-4.64 1.14-36.03z"
            fill="#5D4037"
          />
          <polygon
            points="394.37,348.12 360.5,401.36 318.06,410.78 300,411.55 281.94,410.78 239.5,401.36 205.65,348.25 211.91,209.45 240.06,167.56 300,159.11 359.94,167.56 389.14,208.87"
            fill="#5D4037"
          />
          <path d="M398.22 210.88l-2.41-15.94c-1.84-12.21-7.3-23.58-15.68-32.66l-2.44-2.64c-10.03-10.86-23.62-17.75-38.29-19.45h-78.8c-14.67 1.69-28.26 8.59-38.29 19.45l-2.44 2.64c-8.38 9.07-13.83 20.45-15.68 32.66l-2.41 15.94c-.6 4.03-.81 8.12-.61 12.2l1.21 24.98.16.02 2.37 96.19c1.52 13.23 16.43 40.46 16.43 40.46.33.67.67 1.33 1.03 1.97 7.99 14.85 19.86 33.95 36.15 38.3 0 0 30.64 12.59 41.49 12.68 11.49.1 44.19-12.68 44.19-12.68 16.29-4.35 25.46-23.45 33.45-38.3.36-.65.69-1.3 1.03-1.97 0 0 14.9-27.23 16.43-40.46l2.37-96.19.16-.02 1.21-24.98c.18-4.08-.03-8.16-.63-12.2zm-47.59 163.5l-2.03 3.24c-2.69 4.32-6.85 7.54-11.7 9.06l-24.79 7.8c-3.71 1.18-7.49-1.6-7.49-5.5v-2.31c0-.91-.73-1.64-1.64-1.64h-5.95c-.91 0-1.64.73-1.64 1.64v2.31c0 3.9-3.78 6.67-7.49 5.5l-24.79-7.8c-4.85-1.52-9.01-4.74-11.7-9.06l-2.03-3.24c-1.97-3.16-1.05-7.31 2.06-9.35l10.87-7.1c6.29-4.13 13.66-6.32 21.17-6.32h33.04c7.52 0 14.88 2.19 21.17 6.32l10.87 7.1c3.12 2.04 4.04 6.19 2.07 9.35zm29.82-115.42l7.64 68.89c-.17 3.49-1.23 18.41-3.09 21.37l-16.93 8.68c-1.95 3.14-5.83-7.07-9.29-8.36l-29.45-10.95c-2.11-.78-4.35-1.19-6.6-1.19h-45.44c-2.26 0-4.5.4-6.6 1.19l-29.45 10.95c-3.46 1.29-7.34 11.49-9.29 8.36L215 349.22c-1.86-2.96-2.92-17.88-3.09-21.37l7.92-71.4c-.18-3.48.09-6.96.8-10.36.52-2.5.3-5.09-.47-7.53l-3.84-12.06c-.52-1.63-.53-3.39-.02-5.02 3.72-11.82 11-30.62 20.6-36.24 3.55-2.07 30.63-10.95 41.66.5l8.96 9.27c1.64 1.7 3.63 3.04 5.83 3.92l.41.16c4 1.6 8.47 1.6 12.47 0l.32-.13c2.19-.88 4.17-2.2 5.81-3.89l9.84-10.14c7.01-9.68 29.01-4.6 29.61-4.43 3.93 1.08 7.73 2.67 11.28 4.75 9.08 5.32 16.1 22.45 19.97 34.28.93 2.85.95 5.91.04 8.76l-5.58 15.82c-.91 2.59-.66 5.45.69 7.84 1.22 2.15 2.39 4.09 2.24 7.01z" />
          <path d="M317.13 241.28l26.86-7.08c2.38-.63 4.91-.56 7.24.19l18.89 6.09-4.34-8.04c-1.18-2.18-3.06-3.98-5.41-5.17l-10.85-5.5c-1.2-.61-2.62-.77-3.95-.44l-25.48 6.27c-3.66.9-6.35 3.71-6.78 7.1l-.43 3.35c-.28 2.14 1.96 3.83 4.25 3.23z" />
          <path
            d="M365.45 264.11c-2.44-4.12-6.26-7.24-10.78-8.81l-3.58-1.25c-1.77-.61-3.63-.93-5.5-.93h-11.9c-3.89 0-7.66 1.36-10.66 3.83l-3.91 3.23c-1.5 1.24-1.63 3.5-.28 4.9 4.17 4.32 9.91 6.76 15.92 6.76h15.44c4.47 0 8.84-1.36 12.53-3.89l2.22-1.52c.74-.52.97-1.53.5-2.32z"
            fill="#FFF"
          />
          <polygon
            id="gangsta-teeth-closed"
            points="271.9,369.27 291.35,360.12 308.5,360.12 325.33,368.33 309.65,375.53 293.23,375.53"
            fill="#FFB300"
          />
          <path
            id="gangsta-bottom-closed"
            d="M331.55 369.27l-21.91 8.26c-1.04.39-2.12.59-3.21.59h-12.86c-1.09 0-2.17-.2-3.21-.59l-21.91-8.26 9.08-5.05h44.66l9.36 5.05z"
            fill="#4E342E"
          />
          <path
            id="gangsta-top-closed"
            d="M331.55 369.27H268.45l20.95-13.14c2.17-1.36 4.83-1.23 6.89.35l1.18.9c1.5 1.14 3.57 1.14 5.06 0l1.18-.9c2.06-1.58 4.72-1.71 6.89-.35l20.95 13.14z"
            fill="#3E2723"
          />
          <polygon
            id="gangsta-teeth-open"
            points="271.9,369.27 291.35,360.12 308.5,360.12 329.95,363.27 309.65,375.53 293.23,375.53"
            display="none"
            fill="#FFB300"
          />
          <path
            id="gangsta-bottom-open"
            d="M331.55 362.27l-21.91 15.26c-1.04.39-2.12.59-3.21.59h-12.86c-1.09 0-2.17-.2-3.21-.59l-21.91-9.26 9.08-2.05 29.48 3 15.19-6 9.35-.95z"
            display="none"
            fill="#4E342E"
          />
          <path
            id="gangsta-top-open"
            d="M331.55 362.27l-7.2 1-13.85-.46-42.05 6.46 20.95-13.14c2.17-1.36 4.83-1.23 6.89.35l1.18.9c1.5 1.14 3.57 1.14 5.06 0l1.18-.9c2.06-1.58 4.72-1.71 6.89-.35l20.95 6.14z"
            display="none"
            fill="#3E2723"
          />
          <circle cx="341.71" cy="262.48" r="10.19" />
          <path d="M314.7 259.4" fill="#5D4037" />
          <path
            d="M357.92 252.34l-9.8-2.88h-14.7l-11.53 3.98-9.36 9.56 3.12.45-.88 1.14 3.11 7.49 5.73 2.88 8.65 1.92h16.33l11.53-1.73 7.3-5.76v-2.62l2.5-3.14-12-11.29zm5.24 12.46c.64 1.1.4 2.53-.62 3.29-2.48 1.85-5.39 3.07-8.47 3.53l-1.56.23c-.95.15-1.89.22-2.84.22h-14.28c-1.7 0-3.39-.23-5.03-.68l-1.59-.44c-3.58-1-6.78-3.02-9.21-5.8-.69-.78-.58-1.99.21-2.66l3.82-3.27c3.68-2.44 7.91-3.97 12.31-4.41l1.68-.17h4.92c3.04 0 6.06.51 8.93 1.5 1.81.63 3.55 1.44 5.19 2.43l.54.33c1.64.99 3.17 2.16 4.56 3.47l1.44 2.43z"
            fill="#5D4037"
          />
          <path
            d="M318.67 319.34l-8.3 1.15-3.47 1.54c-4.38 1.95-9.4 1.91-13.75-.1l-3.14-1.45-8.68-1.15c-3.92 0-6.21-4.43-3.93-7.63l.46-.64c1.16-1.63 2.76-2.89 4.62-3.63 4.47-1.79 9.25-2.71 14.07-2.71h6.92c4.82 0 9.59.92 14.07 2.71 1.85.74 3.46 2 4.62 3.63l.46.64c2.26 3.21-.02 7.64-3.95 7.64z"
            fill="#3E2723"
          />
          <path d="M282.87 241.28l-26.86-7.08c-2.38-.63-4.91-.56-7.24.19l-18.89 6.09 4.34-8.04c1.18-2.18 3.06-3.98 5.41-5.17l10.85-5.5c1.2-.61 2.62-.77 3.95-.44l25.48 6.27c3.66.9 6.35 3.71 6.78 7.1l.43 3.35c.28 2.14-1.96 3.83-4.25 3.23z" />
          <path
            d="M234.55 264.11c2.44-4.12 6.26-7.24 10.78-8.81l3.58-1.25c1.77-.61 3.63-.93 5.5-.93h11.9c3.89 0 7.66 1.36 10.66 3.83l3.91 3.23c1.5 1.24 1.63 3.5.28 4.9-4.17 4.32-9.91 6.76-15.92 6.76H249.8c-4.47 0-8.84-1.36-12.53-3.89l-2.22-1.52c-.74-.52-.97-1.53-.5-2.32z"
            fill="#FFF"
          />
          <g>
            <circle cx="258.29" cy="262.48" r="10.19" />
            <path d="M285.3 259.4" fill="#5D4037" />
            <path
              d="M230.07 263.64l2.5 3.14v2.62l7.3 5.76 11.53 1.73h16.33l8.65-1.92 5.73-2.88 3.11-7.49-.88-1.14 3.12-.45-9.36-9.56-11.53-3.98h-14.7l-9.8 2.88-12 11.29zm8.18-1.26c1.39-1.31 2.93-2.48 4.56-3.47l.54-.33c1.64-.99 3.38-1.8 5.19-2.43 2.87-.99 5.89-1.5 8.93-1.5h4.92l1.68.17c4.4.45 8.63 1.97 12.31 4.41l3.82 3.27c.79.68.9 1.88.21 2.66-2.43 2.78-5.63 4.8-9.21 5.8l-1.59.44c-1.64.45-3.33.68-5.03.68H250.3c-.95 0-1.89-.07-2.84-.22l-1.56-.23c-3.08-.46-5.98-1.69-8.47-3.53-1.02-.76-1.27-2.19-.62-3.29l1.44-2.43z"
              fill="#5D4037"
            />
          </g>
          <polygon
            id="gangsta-blink"
            points="308.92,361.76 317.68,343.23 314.35,363.45 334.68,366.06 314.42,369.15 318.22,389.29 309.02,370.97 291.04,380.81 305.62,366.4 290.71,352.35"
            opacity="0"
            fill="#FFF"
          />
          <g id="gangsta-hat">
            <path
              d="M404.48 213.73l-204.4-1.14.18-1.86 6.27-63.01c3.65-27 21.45-49.3 42.55-57.91l3.44-1.4c32.83-13.41 68.3-13.2 100.98.58l3.36 1.42c20.99 8.86 38.54 31.35 41.89 58.37l5.73 64.95z"
              fill="#BDBDBD"
            />
            <path
              d="M403.45 202.05l101.02.88c4.63.03 8.35 3.8 8.33 8.42l-.02 3.06-108.81-.61-.52-11.75z"
              fill="#424242"
            />
          </g>
          <g id="gangsta-notes">
            <path
              d="M576.37 239.06v11.06l-2.99-11.95c-.76-3.03-2-5.92-3.68-8.56-1.28-2.01-2.79-3.85-4.51-5.47s-3.63-3.05-5.7-4.22l-4.64-2.63c-.81-.46-1.59-.95-2.35-1.48l-5.75-4.02v70.23c0 6.84-9.35 12.39-20.89 12.39-11.54 0-20.89-5.55-20.89-12.39s9.35-12.39 20.89-12.39c6.33 0 12.01 1.67 15.84 4.31v-85.56h5.05c3.62 9.66 9.48 18.31 17.09 25.27l2.2 2.01c3.17 2.9 5.72 6.41 7.49 10.32.93 2.05 1.63 4.19 2.11 6.39.49 2.2.73 4.44.73 6.69z"
              opacity="0"
            />
            <path
              d="M204.1 76.78v8.36l-2.26-9.03c-.57-2.29-1.51-4.47-2.78-6.47-.97-1.52-2.11-2.91-3.41-4.14s-2.74-2.3-4.31-3.19l-3.51-1.99c-.61-.34-1.2-.72-1.78-1.12l-4.34-3.04v53.06c0 5.17-7.07 9.36-15.78 9.36-8.72 0-15.78-4.19-15.78-9.36s7.07-9.36 15.78-9.36c4.78 0 9.07 1.26 11.96 3.26V38.49h3.82c2.74 7.3 7.16 13.84 12.91 19.09l1.66 1.52c2.4 2.19 4.32 4.84 5.66 7.8.7 1.55 1.23 3.17 1.59 4.82.39 1.66.57 3.36.57 5.06z"
              opacity="0"
            />
            <path
              d="M449.18 349.83v109.01c0 7.97-10.89 14.43-24.31 14.43-13.43 0-24.32-6.46-24.32-14.43s10.89-14.43 24.32-14.43c7.37 0 13.98 1.95 18.44 5.02v-99.61h5.87z"
              opacity="0"
            />
            <path
              d="M125.73 402.43v9.23l-2.49-9.97c-.63-2.53-1.67-4.94-3.07-7.14-1.07-1.68-2.33-3.21-3.76-4.57-1.43-1.36-3.03-2.54-4.76-3.52l-3.87-2.19c-.67-.38-1.33-.79-1.96-1.24l-4.8-3.36v58.63c0 5.71-7.81 10.35-17.44 10.35-9.63 0-17.44-4.63-17.44-10.35s7.81-10.35 17.44-10.35c5.29 0 10.02 1.4 13.22 3.6v-71.43h4.22c3.02 8.06 7.91 15.29 14.27 21.1l1.84 1.68c2.65 2.42 4.78 5.35 6.26 8.62.78 1.71 1.36 3.5 1.76 5.33.38 1.82.58 3.69.58 5.58z"
              opacity="0"
            />
            <path
              d="M462.27 127.6v6.21l-1.68-6.7c-.43-1.7-1.12-3.32-2.06-4.8-.72-1.13-1.57-2.16-2.53-3.07-.96-.91-2.03-1.71-3.2-2.37l-2.6-1.47c-.45-.26-.89-.53-1.32-.83l-3.22-2.26v39.41c0 3.84-5.25 6.96-11.72 6.96-6.47 0-11.72-3.11-11.72-6.96 0-3.84 5.25-6.95 11.72-6.95 3.55 0 6.74.94 8.89 2.42V99.16h2.83c2.03 5.42 5.32 10.28 9.59 14.18l1.23 1.13c1.78 1.63 3.21 3.6 4.21 5.79.52 1.15.92 2.35 1.18 3.58.27 1.24.4 2.49.4 3.76z"
              opacity="0"
            />
            <path
              d="M125.73 174.13v87.03c0 6.36-8.69 11.52-19.41 11.52s-19.41-5.16-19.41-11.52 8.69-11.52 19.41-11.52c5.88 0 11.16 1.55 14.72 4.01v-79.52h4.69z"
              opacity="0"
            />
            <path
              d="M286.45 502.62v8.75l-2.36-9.46c-.6-2.4-1.58-4.69-2.91-6.77-1.01-1.59-2.21-3.04-3.57-4.33-1.36-1.29-2.87-2.41-4.51-3.34l-3.67-2.08c-.64-.36-1.26-.75-1.86-1.17l-4.55-3.18v55.58c0 5.42-7.4 9.81-16.53 9.81s-16.53-4.39-16.53-9.81c0-5.42 7.4-9.81 16.53-9.81 5.01 0 9.5 1.32 12.53 3.41V462.5h4c2.87 7.64 7.5 14.5 13.53 20l1.74 1.59c2.51 2.29 4.53 5.07 5.93 8.17.74 1.63 1.29 3.32 1.67 5.05.37 1.75.56 3.53.56 5.31z"
              opacity="0"
            />
          </g>
          <path
            id="gangsta-glasses"
            d="M384.82-51.68l-3.63 21.3c-2.52 14.79-15.3 25.64-30.3 25.72l-10.04.05c-15.32.08-28.38-11.07-30.71-26.21-.34-2.08-1.3-4.59-2.16-6.56-1.28-2.93-4.01-5.07-7.19-5.34-.53-.05-1.06-.05-1.59 0-3.18.27-5.91 2.42-7.19 5.34-.86 1.97-1.82 4.48-2.16 6.56-2.33 15.14-15.39 26.29-30.71 26.21l-10.04-.05c-15-.08-27.78-10.92-30.3-25.72l-3.63-21.3h169.65z"
          />
        </g>
      </svg>
    )
  }
}
