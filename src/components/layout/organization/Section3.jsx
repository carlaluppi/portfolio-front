import React from 'react'
import {ContainerMain3, Main31, Main32} from '../styled';
import ProyectCard from './ProyectCard';
import AOS from 'aos';

AOS.init();

const Section3 = () => {

    return (

    <ContainerMain3 id='proyectos'> 
    <Main31></Main31>
        <Main32>
            <h1>MIS PROYECTOS</h1>
            <ProyectCard/>
        </Main32>

    </ContainerMain3>

)
}

export default Section3;