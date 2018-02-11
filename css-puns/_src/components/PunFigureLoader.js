import inBrowser from "../inBrowser"
import { Component } from "react"
import { punIndex } from "../data"

class PunFigureLoader extends Component {
  state = {
    isActive: false,
    isClose: false,
    Animation: null
  }

  componentWillMount() {
    this.init()
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps)
  }

  init(props = this.props) {
    const currentIndex = punIndex(props.data)
    const isActive = currentIndex === props.activeIndex
    const isPrev = currentIndex === props.activeIndex - 1
    const isNext = currentIndex === props.activeIndex + 1
    const isClose = isActive || isPrev || isNext

    this.setState({ isActive, isClose })

    if (!isClose || this.state.Animation) return

    inBrowser &&
      import(`../animations/${props.data
        .slug}`).then(({ default: Animation }) => {
        this.setState({ Animation })
      })
  }

  render() {
    return this.props.children(this.state)
  }
}

export default PunFigureLoader
