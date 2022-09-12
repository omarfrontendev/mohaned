import React, { useState } from 'react'
import Input from '../Input'
import { RiArrowDropDownLine } from 'react-icons/ri'

import './EditAccountForm.css'

const EditAccountForm = () => {

  const [data, setData] = useState({});

  const resourses = [
    {
      type: 'text',
      placeholder: 'الاسم',
      id: 'user__name'
    },
    {
      type: 'email',
      placeholder: 'البريد الاليكتروني',
      id: 'user__email'
    },
    {
      type: 'number',
      placeholder: 'رقم الموبايل',
      id: 'user__number'
    },
    {
      type: 'date',
      placeholder: 'تاريخ الميلاد',
      id: 'user__date'
    },
  ];

  return (
    <div className='edit__account__form'>
      <p className='edit__account__title'>بيانات الحساب</p>
      <p className='edit__account__subtitle'>اضغط علي حقل الادخال لتعديل بيانات حسابك</p>
      <form className='edit__form__container' onSubmit={e => e.preventDefault()}>
        <div className="fomr__inputs">
          {resourses.map(input => (
            <div className='input__controle' key={input.id}>
              <Input 
                type={input.type}
                placeholder={input.placeholder}
                id={input.id}
                data={data}
                setData={setData}
              />
            </div>
          ))}
          <div className='select__box__controle'>
            <select className='seclect__box'>
              <option value="الجنس">الجنس</option>
              <option value="ذكر">ذكر</option>
              <option value="انثى">انثى</option>
            </select>
            <RiArrowDropDownLine className='drop_icon' />
          </div>
          <div className='select__box__controle'>
            <select className='seclect__box'>
              <option value="الجنس">الدوله</option>
              <option value="مصر">مصر</option>
              <option value="السعودية">السعودية</option>
            </select>
            <RiArrowDropDownLine className='drop_icon' />
          </div>
        </div>
        <button className='edit__account__form__submit' type='submit'>تأكيد</button>
      </form>
    </div>
  )
}

export default EditAccountForm