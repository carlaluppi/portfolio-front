import React from 'react'
import {ContainerMain3} from '../styled';
import Card from '../organization/Card';
import proyects from '../../../utils/proyects';

function createdCard(proyects) {

    return(
        <Card
        key={proyects.id}
        title={proyects.title}
        image={proyects.image}
        text={proyects.text}
        />
    );
}
const SectionThree = () => {

    return (

    <ContainerMain3 id='proyectos'> 

        <h1>mis proyectos</h1>
        {proyects.map(createdCard)}


        </ContainerMain3>

)
}

export default SectionThree;