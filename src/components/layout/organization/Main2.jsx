import React from 'react'
import {ContainerMain2, ContainerRight, ContainerLeft} from '../styled';

import Contact from '../navigation/Contact';

const Main2 = () => {
  return (

      <ContainerMain2 id='sobremi'> 

          <ContainerLeft>
            <h1>fotooo</h1>
          </ContainerLeft>  

          <ContainerRight>
              <h1>golaaa</h1>
          </ContainerRight>   
          
          <Contact/>
          
      </ContainerMain2>

  )
}

export default Main2