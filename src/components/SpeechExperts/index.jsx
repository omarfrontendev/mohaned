import React, { useState } from 'react'
import Card from '../../UI/Card'
import EGYPT from '../images/image 21.png'
import SKA from '../images/image 20.png'
import UserImage from '../images/Profile.png'
import { GoPrimitiveSquare } from 'react-icons/go'
import Input from '../Input'
import Title from '../Title'

import './SpeechExperts.css'

const SpeechExperts = () => {

  const [data, setData] = useState({});

  return (
    <section className='speech__experts'>
      <Title 
        lineWidth='175px'
        title='خبراء التخاطب'
        subtitle={<>
        احجز جلسات اونلاين مع خبراء التخاطب واللغه علي منصه <span>مهاره طفل</span>
        </>}
      />
      <Card radius='20px'>
        <div className='speech__content'>
          <div className="monitor__content">
            <div className="rigth__col">
              <div className="monitor__image">
                <img src={UserImage} alt="" />
              </div>
              <div className="monitor__name">د. محمد احمد</div>
              <div className="monitor__job">اخصائي تخاطب و نطق</div>
            </div>
            <div className="left__col">
              <ul className='list__details'>
                <li><GoPrimitiveSquare className='square__icon' /> وريم ايبسوم دولار سيت أميت</li>
                <li><GoPrimitiveSquare className='square__icon' /> وريم ايبسوم دولار سيت أميت</li>
                <li><GoPrimitiveSquare className='square__icon' /> وريم ايبسوم دولار سيت أميت</li>
                <li><GoPrimitiveSquare className='square__icon' /> وريم ايبسوم دولار سيت أميت</li>
                <li><GoPrimitiveSquare className='square__icon' /> وريم ايبسوم دولار سيت أميت</li>
              </ul>
            </div>
          </div>
          <form>
            <div className="booking__form">
              <h4 className="booking__title">احجز الان</h4>
              <div className="booking__content">
                <div className="rigth__col">
                  <div className="box__title">اختار الدوله</div>
                  <div className='radio__inputs__container'>
                    <div className="radio__country__box">
                      <input type='radio' name='choose__country' id='egypt' value='egypt' />
                      <label htmlFor="egypt">
                        <img src={EGYPT} alt="" />
                      </label>
                    </div>
                    <div className="radio__country__box">
                      <input type='radio' name='choose__country' id='KSA' value='KSA' />
                      <label htmlFor="KSA">
                        <img src={SKA} alt="" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="center__col">
                  <div className="box__title">اختر عدد الجلسات</div>
                  <div className='radio__inputs__container'>
                    <div className="radio__input__num-of-course">
                      <input type="radio" name='num__of__course' value='10' id='10' />
                      <label htmlFor="10">10</label>
                    </div>
                    <div className="radio__input__num-of-course">
                      <input type="radio" name='num__of__course' value='20' id='20' />
                      <label htmlFor="20">20</label>
                    </div>
                    <div className="radio__input__num-of-course">
                      <input type="radio" name='num__of__course' value='30' id='30' />
                      <label htmlFor="30">30</label>
                    </div>
                  </div>
                </div>
                <div className="left__col">
                  <div className="box__title">حدد معاد الجلسه</div>
                  <Input 
                      type='date'
                      placeholder='حدد التاريخ هنا'
                      id='date'
                      data={data}
                      setData={setData}
                    />
                </div>
              </div>
            </div>
            <div className="speech__footer">
              <div className="total__price">
                <div className="total">الاجمالي</div>
                <div className="price">500 ريال</div>
              </div>
              <button>تأكيد</button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  )
}

export default SpeechExperts