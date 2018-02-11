import styled from "styled-components"
import { z, rem, min } from "../styles"
import inBrowser from "../inBrowser"

const PunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  position: relative;
  z-index: ${z("pun")};
  visibility: hidden;

  ${min(768)`margin-top: ${rem(-30)};`} .swiper-slide-prev &,
    .swiper-slide-active &,
    .swiper-slide-next & {
    height: auto;
    visibility: visible;
  }

  ${!inBrowser &&
    `
    height: auto;
    visibility: visible;
  `};
`

export default PunWrapper
