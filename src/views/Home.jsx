import React from 'react'

import Navbar from '../components/layout/navigation/Navbar/Navbar'
import Section from '../components/layout/organization/Section'
import Section2 from '../components/layout/organization/Section2'
import {ContainerScroll, Sections} from '../components/layout/styled';

const Home = () => {
  return (

    <ContainerScroll >
      <Sections>
          <Navbar/>
          <Section/>
          <Section2/>
          <Section/>
          <Section2/>
      </Sections>

    </ContainerScroll>
  )
}

export default Home