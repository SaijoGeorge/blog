import inBrowser from "../inBrowser"
import React from "react"
import PunWrapper from "./PunWrapper"
import PunFigureLoader from "./PunFigureLoader"
import PunFigure from "./PunFigure"
import PunImg from "./PunImg"
import PunFigurePlaceholder from "./PunFigurePlaceholder"
import PunDetails from "./PunDetails"
import PunCode from "./PunCode"
import PunBtn from "./PunBtn"
import {
  SocialLinksGroup,
  TwitterLink,
  FacebookLink,
  GoogleLink,
  LinkedInLink,
  EmailLink
} from "./PunSocialLinks"
import PunAuthor from "./PunAuthor"
import TextLink from "./TextLink"
import PunActions from "./PunActions"

const Pun = ({ data, activeIndex }) => {
  const {
    slug,
    title,
    author,
    code,
    color,
    fontSize,
    customFigureStyles,
    notForSale
  } = data

  const CustomPunFigure = customFigureStyles
    ? PunFigure.extend`
        ${customFigureStyles};
      `
    : PunFigure

  // console.log("Pun render")

  return (
    <PunWrapper>
      <PunFigureLoader data={data} activeIndex={activeIndex}>
        {({ Animation, isActive }) => (
          <CustomPunFigure>
            {inBrowser && Animation && <Animation isActive={isActive} />}
            <PunFigurePlaceholder loaded={Animation} color={color} />
            {!inBrowser && (
              <noscript>
                <PunImg
                  src={`/css-puns/_assets/puns/${slug}.png`}
                  alt={title}
                />
              </noscript>
            )}
          </CustomPunFigure>
        )}
      </PunFigureLoader>

      <PunDetails>
        <PunCode code={code} fontSize={fontSize} color={color} />
        <PunActions>
          {!notForSale && <PunBtn slug={slug} color={color} />}
          <SocialLinksGroup>
            <TwitterLink slug={slug} color={color} />
            <FacebookLink slug={slug} color={color} />
            <GoogleLink slug={slug} color={color} />
            <LinkedInLink slug={slug} color={color} />
            <EmailLink slug={slug} color={color} />
          </SocialLinksGroup>
          {author && (
            <PunAuthor>
              {"By: "}
              <TextLink href={`https://twitter.com/${author}`} external>
                {author}
              </TextLink>
            </PunAuthor>
          )}
        </PunActions>
      </PunDetails>
    </PunWrapper>
  )
}

export default Pun
