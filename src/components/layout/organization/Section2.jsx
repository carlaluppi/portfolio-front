import React from 'react'
import {ContainerMain2, Main22, Main21} from '../styled';
import Contact from '../navigation/Contact';
import DownLoad from './DownLoad';
import Foto from "../../../assets/proyects/Foto1a.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Section2 = () => {
  
    return (

        <ContainerMain2 id='sobremi'> 

            <Main22  >
                
                <div>
                <img src={Foto} alt="foto" /> 
                </div>
            </Main22>  

            <Main21 >
            
                <h1 >Sobre <br />
                mi</h1>
                <p>
                Hola! <strong>Soy Carla. </strong> <br />
                Desarrolladora Full Stack. <br /> Me encanta aprender cosas nuevas y plantearme retos.</p>
                <DownLoad/>
            
            </Main21> 
            

            <Contact/>

        </ContainerMain2>

)
}

export default Section2;