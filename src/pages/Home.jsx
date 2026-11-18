








import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import IronServices from '../components/IronServices'

import IronCallback from '../components/IronCallback'

import PesSaveFeatureSection from '../components/PesSaveFeatureSection'
import PesSaveWhyChooseUs from '../components/PesSaveWhyChooseUs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
       <IronCallback/>
       <StatsSection/>
         <IronServices/>
         <PesSaveFeatureSection/>
         <PesSaveWhyChooseUs/>
      
    
   
     
    </div>
  )
}

export default Home