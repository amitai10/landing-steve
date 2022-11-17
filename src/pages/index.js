import React from "react";
import MainPage from "./main-page";
import MobilePage from "./mobile-page";
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  return <MainPage />
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 100 })
  
  // if (isTabletOrMobile) {
    
  // } else {
  //   return <MainPage />
  // }
}
