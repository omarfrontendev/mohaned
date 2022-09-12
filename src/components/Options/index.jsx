import React from 'react'
import SingleProgram from '../SignleProgram'
import { EditIcon, Headphone, UsersIcon, Video } from '../../icons'

import './Options.css'

const Options = () => {

  const programes = [
    {
      id: 1,
      title: 'البرنامج التخاطبي الناطق',
      subtitle: 'لتعليم الطفل الكلام والنطق وتحسين اللغه.',
      icon: <Headphone />
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
    {
      id: 4,
      title: 'اختبارات الحصيله اللغويه',
      subtitle: 'لتحديد مستوي طفلك اللغوي من نقاط القوه ونقاط الضعف',
      icon: <EditIcon />
    },
  ]

  return (
    <section className='options__program__Section'>
      <div className="container">
        <div className="options__program__content">
          {programes.map(program => (
            <SingleProgram 
              key={program.id}
              title={program.title}
              icon={program.icon}
              subtitle={program.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Options