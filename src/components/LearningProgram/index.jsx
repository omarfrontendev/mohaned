import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../UI/Card'
import Image from '../images/image 30.png'

import './LearningProgram.css'

const LearningProgram = () => {

  const types = [
    {
      id: 1,
      title: 'الفواكه',
      open: true
    },
    {
      id: 2,
      title: 'الفواكه',
      open: true
    },
    {
      id: 3,
      title: 'الفواكه',
      open: true
    },
    {
      id: 4,
      title: 'الفواكه',
    },
    {
      id: 5,
      title: 'الفواكه',
    },
    {
      id: 6,
      title: 'الفواكه',
    },
    {
      id: 7,
      title: 'الفواكه',
    },
    {
      id: 8,
      title: 'الفواكه',
    },
    {
      id: 9,
      title: 'الفواكه',
    },
    {
      id: 10,
      title: 'الفواكه',
    },
    {
      id: 12,
      title: 'الفواكه',
    },
    {
      id: 13,
      title: 'الفواكه',
    },
    {
      id: 14,
      title: 'الفواكه',
    },
    {
      id: 15,
      title: 'الفواكه',
    },
    {
      id: 16,
      title: 'الفواكه',
    },
    {
      id: 17,
      title: 'الفواكه',
    },
    {
      id: 18,
      title: 'الفواكه',
    },
    {
      id: 19,
      title: 'الفواكه',
    },
    {
      id: 20,
      title: 'الفواكه',
    },
  ]

  return (
    <section className='learning__program__secttion'>
      <Card radius='0px'>
        <Link to='/programs' className='learning__container'>
          {types.map(t => (
            <div className={`leaning__box ${t?.open ? 'opened' : 'closed'}`} key={t.id}>
              <div className='learning__image'>
                <img src={Image} alt="" />
              </div>
              <p className='leaning__title'>{t.title}</p>
            </div>
          ))}
        </Link>
      </Card>
    </section>
  )
}

export default LearningProgram