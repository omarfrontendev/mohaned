import React from 'react'
import HeroImage from '../images/Saly-10.png'
import Tag from '../images/image 11.png'
import Line from '../images/pngegg (1) 1.png'
import { YoutubeIcon } from '../../icons'

import './MainHero.css'

const MainHero = () => {
  return (
    <div className="container">
      <section className='main__hero__section'>
      <div className="main__hero__text">
        <h1 className='main__hero__title'>علم <span className='title__tag'><img className='tag' src={Tag || ''} alt="" /> طفلك <br/></span> الكلام و النطق اونلاين<br/> مع <span className='title__line'> <img src={Line || ''} alt='' className='line' /> مهاره طفل </span></h1>
        <p className='main__hero__subtitle'> علي يد نخبه من <span>خبراء التخاطب</span> و النطق و تنميه مهارات الاطفال</p>
        <div className="mian__hero__btns">
          <button className='subscribe__btn'>اشترك الان</button>
          <button className='hero__btn__details'><YoutubeIcon /> تعلم مع <span>مهاره طفل</span></button>
        </div>
      </div>
      <div className="main__hero__img">
        <img src={HeroImage || ''} alt="" />
      </div>
    </section>
    </div>
  )
}

export default MainHero