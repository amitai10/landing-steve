import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby";

import {
  lightGreen2
} from "../styles/colors";
import Button from "./button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  @media (min-width: 650px) {
    width: 50%;
  }
  margin: 20px;
  align-items: center;
  position: relative;

`

const Title = styled.div`
  font-weight: bold;
    font-size: 120%;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    background: ${lightGreen2};
    width: 100%;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.35);
`

const Text = styled.div`
  @media (min-width: 650px) {
  }
  margin-bottom: 50px;
`

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%
`

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  min-width: 150px;
  margin: 0px 0px 10px 0px;
  float: right;
`



export default function Section({ data }) {
  const { title, image, text, buttonText, onClick } = data

  const click = () => {
    onClick()
  }
  return (
    <Container>
      <ImageContainer>
        <Image src={withPrefix(image)} />
      </ImageContainer>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
      <ButtonContainer>
        <Button text={buttonText} onClick={() => click()}></Button>
      </ButtonContainer>
    </Container>
  )
}
