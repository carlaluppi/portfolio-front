import React from "react";

import Navbar from '../components/layout/navigation/Navbar/Navbar'
import Section1 from '../components/layout/organization/Section1'
import Section2 from '../components/layout/organization/Section2';
import Section3 from '../components/layout/organization/Section3';
import Section4 from '../components/layout/organization/Section4';
import {ContainerScroll, Sections} from '../components/layout/styled';


const Home = () => {

  return (

    <ContainerScroll >
      <Sections>
          <Navbar/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
      </Sections>

    </ContainerScroll>
  )
}

export default Home