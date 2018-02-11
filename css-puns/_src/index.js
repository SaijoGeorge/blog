import inBrowser from "./inBrowser"
import React from "react"
import Helmet from "react-helmet"
import { render } from "react-dom"
import { renderToString } from "react-dom/server"
import { BrowserRouter, Route } from "react-router-dom"
import { StaticRouter } from "react-router"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import Root from "./components/Root"
import html from "./html"

if (inBrowser) {
  render(
    <BrowserRouter basename="/css-puns">
      <Route path="/:pun*" component={Root} />
    </BrowserRouter>,
    document.getElementById("root")
  )
}

export default ({ path, webpackStats }) => {
  const sheet = new ServerStyleSheet()
  const root = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter basename="/css-puns" location={path}>
        <Route path="/:pun*" component={Root} />
      </StaticRouter>
    </StyleSheetManager>
  )
  const head = Helmet.rewind()
  const styles = sheet.getStyleTags()

  let scripts = Object.keys(webpackStats.compilation.assets).filter(value =>
    value.match(/\.js$/)
  )
  // Move main bundle to the front
  scripts = [...scripts.splice(-1), ...scripts]
  const mainBundle = scripts[0]

  return html({ head, styles, scripts, mainBundle, root })
}
