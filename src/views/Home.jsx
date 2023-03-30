import React from 'react'

import Navbar from '../components/layout/navigation/Navbar/Navbar'
import Section from '../components/layout/organization/Section'
import SectionTwo from '../components/layout/organization/Section2';
import SectionThree from '../components/layout/organization/Section3';
import {ContainerScroll, Sections} from '../components/layout/styled';

const Home = () => {
  return (

    <ContainerScroll >
      <Sections>
          <Navbar/>
          <Section/>
          <SectionTwo/>
          <SectionThree/>
          
      </Sections>

    </ContainerScroll>
  )
}

export default Home