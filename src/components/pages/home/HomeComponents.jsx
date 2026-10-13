import React from 'react'
import HeroBanner from './components/HeroBanner'
import Applications from './components/Applications'
import TheSystem from './components/Thesystem'
import WhatWeSupply from './components/Whatwesupply'
import RegulatoryPosition from './components/Regulatoryposition'
import ProvenInTheField from './components/Proveninthefield'
import ContactForm from './components/Contactform'

const HomeComponents = () => {
  return (
    <div>
        <HeroBanner/>
        <TheSystem/>
        <Applications/>
        <WhatWeSupply/>
        <RegulatoryPosition/>
        <ProvenInTheField/>
        <ContactForm/>
    </div>
  )
}

export default HomeComponents