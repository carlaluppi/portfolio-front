import React from 'react'
import { Main4,Contact} from '../styled';


const Section4 = () => {

    return (

        <Main4 id='contacto'>
            <Contact>
            <h1 className='title'>Contáctame</h1>

                <ul>
                    <li> TEL:  &nbsp;&nbsp; <a href='https://api.whatsapp.com/send/?phone=34622683469&text&type=phone_number&app_absent=0'>+ 34 622683469</a> </li>
                    <li>LINKEDIN:&nbsp; <a href="https://www.linkedin.com/in/carla-luppi">/carla-luppi</a></li>
                    <li>CORREO: &nbsp;&nbsp; carluppi99@gmail.com</li>
                </ul>

            </Contact>
        </Main4>
    

)
}

export default Section4;