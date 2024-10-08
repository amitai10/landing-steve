import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`

const MainTitle = styled.div`
  font-size: 2em;
  @media (min-width: 650px) {
    margin-top: 20px;
  }
  margin-bottom: 10px;
  text-align: center;
  line-height: 35px;
`

const MainTitle2 = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 10px;
`
const LinkContainer = styled.div`
    display: flex;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: column;
    cursor: pointer;
    background-color: #BDF1FF;
    padding: 15px;
    border-radius: 15px;
`

const Link = styled.a`
  font-size: 1em;
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;
  @media (min-width: 650px) {
    font-size: 3em;
  }
`

const SubTitle = styled.div`
  font-size: 1.0em;
  @media (min-width: 650px) {
    font-size: 1.5em;
  }
  text-align: center;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  // @media (min-width: 650px) {
  //    font-size: 3em;
  // }
`

const LinkHeader = styled.div`
    font-size: 0.8em;
    align-self: end;
`
const LinkContent = styled.div`
  font-size: 3em;
  line-height: 0.8;
`

export default function Title() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subTitle
            logo
          }
        }
      }
    `
  )

  const { title, subTitle, logo } = data.site.siteMetadata

  // const isTabletOrMobile = useMediaQuery({ maxWidth: 650 })

  return (
    <Container>
      {/* {isTabletOrMobile ? (
        <div>
          <MainTitle2>להזמנות 052-8083737</MainTitle2>
          <Link style="text-decoration:none" href="http://catalog4u.minicard.co.il/card/steve-frenkel/">לקטלוג המלא</Link>
        </div>
      ) : (
        )} */}
      <MainTitle>{title}</MainTitle>
      <SubTitle>להזמנות 052-8083737</SubTitle>
      <Links>
        <LinkContainer onClick={() => window.open("http://bit.ly/3MtcDBu", "_blank")}>
          <LinkHeader>תפריט לאירוע
          </LinkHeader>
          <LinkContent>חלבי
          </LinkContent>
        </LinkContainer>
        <LinkContainer onClick={() => window.open("http://bit.ly/4cRgrXZ", "_blank")}>
          <LinkHeader>תפריט לאירוע
          </LinkHeader>
          <LinkContent>בשרי
          </LinkContent>
        </LinkContainer>
      </Links>


    </Container>
  )
}
