import React from 'react'

import Navbar from '../components/layout/navigation/Navbar/Navbar'
import Section from '../components/layout/organization/Section'
import SectionTwo from '../components/layout/organization/Section2';
import {ContainerScroll, Sections} from '../components/layout/styled';

const Home = () => {
  return (

    <ContainerScroll >
      <Sections>
          <Navbar/>
          <Section/>
          <SectionTwo/>
          <Section/>
          
      </Sections>

    </ContainerScroll>
  )
}

export default Home