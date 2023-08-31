import React from 'react'
import proyects from '../../../utils/proyects'
import {CardSection, Icons} from '../styled'
import { Link } from 'react-router-dom'
import GitHubButton from 'react-github-btn'
import rocket from '../../../assets/icons/rocket.svg'

const ProyectSection = () => {

  function handleClick(link) {
    window.open(link, "_blank");
  }
  
  return (
    <>
 
 <CardSection>
  {proyects.map((proyect) => (
    <div className="card" key={proyect.id}>
      <div className="card__content">
        <div className="card__content-inner">
          <div className="card__title">{proyect.title}</div>
          

          {Array.isArray(proyect.tech) && (
            <Icons>
              {proyect.tech.map((tech, index) => (
                <img src={tech} alt={index} key={`${proyect.id}-${index}`} />
              ))}
              
              {/* <GitHubButton href={proyect.repo}data-size="large" aria-label="Follow @buttons on GitHub">Front</GitHubButton>
              {proyect.repoback && (
              <GitHubButton  href={proyect.repoback} data-color-scheme="no-preference: dark; light: dark_high_contrast; dark: dark_high_contrast;" data-size="large" aria-label="Follow @buttons on GitHub"> Back</GitHubButton>) } */}
            </Icons>
            
          )}
          <div className="card__description">{proyect.text}</div>

          {proyect.link && (  // Verifica si hay un enlace antes de mostrar "Ver más"
            <Link
              to="/"
              onClick={(event) => {
                event.preventDefault();
                handleClick(proyect.link);
              }}
            >
              Ver más  {  }
              <img src={rocket} alt="deploy" />
              
            </Link>)}
            
        </div>
      </div>
    </div>
  ))}
  

</CardSection>
    
    

    </>
  )
}

export default ProyectSection