import React from 'react'
import Header from './components/Header'
// import LoginPopup from './components/LoginPoup'
import TestsPage from './pages/TestsPage'
import CoursesPage from './pages/CoursesPage'
import MeetingsPage from './pages/MeetingsPage'
import EditProfilePage from './pages/EditProfilePage'
import TakativeProgramPage from './pages/TakativeProgramPage'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

import './styles.css'

const App = () => {
  return (
    <>
      <Header />
      <div className='main__content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/edit-profile' element={<EditProfilePage />} />
          <Route path='/programs' element={<TakativeProgramPage />} />
          <Route path='/meetings' element={<MeetingsPage />} />
          <Route path='courses' element={<CoursesPage />} />
          <Route path='/tests' element={<TestsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
