import React, { useState } from 'react'
import Card from '../../UI/Card'
import Input from '../Input';
import Title from '../Title';

import './ContactUs.css'

const ContactUs = () => {

  const [data, setData] = useState({});

  const resources = [
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
    }
  ];

  return (
    <div className="container">
    <section className='contact__us__section'>
      <Card radius='20px'>
        <div className="contact__us__content">
          <Title 
            title='تواصل معنا'
          />
          <form 
            onSubmit={e => e.preventDefault()}
            className='contact__form'
          >
            <div className='form__contact__content'>
            <div className='contact__inputs'>
              {resources.map(input => (
                <div className='contact__input' key={input.id}>
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
            </div>
            <div
              className='contact__textarea' 
            >
              <textarea 
                placeholder='اكتب رسالتك هنا ' 
                onChange={e => setData({...data, userMessage: e.target.value})} 
                value={data.userMessage || ''} 
              />
            </div>
            </div>
            <button type='submit' className='contact__form__submit'>ارسال</button>
          </form>
        </div>
      </Card>
    </section>
    </div>
  )
}

export default ContactUs