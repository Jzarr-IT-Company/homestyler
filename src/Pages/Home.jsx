import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import HomeSlider from '../Component/HomeSlider/HomeSlider'
import FeatureCollection from '../Component/FeatureCollection/FeatureCollection'
import HomeBanner1 from '../Component/HomeBanner1/HomeBanner1'
import Category from '../Component/Category/Category'
import HomeBanner2 from '../Component/HomeBanner2/HomeBanner2'
import Testomonials from '../Component/Testomonials/Testomonials'
import HomeBanner3 from '../Component/HomeBanner3/HomeBanner3'
import Footer from '../Component/Footer/Footer'
import Categoryes from '../Component/Categoryes/Categoryes'

function Home() {
  return (
    <>
        <Navbar/>
        <Categoryes/>
        <HomeSlider/>
        <FeatureCollection/>
        <HomeBanner2/>
        <Category/>
        <HomeBanner1/>
        <Testomonials/>
        <HomeBanner3/>
        <Footer/>
    </>
  )
}

export default Home