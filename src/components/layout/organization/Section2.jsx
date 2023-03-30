import React from 'react'
import {ContainerMain2, Main1, Main2} from '../styled';
import Contact from '../navigation/Contact';
import DownLoad from './DownLoad';


const SectionTwo = () => {

    return (

        <ContainerMain2 id='sobremi'> 

            <Main2>
                <img src="foto" alt="" /> foto
                <div>
                
                </div>
            </Main2>  

            <Main1 >
                <h1 >Intr <br />
                odu <br />cción.</h1>
                <p>
                Hola! <strong>Soy Carla. </strong> <br />
                Desarrolladora Full Stack. <br /> Me encanta aprender cosas nuevas y plantearme retos.</p>
                <DownLoad/>
            </Main1>   
            <Contact/>

        </ContainerMain2>

)
}

export default SectionTwo;