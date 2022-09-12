import React from 'react'
import DefaultProfile from '../images/Profile.png'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user__card'>
      <div className='user__image'>
        <img className='user-image__image' src={DefaultProfile} alt="" />
      </div>
      <div className='user__bio'>
        <h4 className='user__name'>مهند مصطفي</h4>
        <p className='user__membership'>عضويه 3 اشهر</p>
      </div>
      <div className='user__courses'>
        <div className='user__cousrses__card'>
          <p className='courses__title'>الدورات المكتمله</p>
          <span className='courses__num'>6</span>
        </div>
        <div className='user__cousrses__card'>
          <p className='courses__title'>الدورات الحاليه</p>
          <span className='courses__num'>10</span>
        </div>
      </div>
    </div>
  )
}

export default UserCard