import React, { useState } from 'react'
import { Line } from '../../icons'
import Image from '../images/Saly-12.png'
import Input from '../Input'
import Card from '../../UI/Card'
import Tag from '../images/image 11.png'

import './LoginPopup.css'

const LoginPopup = ({ signIn, setSignIn }) => {

  const [data, setData] = useState({});

  const resourses = [
    {
      type: 'email',
      placeholder: 'البريد الاليكتروني',
      id: 'user__email',
    },
    {
      type: 'password',
      placeholder: 'كلمه السر',
      id: 'user__passowrd',
    },
  ]

  const resourses2 = [
    {
      type: 'text',
      placeholder: 'الاسم',
      id: 'user__name'
    },
    {
      type: 'number',
      placeholder: 'رقم الموبايل',
      id: 'user__number'
    },
    {
      type: 'email',
      placeholder: 'البريد الاليكتروني',
      id: 'user__email'
    },
    {
      type: 'password',
      placeholder: 'كلمه السر',
      id: 'user__passowrd',
    },
  ];
  return (
    <div className="login__container">
      <Card radius='10px'>
        <div className='login__popup'>
          <div className="rigth">
            <h2 className='login__popup__title'>
              <img src={Tag} alt='' className='tag' />
              {signIn ? 'مرحبا بعودتك' : 'مرحبا بك معنا'}
            </h2>
            <p 
            className='login__popup__subtitle'
            >
              {signIn ?
               'يرجي تسجيل الدخول للوصول لنظامك التعليمي' 
                : 
               'يرجي تسجيل بياناتك للانضمام الي النظام'}
               </p>
            <form className='login__form'onSubmit={e => e.preventDefault()}>
            {signIn && resourses.map(input => (
                <div className='login__form__inputs__container' key={input.id}>
                  <Input 
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    data={data}
                    setData={setData}
                  />
                </div>
              ))}
            {!signIn && resourses2.map(input => (
                <div className='login__form__inputs__container' key={input.id}>
                  <Input 
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    data={data}
                    setData={setData}
                  />
                </div>
              ))}
              <div className='login__btns'>
                <button type='submit' className='submit__form'>{signIn ? 'تسجيل الدخول' : 'انشاء حساب'}</button>
                <button className='forget__password'>نسيت كلمه المرور</button>
              </div>
              <button 
                className='switch__signin__signup'
                onClick={() => setSignIn(prev => !prev)}
              >
                <Line />
                {signIn ? 'عضو جديد ؟' : 'لديك حساب ؟'}
                <Line />
              </button>
            </form>
          </div>
          <div className="left">
            <div className="login__image">
              <img src={Image || ''} alt="" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default LoginPopup