import React from 'react';
import styled from 'styled-components';
import {
  ocean
} from "../styles/colors";

const Container = styled.div`
  background: ${ocean};
  text-decoration: none;
  transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 5px;
  align-self: end;
  width: 100%
`
const Text = styled.div`
  margin: 3px;
  color: white;
`
export default function Button({text, onClick}) {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  )
}
