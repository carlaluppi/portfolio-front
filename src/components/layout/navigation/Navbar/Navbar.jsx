import  React from 'react';
import {ContainerNav, Nav} from '../../styled.js';
import { Link } from 'react-router-dom';

function Navbar () {

  return (

    <ContainerNav >
          <hr/>  
          <Nav>
              <a href="#sobremi">SOBRE MI</a>
              <a href="#proyectos">PROYECTOS</a>
              <a href="#contacto">CONTACTO</a>
          </Nav>     
          
    </ContainerNav>
  );
}
export default Navbar;
