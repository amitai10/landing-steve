import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Switches between the two sides of the business: event catering and ready-made home meals
const TABS = [
  {
    key: "catering",
    to: "/",
    title: "קייטרינג לאירועים",
    subtitle: "אירועי בוטיק ומגשי אירוח",
  },
  {
    key: "meals",
    to: "/menu/",
    title: "אוכל ביתי במשלוחים",
    subtitle: "אוכל ביתי בקופסאות, מוכן לחימום",
  },
]

const TabsWrap = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: -38px;
  padding: 0 16px;

  @media (max-width: 600px) {
    margin-top: -30px;
  }
`

const TabsTrack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  width: min(640px, 100%);
  padding: 6px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 14px 30px rgba(0,0,0,0.16);
`

const TabLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 12px 10px;
  border-radius: 18px;
  text-decoration: none;
  text-shadow: none;
  text-align: center;
  background: ${props => props.$active ? "#333" : "transparent"};
  color: ${props => props.$active ? "#ffc74c" : "#333"};
  transition: background 200ms ease, color 200ms ease;

  &:hover {
    background: ${props => props.$active ? "#333" : "rgba(0,0,0,0.06)"};
  }

  @media (max-width: 600px) {
    padding: 10px 6px;
    border-radius: 16px;
  }
`

const TabTitle = styled.span`
  font-weight: 800;
  font-size: 1.15rem;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`

const TabSubtitle = styled.span`
  font-size: 0.85rem;
  line-height: 1.2;
  opacity: ${props => props.$active ? 0.9 : 0.65};
  color: ${props => props.$active ? "#fff" : "inherit"};

  @media (max-width: 600px) {
    font-size: 0.72rem;
  }
`

export default function ModeTabs({ active }) {
  return (
    <TabsWrap aria-label="סוגי שירות">
      <TabsTrack>
        {TABS.map(tab => {
          const isActive = tab.key === active
          return (
            <TabLink
              key={tab.key}
              to={tab.to}
              $active={isActive}
              aria-current={isActive ? "page" : undefined}
            >
              <TabTitle>{tab.title}</TabTitle>
              <TabSubtitle $active={isActive}>{tab.subtitle}</TabSubtitle>
            </TabLink>
          )
        })}
      </TabsTrack>
    </TabsWrap>
  )
}
