import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Goals from './components/Goals'
import ExplCourses from './components/ExplCourses'
import FeaturedCourses from './components/FeaturedCourses'
import Mentors from './components/Mentors'
import Blog from './components/Blog'
import Footer from './components/Footer'
// import Testimonials from './components/Testimonials'


function App() {
  

  return (
    <>
       <Navbar/>
      <Header/> 
      <Goals/>
      <ExplCourses/>
      <FeaturedCourses/>
      <Mentors/>
      {/* <Testimonials/> */}
      <Blog/>
      <Footer/>

    </>
  )
}

export default App
