import React from 'react'
import HeroSection from '../../components/HeroSection'
import Image from '../../components/images/Rectangle 51 (1).png'
import OurProgrames from '../../components/OurPrograms'
import SignleCourse from '../../components/SingleCourse'
import ContactUs from '../../components/ContactUs'
import courseImage from '../../components/images/Rectangle 51 (2).png'
import Tag from '../../components/images/image 11.png'
import Line from '../../components/images/pngegg (1) 1.png'

import './TestsPage.css'
import Title from '../../components/Title'

const TestsPage = () => {

  const title = 
              <>
                <span><span>حسن <img className='tag' src={Tag} alt='' /></span> مهارات</span> النطق والكلام <br/> لطفلك عبر <span><span>الجلسات<img className='line' src={Line} alt='' /> </span>الاونلاين </span>
              </>

  const subtitle = 
                <>
                  علي يد نخبه من<span> خبراء التخاطب </span> و النطق و تنميه <br/>مهارات الاطفال
                </>

                
  const tests = [
    {
      id: 1,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 2,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 3,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 4,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 5,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 6,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 7,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
    {
      id: 8,
      image: courseImage,
      name: 'اسم الدوره',
      desc: 'اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد اسعار في متناول اليد',
      rating: 25,
      monitor: 'د. محمد احمد محمود',
      duration: 6,
      lectures: 12,
      students: 306 
    },
  ]

  return (
    <>
      <HeroSection
        title={title} 
        subtitle={subtitle} 
        image={Image} 
        btnColor='#DEB50F'
      />
      <OurProgrames />
      <section className='tests__section'>
        <div className="container">
        <Title 
        lineWidth='175px'
        title='اختبارات الحصيله اللغويه'
        subtitle={<>
        احجز جلسات اونلاين مع خبراء التخاطب واللغه علي منصه <span>مهاره طفل</span>
        </>}
      />
          <div className="tests__container">
            {tests.map(course => (
              <SignleCourse 
                key={course.id}
                name={course.name}
                desc={course.desc}
                rating={course.rating}
                monitor={course.monitor}
                duration={course.duration}
                lectures={course.lectures}
                students={course.students}
                image={course.image}
                type='test'
                />
                ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  )
}

export default TestsPage