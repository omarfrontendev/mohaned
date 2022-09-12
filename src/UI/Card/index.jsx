import React from 'react'
import './card.css'

const Card = ({ children, radius }) => {
  return (
    <div className='card' style={{borderRadius: radius || '10px'}}>{children}</div>
  )
}

export default Card