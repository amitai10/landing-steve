import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #bdf1ff;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}