import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import proyects from '../../../utils/proyects';
import { CardStyle } from '../styled';
import GitHubButton from 'react-github-btn'
import { useNavigate } from 'react-router-dom';

function ProyectCard() {
 

  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (

    <Row xs={1} md={2} className="g-4">

      {proyects.map((proyect, index) => (
      
        <Col className='d-flex justify-content-center'>
          <CardStyle >
            
          <a href="/" onClick={() => handleClick(proyect.link)}> 
            <Card.Img src={proyect.image} alt={index}/>
              </a>
            <Card.Body className='mb-0'>
              <Card.Title>{proyect.title} </Card.Title>
              <Card.Text>{proyect.text} </Card.Text>
              
              <GitHubButton  href={proyect.repo} data-color-scheme="no-preference: dark; light: dark_high_contrast; dark: dark_high_contrast;" data-size="large" aria-label="Follow @buttons on GitHub"> Front</GitHubButton>
              {proyect.repoback && (
              <GitHubButton  href={proyect.repoback} data-color-scheme="no-preference: dark; light: dark_high_contrast; dark: dark_high_contrast;" data-size="large" aria-label="Follow @buttons on GitHub"> Back</GitHubButton>) }

            
        

              {Array.isArray(proyect.tech) && (
                <div>
                  {proyect.tech.map((tech, index) => (
                    <img src={tech} alt={index}></img>
                  ))}
                </div>
              )}

            </Card.Body>
          </CardStyle>
        </Col>
      
      ))}
  </Row>
    
  );
}

export default ProyectCard;