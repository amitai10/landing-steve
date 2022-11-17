import React from 'react'
import styled from "styled-components";
import { withPrefix } from "gatsby";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconContainer = styled.div`
  width: ${(props) => props.width};
  cursor: pointer;
  margin: 10px;
`

const Icon = styled.img`
`


export default function ContactIcons() {
  return (
    <Container>
      <IconContainer width="60px" onClick={() => window.open('https://www.facebook.com/steve.frenkel.1', '_blank')}>
        <Icon src={withPrefix(`/images/facebook.png`)} />
      </IconContainer>
      <IconContainer  width="45px" onClick={() => window.open('https://wa.me/972528083737')}>
        <Icon src={withPrefix(`/images/whatsapp.svg`)}/>
      </IconContainer>
    </Container>

  )
}
