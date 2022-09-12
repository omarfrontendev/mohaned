import React from 'react'
import { YoutubeIcon } from '../../icons'

import './HeroSection.css'

const HeroSection = ({ title, subtitle, image, btnColor }) => {
  return (
    <section className='hero__section'>
      <div className='hero__bgk'>
        <img className='bgk__image' src={image || ''} alt="" />
      </div>
      <div className="hero__section__text container">
        <h1 className='hero__title'>{title}</h1>
        <p className='hero__subtitle'>{subtitle}</p>
        <div className='hero__btns'>
          <button className='hero__btn__subscribe' style={{backgroundColor: btnColor}}> اشترك الان</button>
          <button className='hero__btn__details'><YoutubeIcon /> تعلم مع <span>مهاره طفل</span></button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection