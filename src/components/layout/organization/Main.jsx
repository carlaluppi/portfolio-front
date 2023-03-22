import React from 'react'
import {  DivImg, ContainerMain} from '../styled';
import hola from '../../../assets/hola.svg';
import Contact from '../navigation/Contact';
const Main = () => {
  return (

      <ContainerMain>
          
          <DivImg>
          <img src={hola} alt="saludo"/>
          </DivImg>
                
          <Contact/>
        
              
      </ContainerMain>

  )
}

export default Main