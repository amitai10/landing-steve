import React from "react"
import styled from "styled-components"
import { withPrefix } from "gatsby"

const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 22px 16px 12px;
  background: #bdf1ff;
  flex-wrap: wrap;
`

const ContactIconLink = styled.a`
  display: inline-flex;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #ffffff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow:
    0 10px 22px rgba(0,0,0,0.12),
    0 1px 0 rgba(255,255,255,0.8) inset;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 14px 28px rgba(0,0,0,0.16),
      0 1px 0 rgba(255,255,255,0.8) inset;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }
`

const ContactIconImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 0;
`

const ContactPhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 64px;
  padding: 0 18px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #ffffff;
  box-shadow:
    0 10px 22px rgba(0,0,0,0.12),
    0 1px 0 rgba(255,255,255,0.8) inset;
  text-decoration: none;
  color: #111;
  font-weight: 800;
  font-size: 1.15rem;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 14px 28px rgba(0,0,0,0.16),
      0 1px 0 rgba(255,255,255,0.8) inset;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    height: 56px;
    border-radius: 18px;
    padding: 0 14px;
    font-size: 1.05rem;
  }
`

const ContactPhoneIcon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(0,0,0,0.06);
  font-size: 20px;
  line-height: 1;
`

export default function ContactBar() {
  return (
    <ContactRow>
      <ContactIconLink
        href="https://wa.me/972528083737"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <ContactIconImg src={withPrefix("/images/whatsapp.svg")} alt="" />
      </ContactIconLink>
      <ContactIconLink
        href="https://www.instagram.com/stevefrenkel.72?igsh=aTZtMG4xOWx0MXk1/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <ContactIconImg src={withPrefix("/images/instagram.png")} alt="" />
      </ContactIconLink>
      <ContactIconLink
        href="https://www.facebook.com/steve.frenkel.1"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <ContactIconImg src={withPrefix("/images/facebook.png")} alt="" />
      </ContactIconLink>
      <ContactPhoneLink href="tel:+972528083737" aria-label="Call 052-8083737">
        <ContactPhoneIcon aria-hidden="true">☎</ContactPhoneIcon>
        052-8083737
      </ContactPhoneLink>
    </ContactRow>
  )
}
