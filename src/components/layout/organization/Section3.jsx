import React from 'react'
import {ContainerMain3} from '../styled';
import Card from '../organization/Card';

const SectionThree = (props) => {

    return (
        

        <ContainerMain3 id='proyectos'> 

<Card
      
      name={name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
            

        </ContainerMain3>

)
}

export default SectionThree;