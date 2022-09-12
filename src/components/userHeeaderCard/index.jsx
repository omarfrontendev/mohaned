import React from 'react'
import DefaultImage from '../images/Frame 3552.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authSlice'
import { Link } from 'react-router-dom'

import './UserHeaderCard.css'

const UserHeaderCard = () => {

  const user = {
    name: 'مهند مصطفي',
    img: ''
  };

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();


  return (
    <div className='user__header__card' onClick={() => setDropdown(prev => !prev)}>
      <div className="user__header__image">
        <img src={user.img || DefaultImage} alt="" />
      </div>
      <div className="user__details">
        <div className="subtitle__user">مرحبا بك</div>
        <h5>{user.name}</h5>
      </div>
      <RiArrowDropDownLine className={`${dropdown ? 'rotate ' : '' } drop__down__icon`} />
      {dropdown && 
        <>
          <div className='dropdown__btns'>
          <button 
            className='logout__btn' 
            onClick={() => {
              dispatch(logout())
            }}
          >
            تسجيل الخروج
          </button>
          <Link to='edit-profile'>الصفحة الشخصية</Link>
          </div>
        </>
      }
    </div>
  )
}

export default UserHeaderCard