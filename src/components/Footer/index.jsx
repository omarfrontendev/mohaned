/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Facebook, Instagram, Twitter } from '../../icons'
import { SiWhatsapp } from 'react-icons/si'

import './Footer.css'

const Footer = () => {
  return (
    <div className='main__header footer'>
    <div className="container">
      <div className="header__top">
          <div className="rigth__nav">
            <a href='#' target='_blank'>
              <Instagram className='header__icon' />
            </a>
            <a href='#' target='_blank'>
              <Twitter className='header__icon' />
            </a>
            <a href='#' target='_blank'>
              <Facebook className='header__icon' />
            </a>
            <p className='header__parag'>50 % خصم علي الدورات التدريبيه و الجلسات</p>
          </div>
          <div className="left__nav">
            <p className='header__parag'>تواصل معنا</p>
            <SiWhatsapp />
            <p className='header__number'>010000055522</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer