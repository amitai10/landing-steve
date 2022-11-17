import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  background: red;
  display: inline-block;
`
const Text = styled.div`
  color: white;
  margin: 5px;
`

export default function LinkButton({text, link}) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}
