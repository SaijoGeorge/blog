import React from "react"
import styled from "styled-components"
import Btn from "./Btn"
import Modal from "./Modal"
import { rem, max } from "../styles"

const Container = styled.div`
  max-width: calc(100vw - ${rem(60)});
  width: 100%;
  padding: 10%;
  ${max(800)`padding-top: 16%`};
  ${max(500)`align-self: flex-start`};
  text-align: center;
`

const PunBtn = styled(p => <Btn {...p}>👕 Buy Merch</Btn>)`
  flex: 1;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-30px);
  }
`

let PunBtnWithModal = ({ color, slug }) => (
  <Modal
    noOverlay
    wrapper={Wrapper}
    button={props => <PunBtn fill color={color} {...props} />}
    content={
      <Container>
        <svg
          style={{ width: "100%" }}
          viewBox="0 0 2390.1 872"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <Link
            xlinkHref={`https://gum.co/css-puns-${slug}-poster`}
            target="_blank"
            rel="noopener"
            id="poster"
          >
            <rect x="1792.6" fill="#FFFFFF" width="597.5" height="872" />
            <g>
              <g opacity="0.4">
                <g>
                  <g>
                    <polygon
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                      points="2074,330.3 2057.1,359.7 2023.2,359.7 2057.1,301"
                    />
                    <polygon
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                      points="2159.6,359.7 2057.1,359.7 2074,330.3 2108.3,270.9"
                    />
                  </g>
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    d="M2198.1,325.4c0,58.9-47.8,106.7-106.7,106.7s-106.7-47.8-106.7-106.7s47.8-106.7,106.7-106.7S2198.1,266.5,2198.1,325.4z"
                  />
                </g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  d="M2178.8,475.3V521c0,5.6-4.6,10.1-10.1,10.1H2014c-5.6,0-10.1-4.6-10.1-10.1v-45.7c0-5.6,4.6-10.1,10.1-10.1h154.7C2174.3,465.2,2178.8,469.7,2178.8,475.3z"
                />
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  d="M2232.5,165.9h-24v10.8c0,2.1-1.7,3.9-3.9,3.9H2183c-2.1,0-3.9-1.7-3.9-3.9v-10.8h-175.5v10.8c0,2.1-1.7,3.9-3.9,3.9h-21.6c-2.1,0-3.9-1.7-3.9-3.9v-10.8h-24c-7.4,0-13.4,6-13.4,13.4v391.3c0,7.4,6,13.4,13.4,13.4h282.3c7.4,0,13.4-6,13.4-13.4V179.3C2245.9,171.9,2239.9,165.9,2232.5,165.9z"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  x1="1989"
                  y1="151.2"
                  x2="1989"
                  y2="104.3"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  d="M2179.1,165.9v-10.8c0-2.1,1.7-3.9,3.9-3.9h21.6c2.1,0,3.9,1.7,3.9,3.9v10.8"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  d="M1974.3,165.9v-10.8c0-2.1,1.7-3.9,3.9-3.9h21.6c2.1,0,3.9,1.7,3.9,3.9v10.8"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  x1="2193.8"
                  y1="151.2"
                  x2="2193.8"
                  y2="104.3"
                />
              </g>
            </g>
            <text
              transform="matrix(1 0 0 1 1939.3018 761.864)"
              fontFamily="Roboto Mono"
              fontWeight="500"
              fontSize="84.4688px"
            >
              POSTER
            </text>
          </Link>
          <Link
            xlinkHref={`https://gum.co/css-puns-${slug}-case`}
            target="_blank"
            rel="noopener"
            id="case"
          >
            <rect x="1195.1" fill="#FFFFFF" width="597.5" height="872" />
            <g>
              <path
                fill="none"
                stroke="#000000"
                strokeWidth="10"
                d="M1573.7,583.9H1414c-19.3,0-35-15.7-35-35V169.4c0-19.3,15.7-35,35-35h159.7c19.3,0,35,15.7,35,35v379.5C1608.7,568.3,1593,583.9,1573.7,583.9z"
              />
              <g>
                <line
                  opacity="0.4"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  x1="1379"
                  y1="185.3"
                  x2="1608.7"
                  y2="185.3"
                />

                <line
                  opacity="0.4"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  x1="1379"
                  y1="533.1"
                  x2="1608.7"
                  y2="533.1"
                />
              </g>
              <g opacity="0.4">
                <circle
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  cx="1423.9"
                  cy="161.4"
                  r="10.2"
                />
                <circle
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  cx="1455"
                  cy="161.4"
                  r="5.1"
                />
              </g>
              <g opacity="0.4">
                <g>
                  <polygon
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    points="1480.2,360.8 1466.9,383.9 1440.2,383.9 1466.9,337.8"
                  />
                  <polygon
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    points="1547.5,383.9 1466.9,383.9 1480.2,360.8 1507.2,314.1"
                  />
                </g>
                <ellipse
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  cx="1493.9"
                  cy="356.9"
                  rx="83.9"
                  ry="83.9"
                />
              </g>
            </g>
            <text
              transform="matrix(1 0 0 1 1392.457 761.864)"
              fontFamily="Roboto Mono"
              fontWeight="500"
              fontSize="84.4688px"
            >
              CASE
            </text>
          </Link>
          <Link
            xlinkHref={`https://gum.co/css-puns-${slug}-mug`}
            target="_blank"
            rel="noopener"
            id="mug"
          >
            <rect x="597.5" fill="#FFFFFF" width="597.5" height="872" />
            <g>
              <g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  d="M1007.8,583.9H784.7c-19.3,0-35-15.7-35-35V240.8c0-8.1,6.6-14.7,14.7-14.7h263.7c8.1,0,14.7,6.6,14.7,14.7v308.1C1042.8,568.3,1027.1,583.9,1007.8,583.9z"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  x1="837.1"
                  y1="177.3"
                  x2="837.1"
                  y2="140.8"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  x1="896.3"
                  y1="177.3"
                  x2="896.3"
                  y2="70.3"
                />
                <line
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  x1="955.5"
                  y1="177.3"
                  x2="955.5"
                  y2="127.3"
                />
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="10"
                  d="M1082.1,492.2h-39.3V317.8h39.3c30.1,0,54.5,24.4,54.5,54.5v65.5C1136.5,467.8,1112.1,492.2,1082.1,492.2z"
                />
              </g>
              <g opacity="0.4">
                <g>
                  <polygon
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    points="879.5,409.8 863.2,438.1 830.5,438.1 863.2,381.5"
                  />
                  <polygon
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    points="962.1,438.1 863.2,438.1 879.5,409.8 912.6,352.4"
                  />
                </g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  d="M999.3,405c0,56.9-46.1,103-103,103s-103-46.1-103-103s46.1-103,103-103S999.3,348.2,999.3,405z"
                />
              </g>
            </g>
            <text
              transform="matrix(1 0 0 1 820.241 761.864)"
              fontFamily="Roboto Mono"
              fontWeight="500"
              fontSize="84.4688px"
            >
              MUG
            </text>
          </Link>
          <Link
            xlinkHref={`https://gum.co/css-puns-${slug}-tshirt`}
            target="_blank"
            rel="noopener"
            id="tshirt"
          >
            <rect fill="#FFFFFF" width="597.5" height="872" />
            <g>
              <g opacity="0.4">
                <g>
                  <g>
                    <polygon
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                      points="286.9,331.1 275.2,351.2 252,351.2 275.2,310.9"
                    />
                    <polygon
                      fill="none"
                      stroke="#000000"
                      strokeWidth="5"
                      points="345.7,351.2 275.2,351.2 286.9,331.1 310.4,290.2"
                    />
                  </g>
                  <ellipse
                    fill="none"
                    stroke="#000000"
                    strokeWidth="5"
                    cx="298.8"
                    cy="327.7"
                    rx="73.3"
                    ry="73.3"
                  />
                </g>
                <path
                  fill="none"
                  stroke="#000000"
                  strokeWidth="5"
                  d="M358.9,430.7v31.4c0,3.8-3.1,6.9-6.9,6.9H245.7c-3.8,0-6.9-3.1-6.9-6.9v-31.4c0-3.8,3.1-6.9,6.9-6.9H352C355.8,423.7,358.9,426.9,358.9,430.7z"
                />
              </g>
              <path
                opacity="0.4"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                d="M372.2,134.5c0,40.5-32.8,73.3-73.3,73.3s-73.3-32.8-73.3-73.3"
              />
              <path
                fill="none"
                stroke="#000000"
                strokeWidth="10"
                d="M356.6,134.5c10.3,0,20.6,1.5,30.5,4.4l3.3,1.1c50.3,17.1,90.2,55.9,108.8,105.6l26.2,70.1l-91.6,54.2v198.5c0,8.6-7,15.6-15.6,15.6H179.4c-8.6,0-15.6-7-15.6-15.6V369.9l-91.6-54.2l26.2-70.1C117,195.9,157,157.1,207.2,140l3.3-1.1c9.9-2.9,20.2-4.4,30.5-4.4L356.6,134.5L356.6,134.5z"
              />

              <line
                opacity="0.4"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                x1="163.8"
                y1="369.9"
                x2="163.8"
                y2="300.7"
              />

              <line
                opacity="0.4"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                x1="433.8"
                y1="369.9"
                x2="433.8"
                y2="300.7"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 146.6988 761.864)"
              fontFamily="Roboto Mono"
              fontWeight="500"
              fontSize="84.4688px"
            >
              TSHIRT
            </text>
          </Link>
        </svg>
      </Container>
    }
  />
)

export default PunBtnWithModal
