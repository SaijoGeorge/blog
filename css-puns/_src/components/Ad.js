import inBrowser from "../inBrowser"
import React, { Component } from "react"
import styled from "styled-components"
import { font, length, borderRadius, rem, min } from "../styles"
import debounce from "lodash.debounce"

const AdWrapper = styled.div`
  box-sizing: border-box;
  max-width: ${rem(400)};
  min-height: ${rem(100)};
  width: 100%;
  min-height: ${rem(130)};
  position: relative;
  margin-top: ${rem(length.spacer / 2)};
  ${min(500)`margin-top: ${rem(length.spacer)}`};
  margin-right: auto;
  margin-left: auto;
  font-size: ${rem(font.small - 2)};
  ${min(800)`font-size: ${rem(font.small)}`};
  line-height: 1.75;
  ${font.secondary};
  border-radius: ${borderRadius}px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  ${min(500)`
    padding: ${rem(length.gap)};
    background-color: rgba(255, 255, 255, .2);
  `} .carbon-img {
    float: left;
    margin-right: ${rem(length.gap)};
  }

  .carbon-img > img {
    display: block;
    border-radius: ${borderRadius / 2}px;
  }

  .carbon-poweredby {
    display: block;
    opacity: .7;
  }
`

class Ad extends Component {
  componentDidMount() {
    this.load()
  }

  load() {
    if (!inBrowser) return

    this.script = document.createElement("script")
    this.script.src =
      "https://cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=csspuns"
    this.script.async = true
    this.script.id = "_carbonads_js"
    this.el.appendChild(this.script)
  }

  reload = debounce(() => {
    this.el.innerHTML = ""
    this.load()
  }, 1000)

  componentWillReceiveProps(nextProps) {
    if (this.props.activeIndex !== nextProps.activeIndex) {
      this.reload()
    }
  }

  render() {
    return <AdWrapper innerRef={el => (this.el = el)} {...this.props} />
  }
}

export default Ad
