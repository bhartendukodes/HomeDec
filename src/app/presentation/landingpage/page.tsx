"use client" 
import React from 'react' 
import LandingHeader from '../component/LandingHeader'
import FurnitureCategories from '../component/FurnitureCategory'
import NewArrivals from '../component/NewArrivals'
import Footer from '../component/Footer'

const LandingPage = () => {
  return (
    <div className='bg-white'>
     <LandingHeader />
     <FurnitureCategories />
     <NewArrivals />
     <Footer />
    </div>
  )
}

export default LandingPage
