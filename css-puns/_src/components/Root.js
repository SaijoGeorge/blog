import inBrowser from "../inBrowser"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../styles/global"
import "../libs/MorphSVGPlugin" // Instead of CommonsChunkPlugin
import { speed } from "../styles"
import { puns, punIndex, punFromIndex, punFromSlug } from "../data"
import Wrapper from "./Wrapper"
import Container from "./Container"
import Meta from "./Meta"
import Header from "./Header"
import Logo from "./Logo"
import About from "./About"
import Newsletter from "./Newsletter"
import Btn from "./Btn"
import Nav from "./Nav"
import NavLink from "./NavLink"
import Arrow from "./Arrow"
import Slider from "./Slider"
import Pun from "./Pun"
import Ad from "./Ad"
import Footer from "./Footer"
import LoadGumroad from "./LoadGumroad"

class Root extends Component {
  state = {
    currentPun: null
  }

  componentWillMount() {
    const currentPun = punFromSlug(this.props.match.params.pun)
    this.setState({ currentPun })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.currentPun.slug !== nextProps.match.params.pun ||
      this.state.currentPun.slug !== nextState.currentPun.slug
    )
  }

  changeSlide = punIndex => {
    const currentPun = punFromIndex(punIndex)
    this.setState({ currentPun })
  }

  changeHistory = punIndex => {
    this.props.history.replace(`/${punFromIndex(punIndex).slug}/`)
  }

  goToFirstSlide = e => {
    e.preventDefault()
    this.changeSlide(0)
  }

  render() {
    const { currentPun } = this.state
    const { color } = currentPun
    const activeIndex = punIndex(currentPun)
    // console.log("Root render")

    return (
      <Wrapper color={color}>
        <Meta currentPun={currentPun} />
        <Container>
          <Header>
            <Link to="/" onClick={this.goToFirstSlide}>
              <Logo />
            </Link>
            <About color={color} />
            <Newsletter color={color} />
          </Header>
          <Nav>
            <NavLink
              prev
              currentPun={currentPun}
              color={color}
              onNavigate={this.changeSlide}
            >
              <Arrow left />
            </NavLink>
            <NavLink
              currentPun={currentPun}
              color={color}
              onNavigate={this.changeSlide}
            >
              <Arrow />
            </NavLink>
          </Nav>
        </Container>
        {inBrowser ? (
          <Slider
            activeIndex={activeIndex}
            onSlideChangeStart={this.changeSlide}
            onSlideChangeEnd={this.changeHistory}
            speed={speed}
          >
            {puns.map((pun, i) => (
              <div key={i} className="swiper-slide">
                <Pun data={pun} activeIndex={activeIndex} />
              </div>
            ))}
          </Slider>
        ) : (
          <Pun data={currentPun} activeIndex={activeIndex} />
        )}
        <Container>
          <Ad activeIndex={activeIndex} />
          <Footer />
        </Container>
        {/*<LoadGumroad />*/}
      </Wrapper>
    )
  }
}

export default Root
