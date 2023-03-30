import React from 'react'
import CV from '../../../assets/CVCarlaLuppi.pdf'
import { ButtonDw } from '../styled'

const DownLoad = () => {
    
  return (
    
    <>
    <div >
      <ButtonDw className={`btn`}>
        <a href={CV} target="_blank" rel="noopener noreferrer" download="CV-CarlaLuppi.pdf"> 
        DESCARGAR CV
        </a>
      </ButtonDw>
    </div>
  </>
  )
}

export default DownLoad