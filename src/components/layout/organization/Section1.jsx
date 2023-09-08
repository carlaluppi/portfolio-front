import React from 'react'
import {  Title, ContainerMain} from '../styled';
import Contact from '../navigation/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Section1 = () => {
  return (

      <ContainerMain id="home">

          <div  data-aos="fade-up"
                data-aos-duration="2500">
          <Title>
            <h1 className='title' >HOLA.</h1>
          </Title>
          </div>    
          <Contact/>

          <a href="#home "><p className='year'>2023</p>  </a>
    
      </ContainerMain>

  )
}

export default Section1