import React from 'react'
import AboutImage from '../images/Saly-16.png'
import Line from '../images/pngegg (1) 1.png'

import './AboutSection.css'

const AboutSection = () => {
  return (
    <section className='about__section'>
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img src={AboutImage || ''} alt="" />
          </div>
          <div className="about__text">
            <h2 className="about__title">
              نخبه من خبراء التخاطب <br/>و التربيه الخاصه هدفهم<br/> تنميه <span className='title__line'> <img src={Line || ''} alt='' className='line' /> مهارات طفلك</span>
            </h2>
            <p className='about__subtitle'>
            سنسعي جاهدين لتدريب طفلك علي الكلام و النطق و زياده الحصيله اللغويه عبر منصه <span> مهاره طفل </span> 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection