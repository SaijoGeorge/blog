import React from "react"
import styled, { css } from "styled-components"
import { tint } from "polished"
import { rem, min, z, speed } from "../styles"
import { Link as RouterLink } from "react-router-dom"
import { puns, punIndex, punFromIndex } from "../data"

const Link = styled(RouterLink)`
  -webkit-tap-highlight-color: transparent;
  transition: color ${speed}ms;

  * {
    cursor: inherit;
  }

  ${p =>
    p.disabled &&
    p.color &&
    css`
      color: ${p => tint(0.7, p.color)};
      pointer-events: none !important;
    `};
`

const punsLength = puns.length

const NavLink = ({ currentPun, prev, onNavigate, ...props }) => {
  const currentPunIndex = punIndex(currentPun)

  const prevIndex = currentPunIndex > 0 ? currentPunIndex - 1 : ""
  const nextIndex = currentPunIndex + 1 < punsLength ? currentPunIndex + 1 : ""
  const index = prev ? prevIndex : nextIndex

  const prevLink =
    currentPunIndex > 0 ? `/${punFromIndex(prevIndex).slug}/` : ""
  const nextLink =
    currentPunIndex + 1 < punsLength ? `/${punFromIndex(nextIndex).slug}/` : ""
  const link = prev ? prevLink : nextLink

  return (
    <Link
      to={link || "#"}
      disabled={!link}
      replace
      {...props}
      onClick={e => {
        e.preventDefault()
        onNavigate(index)
      }}
    />
  )
}

export default NavLink
