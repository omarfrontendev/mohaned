import React from 'react'
import Tag from '../images/image 11.png'
import Line from '../images/pngegg (1) 1.png'

import './title.css'

const Title = ({ title, subtitle, align, lineWidth }) => {
  return (
    <div 
    className="section__title" 
    style={{
      marginRight: align === 'center' ? 'auto' : '',
      marginLeft: align === 'center' ? 'auto' : ''
    }}
    >
      <h2 className='main__title'>
        <img src={Tag} alt="" className='tag' />
        {title}
        <img src={Line} alt="" className='line' style={{ width: lineWidth || '100%' }} />
      </h2>
      {subtitle && <p className='main__subtitle'>{subtitle}</p>}
    </div>
  )
}

export default Title