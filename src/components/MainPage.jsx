import React from 'react'
import './MainPage.css'
import Navbar from './Navbar'
import MainSecond from './MainSecond'
import Footer from './Footer'


const MainPage = () => {
  return (
    <>
    <div className='mainpage_div'>
      <Navbar/>
      <img src='src/bannerimage.png' className='main_image'/>
    <p className='para1 pacifico-regular'>PureMent Resturants & Cafes</p>
    <p className='para2'>MANAEESH, KNAFEH & MORE</p>
    <MainSecond/>
    <Footer/>
    </div>
    </>
  )
}

export default MainPage
