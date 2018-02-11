import inBrowser from "../inBrowser"
import { Component } from "react"

class LoadGumroad extends Component {
  componentDidMount() {
    if (!inBrowser) return
    if (window.matchMedia("(max-width: 768px)").matches) return

    this.script = document.createElement("script")
    this.script.src = "https://gumroad.com/js/gumroad.js"
    this.script.async = true
    document.body.appendChild(this.script)
  }

  render() {
    return null
  }
}

export default LoadGumroad
