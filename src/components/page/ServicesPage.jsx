import React from 'react'
import ServiceSlider from '../Services/serviceSlider'
import ServicePages from '../Services/ServicePages'
import Slider from '../LandingPage/Slider'

const ServicesPage = () => {
  return (
    <div>ServicesPage
       <Slider/>
      {/* <ServiceSlider/> */}
      <ServicePages/>
    </div>
  )
}

export default ServicesPage