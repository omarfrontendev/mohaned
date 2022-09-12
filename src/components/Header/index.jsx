import React, { useState } from 'react'
import { Instagram, Twitter, Facebook } from '../../icons'
import { SiWhatsapp } from 'react-icons/si'
import LoginPopup from '../LoginPoup'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'
import { Link } from 'react-router-dom'
import UserHeaderCard from '../userHeeaderCard'
import { MdMenu } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

import './Header.css'

const Header = () => {

  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [openDropdown, setOpendropdown] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth.loggedIn);


  return (
    <>
      <nav className='main__header'>
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
          <div className="center__nav">
            <button className='header__discount__btn'>خصم لمده شهر</button>
            <p className='header__parag'>تابعنا علي صفحات التواصل الاجتماعي</p>
          </div>
          <div className="left__nav">
            <p className='header__parag'>تواصل معنا</p>
            <SiWhatsapp />
            <p className='header__number'>010000055522</p>
          </div>
        </div>
          <div className="header__bottom container">
            <div className="header__bottom__rigth">
              <Link to='/' className='header__bottom__login'>Logo</Link>
            </div>
            <button 
              className='toggle__men' 
              onClick={() => setOpendropdown(prev => !prev)}
            >
              {!openDropdown ? <MdMenu className='toggle__icon' /> : <AiOutlineClose className='toggle__icon' />}
            </button>
            <div 
            className={`header__bottom__center 
            ${loggedIn ? 'logged__in' : '' } 
            ${openDropdown ? 'open' : ''}`}
            >
            {!loggedIn ? (
              <>
                <a href="#" className='header__links'>من نحن</a>
                <a href="#" className='header__links'>الخدمات</a>
                <a href="#" className='header__links'>الباقات</a>
              </>
            ) : (
              <>
                <Link to='/programs' className='header__link__page'>
                  <span className='bullet'></span>
                  البرنامج التخاطبي الناطق  
                </Link>
                <Link to='/meetings' className='header__link__page'>
                  <span className='bullet'></span>
                  الجلسات   
                </Link>
                <Link to='/courses' className='header__link__page'>
                  <span className='bullet'></span>
                  الكورسات    
                </Link>
                <Link to='/tests' className='header__link__page'>
                  <span className='bullet'></span>
                  اختبارات الحصيله اللغويه    
                </Link>
              </>
            )}
            </div>
            <div className="header__bottom__rigth">
              <div className="header__bottom__btns">
                {!loggedIn ? 
                  <>
                    <button 
                      className='log__btn' 
                      onClick={() => {
                        // setOpen(prev => !prev)
                        // setSignIn(true)
                        dispatch(login())
                      }}
                    >
                      دخول
                    </button>
                    <button 
                    className='subsctibe__btn'
                    onClick={() => {
                      // setOpen(prev => !prev)
                      // setSignIn(false)
                      dispatch(login())
                    }}
                    >
                      اشترك الان
                    </button> 
                  </> 
                  : <UserHeaderCard />
                }
              </div>
            </div>
          </div>
      </nav>
      {open && <LoginPopup setSignIn={setSignIn} signIn={signIn} />}
    </>
  )
}

export default Header