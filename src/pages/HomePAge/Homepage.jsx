import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Carousel from '../../components/Carausel/Carousel'
import Category from '../../components/Category/Category'
import Courses from '../../components/Courses/Courses'
import Footer from '../../components/Footer/Footer'


const Homepage = () => {
  return (
    <div className='container-fluid' style={{marginTop:"81rem"}}>
       <div className='fixed-top'>
       <Navbar/>
       </div>
        <Carousel/>
        <Category />
        <Courses/>
        <Footer/>
    </div>
  )
}

export default Homepage
