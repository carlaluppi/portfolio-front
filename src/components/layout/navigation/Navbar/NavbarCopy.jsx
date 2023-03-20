import  React from 'react';
import { Link } from 'react-router-dom';
import {ContainerNav} from '../Navbar/styled.js';

const pages = [{name:'Sobre mi', url:'/sobremi'}, {name:'Proyectos', url:'/proyectos'}, {name:'Contacto', url:'/contacto'}];


function Navbar () {


  return (
    <ContainerNav>

      <div maxWidth="xl">
         <h1>hola</h1>
          
          <div display="flex" justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <button
                key={page.name}
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to= {page.url}
              >
                {page.name}
              </button>
            ))}
          </div>

          
        </div>
      
    </ContainerNav>
  );
}
export default Navbar;
