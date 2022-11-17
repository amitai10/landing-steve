import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 650px) {
    margin: 0px 15vw;
    max-width: 650;
    padding: 0 1rem;
    background-color: white;
  }
`;

export default function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}