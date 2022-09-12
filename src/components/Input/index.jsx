import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'

import './Input.css'

const Input = ({ type, placeholder, data, id, setData }) => {

  const [show, setShow] = useState(false)

  return (
    <>
      <input
        className='main__input' 
        type={type === 'password' ? show ? 'text' : 'password' : type} 
        placeholder={placeholder || ''} 
        onChange={e => setData({
          ...data,
          [id]: e.target.value
        })}
        value={data[id] || ''}
        />
        {type === 'password' && (
          <button className='passowrd__icon' onClick={() => setShow(prev => !prev)}>{show ? <BiHide /> : <BiShow />}</button>
        )}
    </>
  )
}

export default Input