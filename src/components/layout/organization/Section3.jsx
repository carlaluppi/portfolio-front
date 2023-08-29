import React from 'react'
import {    Main31, Main32} from '../styled';
import ProyectSection from './ProyectSection';
import AOS from 'aos';


AOS.init();

const Section3 = () => {

    return (

    <Main31>
        <Main32 id='proyectos'>
            <h1>MIS PROYECTOS</h1>
            
            <ProyectSection/>
        </Main32>
    </Main31>

)
}

export default Section3;