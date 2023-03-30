import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import proyects from '../../../utils/proyects';

function Grid() {
  return (
    <Row xs={1} md={2} className="g-4">
      {proyects.map((proyect) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={proyect.image} />
            <Card.Body>
              <Card.Title>{proyect.title} </Card.Title>
              <Card.Text>
                {proyect.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Grid;