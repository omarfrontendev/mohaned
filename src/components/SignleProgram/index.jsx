import React from 'react'
import Card from '../../UI/Card' 
import './SingleProgram.css'

const SingleProgram = ({ title, subtitle, icon, type }) => {
  return (
    <Card radius='20px'>
      <div className='single__program__box'>
        <div className="program__icon">
          {icon}
        </div>
        <div className="programe__title">{title}</div>
        {type !== 'price' && <div className="program__subtitle">{subtitle}</div>}
        {type === 'price' && (
          <div>
            
          </div>
        )}
        <button className='program__details__btn'>تفاصيل</button>
      </div>
    </Card>
  )
}

export default SingleProgram