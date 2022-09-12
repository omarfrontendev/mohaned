import React from 'react'
import SingleProgram from '../SignleProgram'
import Title from '../Title'
import {  Headphone, UsersIcon, Video } from '../../icons'

import './PricesSection.css'

const PricesSection = () => {

  const programes = [
    {
      id: 1,
      title: 'البرنامج التخاطبي الناطق',
      subtitle: 'لتعليم الطفل الكلام والنطق وتحسين اللغه.',
      icon: <Headphone />,
      packages: [
        {
          duration: 1,
          egyPrice: 100,
          ksaPrice: 100 
        }
      ]
    },
    {
      id: 2,
      title: 'جلسات اونلاين',
      subtitle: 'لتحسين النطق والكلام عند الاطفال علي يد خبراء التخاطب ونطق..',
      icon: <UsersIcon />
    },
    {
      id: 3,
      title: 'الكورسات',
      subtitle: 'في التربيه الخاصه , التخاطب , النطق , التوحد ,و فرط الحركه وتشتت الانتباه..',
      icon: <Video />
    },
  ]

  return (
    <section className='prices__section'>
      <div className="container">
        <Title
          title='الاسعار'
          align='center'
        />
        <div className="prices__content">
        {programes.map(program => (
            <SingleProgram 
              key={program.id}
              title={program.title}
              subtitle={program.subtitle}
              icon={program.icon}
              type='price'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricesSection