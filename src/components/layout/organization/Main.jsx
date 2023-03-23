import React from 'react'
import {  Title, ContainerMain} from '../styled';

import Contact from '../navigation/Contact';
const Main = () => {
  return (

      <ContainerMain id="home">
          
          <Title>
            <h1 className='title'>HOLA.</h1>
          </Title>
              
          <Contact/>

          <a href="#home "><p className='year'>2023</p>  </a>
    
      </ContainerMain>

  )
}

export default Main