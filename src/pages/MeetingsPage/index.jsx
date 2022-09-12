import React from 'react'
import ContactUs from '../../components/ContactUs'
import HeroSection from '../../components/HeroSection'
import Image from '../../components/images/Rectangle 51.png'
import OurProgrames from '../../components/OurPrograms'
import SpeechExperts from '../../components/SpeechExperts'
import Tag from '../../components/images/image 11.png'
import Line from '../../components/images/pngegg (1) 1.png'

import './MeetingsPage.css'

const MeetingsPage = () => {

  const title = 
              <>
                <span><span>حسن <img className='tag' src={Tag} alt=''/></span> مهارات</span> النطق والكلام <br/> <span>لطفلك</span> عبر <span>الجلسات <span>الاونلاين<img src={Line} alt='' className='line'/></span></span>
              </>

  const subtitle = 
                  <>
                    علي يد نخبه من <span>خبراء التخاطب</span> و النطق و تنميه<br/> مهارات الاطفال
                  </>

  return (
    <>
      <HeroSection 
        title={title} 
        subtitle={subtitle} 
        image={Image}         
        btnColor='#AA4DB9'
      />
      <OurProgrames />
      <div className="container">
        <SpeechExperts />
      </div>
      <ContactUs />
    </>
  )
}

export default MeetingsPage