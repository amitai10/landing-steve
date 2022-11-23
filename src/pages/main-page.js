import React, {useRef} from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
  skyBlue,
  lightBlue,
  lightGreen,
  blushPink,
  green2,
  cream,
  turkey,
  lightGreen2
} from "../styles/colors";

import Layout from "../components/layout"
import Title from "../components/title"
import ContactIcons from "../components/contact-icons"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
  background-color: white;
  color: rgba(106, 69, 37);
`


const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 70%;
  min-width: 150px;
  align-self: center;
`

const Banner = styled.div`
  height: 230px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 15px solid ${blushPink}; */
`
const Padding = styled.div`
  padding: 30px;
`
const ContactPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const LogoContainer = styled.div`
  width: 12rem;
  margin-right: 20px;
  margin-top: 10px;
`

const Logo = styled.img`
  margin-bottom: 0;
`

const SubTitle = styled.div`
  font-size: 200%;
  font-weight: bold;
  align-self: center;
  margin: 20px;
  text-align: center;
`

const Border = styled.div`
  height: 10px;
  width: 100%;
  background: ${blushPink};
  margin-bottom: 20px;
`

const SectionContainer = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export default function Main() {
  const contact = useRef(null);
    
  return (
    <div>
      <Layout>
        <Container>
          <Banner>
            <LogoContainer>
              <Logo src={withPrefix(`/images/logo.jpeg`)} alt="מהמטבח של סטיב" />
            </LogoContainer>
          </Banner>
            <Title />
            <ContactIcons />
            <Image src={withPrefix(`/images/pic.jpeg`)} alt="מהמטבח של סטיב" />
        </Container>
      </Layout>
    </div>
  )
}
 