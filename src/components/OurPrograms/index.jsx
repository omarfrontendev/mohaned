import React from 'react'
import { Video } from '../../icons'
import Card from '../../UI/Card'

import './OurProgrames.css'

const OurPrograms = () => {

  const programs = [
    {
      id: 1,
      title: 'تعلم عن بعد',
      text: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد'
    },
    {
      id: 2,
      title: 'دعم فني 24/7 من خبرائنا',
      text: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد'
    },
    {
      id: 3,
      title: 'منتجات تعليميه',
      text: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد'
    },
    {
      id: 4,
      title: 'اسعار في متناول اليد',
      text: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد'
    },
  ]

  return (
    <section className='our__programs__section'>
      <div className="programs__container container">
        {programs.map(p => (
          <Card radius='20px' key={p.id}>
            <div className='program__card'>
              <div className='program__icon'>
                <Video />
              </div>
              <div>
                <p className='program__title'>{p.title}</p>
                <p className='program__text'>{p.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default OurPrograms