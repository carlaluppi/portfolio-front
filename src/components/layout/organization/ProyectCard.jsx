import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import proyects from '../../../utils/proyects';
import { CardStyle, Icons} from '../styled';
import GitHubButton from 'react-github-btn'

function ProyectCard() {

  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (

    <Row xs={1} md={2} className="g-5">

      {proyects.map((proyect) => (
      
        <Col key={proyect.id} className='d-flex justify-content-center'>

          <CardStyle className='g-5'>
            
            <a href="/" onClick={() => handleClick(proyect.link)}> 
            <Card.Img  src={proyect.image} key={proyect.id}  />
              </a>

            <Card.Body className='w-100'>
              {/* <Card.Title className='d-flex justify-content-center' > {proyect.title} </Card.Title> */}
              <Card.Text> {proyect.text} </Card.Text>
              
              <GitHubButton href={proyect.repo}data-size="large" aria-label="Follow @buttons on GitHub">Front</GitHubButton>
                
                {proyect.repoback && (
                <GitHubButton  href={proyect.repoback} data-color-scheme="no-preference: dark; light: dark_high_contrast; dark: dark_high_contrast;" data-size="large" aria-label="Follow @buttons on GitHub"> Back</GitHubButton>) }

                {Array.isArray(proyect.tech) && (
                  <Icons>
                  {proyect.tech.map((tech, index) => (
                    <img src={tech} alt={index} key={`${proyect.id}-${index}`} />
                    ))}
                  </Icons>
                )}
              

            </Card.Body>
          </CardStyle>
        </Col>
      
      ))}
  </Row>
    
  );
}

export default ProyectCard;