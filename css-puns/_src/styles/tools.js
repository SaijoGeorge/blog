import { css } from "styled-components"
import { zOrder } from "."

export const min = (pxWidth, conditions = "") => (...args) => css`
  @media (min-width: ${pxWidth / 16}em) ${conditions} {
    ${css(...args)}
  }
`

export const max = (pxWidth, conditions = "") => (...args) => css`
  @media (max-width: ${pxWidth / 16}em) ${conditions} {
    ${css(...args)}
  }
`

export const rem = px => `${px / 16}rem`

export const em = (px, em = 16) => `${px / em}em`

export const z = element => zOrder.indexOf(element) + 1
