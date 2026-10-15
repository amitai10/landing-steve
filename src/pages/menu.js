import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { withPrefix } from "gatsby"
import SEO from "../components/seo"
import ContactBar from "../components/contact-bar"
import ModeTabs from "../components/mode-tabs"
import { READY_MEALS_MENU } from "../data/ready-meals-menu"

const WHATSAPP_ORDER_URL =
  "https://wa.me/972528083737?text=" +
  encodeURIComponent("היי סטיב, אשמח להזמין ארוחות מוכנות הביתה")

// Styled Components
const PageContainer = styled.div`
  font-family: "Rubik", sans-serif;
  color: #333;
  direction: rtl;
  background: #bdf1ff;
  padding-bottom: 40px;
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center 60%;
`

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const HeroTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 14px 18px;
`

const LogoImg = styled.img`
  width: 180px;
  height: auto;
  display: block;
  margin: 0;

  @media (max-width: 900px) {
    width: 130px;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
`

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  color: #ffc74c;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin-top: 40px;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  margin: 0 auto 1.5rem;
  max-width: 760px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  color: #fff;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const Intro = styled.div`
  max-width: 980px;
  margin: 10px auto 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const IntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
`

const IntroIcon = styled.span`
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #ffc74c;
  font-size: 22px;
`

const IntroText = styled.div`
  font-size: 0.98rem;
  line-height: 1.35;

  strong {
    display: block;
    font-size: 1.05rem;
  }
`

const SectionNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  margin-top: 26px;
  padding: 10px 16px;
  background-color: #bdf1ff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`

const SectionNavLink = styled.a`
  flex: 0 0 auto;
  background: ${props => props.$active ? "#333" : "transparent"};
  color: ${props => props.$active ? "#fff" : "#333"};
  border: 1px solid #333;
  padding: 8px 22px;
  border-radius: 30px;
  font-size: 1.05rem;
  text-decoration: none;
  text-shadow: none;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 7px 14px;
    font-size: 0.92rem;
  }
`

const MenuBody = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 5vw 0;

  @media (max-width: 600px) {
    padding: 6px 12px 0;
  }
`

const Section = styled.section`
  margin-top: 34px;
  scroll-margin-top: 80px;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  &::after {
    content: "";
    flex: 1;
    height: 2px;
    background: rgba(0,0,0,0.12);
    border-radius: 2px;
  }
`

const SectionTitle = styled.h2`
  margin: 0;
  padding: 8px 22px;
  border-radius: 14px;
  background: #ffc74c;
  color: #333;
  font-size: 1.6rem;
  font-weight: 800;
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);

  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding: 6px 16px;
  }
`

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

const ItemCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);

  @media (max-width: 600px) {
    padding: 14px 16px;
  }
`

const ItemHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.22rem;
  font-weight: 800;
  color: #222;
  line-height: 1.3;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`

const Leader = styled.span`
  flex: 1;
  min-width: 16px;
  border-bottom: 2px dotted rgba(0,0,0,0.2);
  transform: translateY(-4px);
`

const Price = styled.span`
  flex: 0 0 auto;
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  white-space: nowrap;

  small {
    font-size: 0.85rem;
    font-weight: 700;
    margin-inline-start: 3px;
  }
`

const ItemNote = styled.span`
  align-self: flex-start;
  font-size: 0.82rem;
  font-weight: 700;
  color: #6a4525;
  background: #fff1cc;
  border-radius: 999px;
  padding: 2px 10px;
`

const ItemDescription = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.5;
  color: #555;
`

const ItemExtra = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: #8a6d00;
`

const OrderBox = styled.div`
  max-width: 760px;
  margin: 48px auto 0;
  padding: 28px 22px;
  text-align: center;
  background: #333;
  color: #fff;
  border-radius: 24px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.16);

  @media (max-width: 600px) {
    margin: 36px 12px 0;
  }
`

const OrderTitle = styled.h2`
  margin: 0 0 8px;
  color: #ffc74c;
  font-size: 1.8rem;
`

const OrderText = styled.p`
  margin: 0 0 18px;
  font-size: 1.05rem;
  opacity: 0.9;
`

const OrderButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 800;
  font-size: 1.15rem;
  text-decoration: none;
  text-shadow: none;
  box-shadow: 0 10px 22px rgba(0,0,0,0.2);
  transition: transform 180ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 28px;
    height: 28px;
    margin: 0;
  }
`

function MenuItem({ item }) {
  return (
    <ItemCard>
      <ItemHead>
        <ItemName>{item.name}</ItemName>
        <Leader aria-hidden="true" />
        <Price dir="ltr">
          {item.price}
          <small>₪</small>
        </Price>
      </ItemHead>
      {item.note && <ItemNote>{item.note}</ItemNote>}
      {item.description && <ItemDescription>{item.description}</ItemDescription>}
      {item.extra && <ItemExtra>* {item.extra}</ItemExtra>}
    </ItemCard>
  )
}

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState(READY_MEALS_MENU[0].id)

  // Highlight the section currently in view in the sticky nav
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) setActiveSection(visible[0].target.id)
      },
      { rootMargin: "-90px 0px -60% 0px" }
    )
    READY_MEALS_MENU.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <SEO
        title="ארוחות מוכנות הביתה"
        description="תפריט ארוחות מוכנות הביתה מהמטבח של סטיב – אוכל ביתי טרי בקופסאות, מוכן לחימום: מנות עיקריות, מרקים, מנות טבעוניות ותוספות"
        pathname="/menu/"
        image="/images/og-menu.jpg"
        imageAlt="אוכל ביתי ומשלוחים – מהמטבח של סטיב"
        imageWidth={1200}
        imageHeight={630}
      />
      <PageContainer>
        <HeroSection src={withPrefix("/images/meat/20230316_145304.jpg")}>
          <HeroTopBar>
            <LogoImg src={withPrefix("/images/logo.svg")} alt="מהמטבח של סטיב" />
          </HeroTopBar>
          <HeroOverlay />
          <HeroContent>
            <HeroTitle>ארוחות מוכנות הביתה</HeroTitle>
            <HeroSubtitle>אוכל ביתי טרי מהמטבח של סטיב, בקופסאות מוכנות לחימום</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ModeTabs active="meals" />
        <ContactBar />

        <Intro>
          <IntroItem>
            <IntroIcon aria-hidden="true">📝</IntroIcon>
            <IntroText>
              <strong>בוחרים מהתפריט</strong>
              מנות עיקריות, מרקים, טבעוני ותוספות
            </IntroText>
          </IntroItem>
          <IntroItem>
            <IntroIcon aria-hidden="true">💬</IntroIcon>
            <IntroText>
              <strong>מזמינים בוואטסאפ</strong>
              או בטלפון 052-8083737
            </IntroText>
          </IntroItem>
          <IntroItem>
            <IntroIcon aria-hidden="true">🍲</IntroIcon>
            <IntroText>
              <strong>מחממים ונהנים</strong>
              הכל מגיע ארוז בקופסאות, מוכן לחימום
            </IntroText>
          </IntroItem>
        </Intro>

        <SectionNav aria-label="קטגוריות בתפריט">
          {READY_MEALS_MENU.map(section => (
            <SectionNavLink
              key={section.id}
              href={`#${section.id}`}
              $active={activeSection === section.id}
            >
              {section.title}
            </SectionNavLink>
          ))}
        </SectionNav>

        <MenuBody>
          {READY_MEALS_MENU.map(section => (
            <Section key={section.id} id={section.id}>
              <SectionHeader>
                <SectionTitle>{section.title}</SectionTitle>
              </SectionHeader>
              <ItemsGrid>
                {section.items.map(item => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </ItemsGrid>
            </Section>
          ))}
        </MenuBody>

        <OrderBox>
          <OrderTitle>רוצים להזמין?</OrderTitle>
          <OrderText>שלחו לנו הודעה עם המנות והכמויות ונחזור אליכם לתיאום</OrderText>
          <OrderButton href={WHATSAPP_ORDER_URL} target="_blank" rel="noreferrer">
            <img src={withPrefix("/images/whatsapp.svg")} alt="" />
            הזמנה בוואטסאפ
          </OrderButton>
        </OrderBox>
      </PageContainer>
    </Layout>
  )
}
