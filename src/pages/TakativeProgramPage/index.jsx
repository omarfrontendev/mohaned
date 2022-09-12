import React from 'react'
import ContactUs from '../../components/ContactUs'
import HeroSection from '../../components/HeroSection'
import LearningProgram from '../../components/LearningProgram'
import OurProgrames from '../../components/OurPrograms'
import Hero1 from '../../components/images/hero1.png'
import Tag from '../../components/images/image 11.png'
import Line from '../../components/images/pngegg (1) 1.png'

// import './TakativeProgramPage.css'

const TakativeProgramPage = () => {

  const title = 
                <>
                  علم <span> <img className='tag' src={Tag} alt="" /> طفلك </span> <br/> الكلام و النطق اونلاين<br/> مع <span> البرنامج التخاطبي <span>الناطق <img className='line' src={Line} alt="" /> </span> </span>
                </>
  const subtitle = 
                  <>
                    علي يد نخبه من<span> خبراء التخاطب </span> و النطق و تنميه <br/>مهارات الاطفال
                  </>
  return (
    <div className='takative__page'>
        <HeroSection 
          title={title} 
          subtitle={subtitle} 
          image={Hero1} 
          btnColor='#4E3064'
          />
      <div className="container">
        <OurProgrames />
      </div>
        <LearningProgram />
        <ContactUs />
    </div>
  )
}

export default TakativeProgramPage