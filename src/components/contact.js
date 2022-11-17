import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  direction: rtl;
  @media (min-width: 650px) {
    margin: 0 20px;
  }
`;

const UL = styled.ul`

`;

const Mail = styled.a`

`;

const LI = styled.li`
`;

const Title = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
`;

const Text = styled.span`

`;

export default function Contact() {
  return (
    <Container>
      <Title>ניתן לתאם:</Title>
      <UL>
        <LI>טיפולים פרטניים</LI>
        <LI>הדרכות למטפלים</LI>
        <LI>קבוצות עבודה בטבע</LI>
        <LI>סדנאות חד פעמיות</LI>
      </UL> 
      <Text>מוזמנים ליצור קשר בטלפון 050-8615402 או במייל</Text>
      <Mail href="mailto:anati.barnea@gmail.com"> anati.barnea@gmail.com</Mail>
      <br />
      <Text>או להשאיר פרטים ואני אחזור אליכם:</Text>
    </Container>
  )
}
