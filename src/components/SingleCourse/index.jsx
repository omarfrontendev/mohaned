import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { Clock, Lectures, StudentIcon } from '../../icons'
import { GoPrimitiveSquare } from 'react-icons/go'

import './SingleCourse.css'

const SignleCourse = ({
  image,
  name,
  desc,
  rating,
  monitor,
  duration,
  lectures,
  students,
  type
}) => {

  const stars = [1,2,3,4]

  return (
    <div className='single__course'>
      <div className="course__image">
        <img src={image || ''} alt="" />
      </div>
      <div className="course__data">
        <div>
          <h3 className='coures__name'>{name}</h3>
          <p className='course__desc'>{desc}</p>
          <div className="course__rating">
            <div className="coures__stars">
              {stars.map(s => <AiFillStar key={s} className='star__icon' />)}
            </div>
            ({rating})
          </div>
          <div className="course__monitor__name">
            <BsPerson className='monitor__icon' />
            {monitor}
          </div>
        </div>
        {type === 'test' && (
          <div>
            <ul className='list__test'>
              <li><GoPrimitiveSquare className='list__test__icon' /> وريم ايبسوم دولار وريم ايبسوم دولار سيت أميتسيت أميت</li>
              <li><GoPrimitiveSquare className='list__test__icon' /> وريم ايبسوم دولار وريم ايبسوم دولار سيت أميتسيت أميت</li>
              <li><GoPrimitiveSquare className='list__test__icon' /> وريم ايبسوم دولار وريم ايبسوم دولار سيت أميتسيت أميت</li>
            </ul>
          </div>
        )}
      </div>
      <div className="course__footer">
        <div className="course__duration">
          <Clock />
          {duration} ساعات
        </div>
        <div className="course__duration">
          <Lectures />
          {lectures} 
          {type === 'test' ? ' سؤال ' : ' محاضرة '}
        </div>
        <div className="course__duration">
          <StudentIcon />
          {students} طالب
        </div>
      </div>
    </div>
  )
}

export default SignleCourse