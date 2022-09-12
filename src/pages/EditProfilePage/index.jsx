import React, { useState } from 'react'
import EditAccountForm from '../../components/EditAccountForm'
import Input from '../../components/Input'
import UserCard from '../../components/UserCard'

import './EditProfilePage.css'

const EditProfilePage = () => {

  const [data, setData] = useState({})

  const resourses = [
    {
      type: 'password',
      placeholder: 'كلمه السر الحاليه',
      id: 'user__current__password'
    },
    {
      type: 'password',
      placeholder: 'كلمه السر الجديده',
      id: 'user__new__password'
    },
    {
      type: 'password',
      placeholder: 'تأكيد كلمه السر',
      id: 'user__confirm__password'
    },
  ];

  return (
    <div className="container">
      <div className='editProfile__page'>
      <div className='row__1'>
        <UserCard />
        <EditAccountForm />
      </div>
      <div className='row__1'>
        <div style={{backgroundColor: '#FFFF'}}></div>
        <div className='edit__account__form'>
      <p className='edit__account__title'>بيانات الحساب</p>
      <p className='edit__account__subtitle'>اضغط علي حقل الادخال لتعديل بيانات حسابك</p>
      <form className='edit__form__container' onSubmit={e => e.preventDefault()}>
        <div className="fomr__inputs">
          {resourses.map(input => (
            <div 
              className='input__controle' 
              key={input.id}
            >
              <Input 
                type={input.type}
                placeholder={input.placeholder}
                id={input.id}
                data={data}
                setData={setData}
              />
            </div>
          ))}
        </div>
        <button className='edit__account__form__submit' type='submit'>تأكيد</button>
      </form>
    </div>
      </div>
    </div>
    </div>
  )
}

export default EditProfilePage