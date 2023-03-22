import  React from 'react';
import {ContainerNav, Nav} from '../../styled.js';
import { Link } from 'react-router-dom';

const pages = [{name:'SOBRE MI', url:'/sobremi'}, {name:'PROYECTOS', url:'/proyectos'}, {name:'CONTACTO', url:'/contacto'}];


function Navbar () {

  return (

    <ContainerNav className="container ">

      <div className="row" >

          <div div className="col-md-12 col-lg-3">
              <hr />
          </div>

          <Nav className="col-md-12 col-lg-7">
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
          
          
      
      </div>

    </ContainerNav>
  );
}
export default Navbar;
