import styled from "styled-components";
import { Card , Col} from "react-bootstrap";


export const ContainerNav = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&family=Work+Sans:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&family=Work+Sans:wght@700&display=swap');

    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    width: 100%;
    top:0;
    position: fixed;
    z-index: 10;

        hr {
            @media (
                min-width: 600px) 
                {
                height: 2px;
                width: 30%;
                background-color: black;
                border:none;
                opacity: 1;
            };
        }
`;

export const Nav = styled.div`
    display: flex;
    gap:2rem;
    justify-content: flex-end;
    margin-top: 7px;

        a {
            text-decoration: none;
            font-family: "Questrial";
            color:black;
        }     
`;


export const ContainerMain = styled.section`
    height: 100vh;
    width: 100%;
    padding: 0 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

        .year{
            color: black;
            font-weight:800;
            font-size: 1rem;
            position: fixed;
            bottom: 1rem;
            right:3rem;
        }
        @media (max-width: 700px) 
                {
                h1{
                    left:10rem;
                }
                .year{
                    display: none;
                }
            };
`;

export const Title = styled.div`
    transform: translateX(-50%);
    
        .title{
            font-weight:800;
            font-size: 6rem;
            position: relative;

            &::after{
                content: "";
                width: 110%;
                height: 1.5rem;
                background-color: #F0CB46;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: -1;
                transform: translateX(-5%);
            }
        }
`;

export const ContainerContact = styled.div`
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        margin-left: 5%;
        bottom: 2rem;
        @media (max-width: 700px) 
                {
                    margin-left: 3%; 
            };

`;
export const Vertical = styled.div`
        padding-top:30px;
        position: relative;
        
`;
export const Icon = styled.div`
        display: flex;
        flex-direction: column;
        gap:0.5rem;
`;

export const ContainerMain2 = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    .year{
            color: black;
            font-weight:800;
            font-size: 1rem;
            position: absolute;
            bottom: 1rem;
            right:3rem;
        }
        @media (max-width: 700px) 
                {
                display: flex;
                flex-direction: column;
                
            };
`;

   
export const Main21 = styled.section`
    background-color: #F0CB46;
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
        h1{ 
            font-size: 5rem;
            font-weight:800;
        }
    
        p{
            font-family: "Questrial";
            width: 40%;
            letter-spacing: 2px; 
            transform: translateX(15%);
        }
        @media (max-width: 700px) 
                {
                width: 100%;
            };
`;
export const Main22 = styled(Main21)`
    
    height: 100vh;
    width: 50%;
    background-color: white;
    @media (max-width: 700px) 
                {
                width: 100%;
            };
    `;
export const ContainerMain3 = styled.section`
    height: 100vh;

`;
export const Main31 = styled.section`
    width: 100%;
    height: 20vh;
    background-color: #F0CB46;

    `;
    export const Main32 = styled.section`
    padding: 2% 10%;
    gap:10px;

    `;
// -----EFECTO DE SCROLL -----PADRE
export const ContainerScroll = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    scroll-behavior: smooth;
    `;
// --------------------------------HIJOS section    
export const Sections = styled.section`  
    scroll-snap-align: start;
`;

export const ButtonDw = styled.button` 
border-radius :10px ;
border-color: black;
background-color:#cbbfe7;

    :hover {
    transform: translate(-0.25rem,-0.25rem);
    background: #cbbfe7;
    border-color: black;
    box-shadow: 0.25rem 0.25rem var(--bg);
    }

    a {
        text-decoration: none;
        color: black;
        font-family: "Work Sans";
    }
`;

export const CardStyle = styled(Card)`  
    width: 30rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    font-family: "Questrial";
    &:hover {
        scale: 1.01;
    }
    .card-img {
        padding: 1rem;
        width: 100%;
        background-color: #2A2B2F;
        height: 4.2rem;
    }
    @media (max-width: 700px) 
                {
                display: flex;
                align-items: center;
                width: 100%;
                };
`;
