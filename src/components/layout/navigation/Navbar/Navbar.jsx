import  React from 'react';
import {ContainerNav, Nav} from '../../styled.js';
import { Link } from 'react-router-dom';

const pages = [{name:'SOBRE MI', url:'/sobremi'}, {name:'PROYECTOS', url:'/proyectos'}, {name:'CONTACTO', url:'/contacto'}];


function Navbar () {

  return (

    <ContainerNav >
          <hr />
          <Nav>
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    component={Link}
                    to= {page.url}
                  >
                    {page.name}
                  </Link>
              ))}
          </Nav>     
          
    </ContainerNav>
  );
}
export default Navbar;
