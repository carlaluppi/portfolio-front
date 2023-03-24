import React from 'react'
import {ContainerMain2, ContainerRight, ContainerLeft} from '../styled';

import Contact from '../navigation/Contact';

const Section2 = () => {
  return (

      <ContainerMain2 id='sobremi'> 

          <ContainerLeft>
            <h1>fotooo</h1>
          </ContainerLeft>  

          <ContainerRight >
              <h1 >Intr <br />
              odu <br />cción.</h1>
          </ContainerRight>   
          
          <Contact/>
          
      </ContainerMain2>

  )
}

export default Section2;