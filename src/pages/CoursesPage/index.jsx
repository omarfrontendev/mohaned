import React from 'react'
import HeroSection from '../../components/HeroSection'
import Image from '../../components/images/Rectangle 50.png'
import SignleCourse from '../../components/SingleCourse'
import courseImage from '../../components/images/Rectangle 51 (2).png'
import ContactUs from '../../components/ContactUs'
import OurProgrames from '../../components/OurPrograms'
import Tag from '../../components/images/image 11.png'
import Line from '../../components/images/pngegg (1) 1.png'

import './CoursesPage.css'
import Title from '../../components/Title'

const CoursesPage = () => {


  const title = 
              <>
                احصل علي جوده <span><img className='tag' src={Tag} alt='' /> تعليم عاليه </span> <br/> اونلاين مع <span><img className='line' src={Line} alt="" /> مهاره طفل</span>
              </>

  const subtitle = 
                <>
                علي يد نخبه من <span>خبراء التخاطب</span> و النطق و تنميه<br/> مهارات الاطفال
                </>


  const courses = [
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
        btnColor='#F05165'
      />
      <OurProgrames />
      <section className='courses__section'>
        <div className="container">
          <Title 
            lineWidth='175px'
            title='الدورات التدريبيه'
            subtitle={<>
            استكشف العديد من الدورات والمواد التعليميه علي منصه <span>مهاره طفل</span>
            </>}
          />
          <div className="courses__container">
            {courses.map(course => (
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
              />
              ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  )
}

export default CoursesPage