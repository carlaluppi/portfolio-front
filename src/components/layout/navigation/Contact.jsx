import React from 'react'
import { Vertical, Icon, ContainerContact } from '../styled';
import { Link } from 'react-router-dom';
import Google from '../../../assets/google.svg';
import GitHub from '../../../assets/github.svg';
import Linkedin from '../../../assets/linkedin.svg';
import Carla from '../../../assets/carla.svg';

const Contact = () => {
  return (
    <ContainerContact>

        <Icon>
          <a href="mailto:carluppi99@gmail.com" > <img src={Google}  alt="icongoogle"/></a>
          <Link to="https://www.github.com/carlaluppi" target="_blank" > <img src={GitHub}  alt="icon"/></Link>
          <Link to="https://www.linkedin.com/in/carla-luppi/" target="_blank" > <img src={Linkedin}  alt="icon"/></Link>
        </Icon>

        <Vertical >
            <img src={Carla}  alt="name" />
        </Vertical>

        
    </ContainerContact>
  )
}

export default Contact