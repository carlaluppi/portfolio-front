import React from 'react'
import {  ContainerMain3, Main3} from '../styled';
import ProyectSection from './ProyectSection';
import AOS from 'aos';

AOS.init();

const Section3 = () => {

    return (
        <ContainerMain3>

        
            <Main3 id='proyectos'>

                <h1>MIS PROYECTOS</h1>
                <ProyectSection/>

            </Main3>
        
    </ContainerMain3>

)
}

export default Section3;