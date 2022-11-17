import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  @media (min-width: 650px) {
    margin: 20px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 120%;
  margin-bottom: 10px;
`;

const Body = styled.div`
  /* display: flex; */
`;

const Text = styled.div`
  
`;

const ImageContainer = styled.div`
  margin-left: 20px;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 250px;
  min-width: 150px;
  margin: 3px 0px 0px 8px;
  float: right;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export default function HSection({data}) {
  const { title, image, text} = data;
  return (
    <Container>
      <Title>{title}</Title>
      <Body>
        <Image src={withPrefix(image)}  />
        <Text dangerouslySetInnerHTML={{__html: text}}></Text>
      </Body>
      
    </Container>
  )
}
