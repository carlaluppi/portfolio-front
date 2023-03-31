import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import proyects from '../../../utils/proyects';
import { CardStyle } from '../styled';

function ProyectCard() {
  return (
    
    <Row xs={1} md={2} className="g-4">
      {proyects.map((proyect) => (

        <Col className='d-flex justify-content-center'>
          <CardStyle >

            <Card.Img src={proyect.image} />

            <Card.Body>
              <Card.Title>{proyect.title} </Card.Title>
              <Card.Text>
                {proyect.text}
              </Card.Text>
            </Card.Body>

          </CardStyle>
        </Col>
      ))}
    </Row>
  );
}

export default ProyectCard;