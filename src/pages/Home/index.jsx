import React from 'react'
import AboutSection from '../../components/AboutSection'
import MainHero from '../../components/MainHero'
import Options from '../../components/Options'
import PricesSection from '../../components/PricesSection'
import ContactUs from '../../components/ContactUs'

const Home = () => {
  return (
    <>
      <MainHero />
      <Options />
      <AboutSection />
      <PricesSection />
      <ContactUs />
    </>
  )
}

export default Home