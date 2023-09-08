import styled from "styled-components";
import { Card } from "react-bootstrap";


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
    background-color: rgb(245, 245, 245, 0.2);

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
                    z-index: +100;
                    
            };
`;
export const Vertical = styled.div`
        padding-top:30px;
        position: relative;
        @media (max-width: 700px) {
                    img{
                        display: none;
                    }}
            ;
        
`;
export const Icon = styled.div`
        display: flex;
        flex-direction: column;
        gap:0.5rem;
        z-index: +100;

        @media (max-width: 700px) 
                {
                    margin-left: 3%; 
                    gap: 0.3rem;
                    z-index: +100;
                    

            };
`;

export const ContainerMain2 = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
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


export const Main21 = styled.div`
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
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap:0;
                
                h1{ 
                    display: none;
        }
        p{
            font-family: "Questrial";
            width: 80%;
            letter-spacing: 2px; 
            transform: translateX(10%);
            margin-top: 2%;
            
        }
            };
`;
export const Main22 = styled(Main21)`
    
    height: 100vh;
    width: 50%;
    background-color: rgb(245, 245, 245);
    display: flex;
    justify-content: center;
        img{
                width: 50%;
                transform: translateX(50%);
        } 
           
    @media (max-width: 700px) {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;

            img{
                width: 100%;
                transform: translateX(0%);
                padding: 10%;
                display: flex;
                justify-content: center;

            }   
        }
    `;



export const Main4 = styled(Main21)`
    height: 100vh;
    width: 100%;
    display: flex; 
    align-items: flex-end;
    `;

export const ContainerMain3 = styled.section`
   min-height: 100vh;  
`;

export const Main3 = styled.section`
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

        h1{    
            padding: 2%;
            font-family: "Questrial";
            font-size: 2rem;
            font-weight:600;
            
        }
        @media (max-width: 700px) 
                {
                height: 100%;
                h1{
                    margin-top: 10%;
                    font-size: 1.5rem;
                    font-weight:600;
                }
            };
            
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
    @media (max-width: 700px) 
                {
                width: 100%;
                
                
            };
`;

export const CardStyle = styled(Card)`  
    
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: "Questrial";
    border-color:black;
    box-shadow:0.3em 0.3em 1em rgba(0,0,0,0.2);

    &:hover {
        scale: 1.01;
    }
    .card-img {
        padding: 0.5rem;
        background: rgba(0,0,0,0.8);

    }
    @media (max-width: 700px) 
                {
                display: flex;
                align-items: center;
                width: 100%;
                };
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap:7px;
    margin-top: 1%;
    @media (max-width: 700px) 
                {
                display: flex;
                flex-wrap: wrap;
                
            };
    
    
`; 

export const Contact = styled(Title)`
 
 display: flex;
 flex-direction:column;
 gap:50px;
 background-color: #F0CB46;
 z-index: +10;
 
         ul {
            list-style: none;
            font-size:1.2rem;
            font-family: "Questrial";
            li{
            gap: 8px;
            } 
        } 
  
            @media (max-width: 700px) 
                {
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateX(-5%);
                gap:10px;

            }

    
    .title{
        font-weight:800;
        font-size: 6rem;
        position: relative;
        @media (max-width: 700px) 
                {
                font-weight:7500;
                font-size: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                }

        &::after{
            content: "";
            width: 110%;
            height: 1.5rem;
            background-color: white;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
            transform: translateX(-5%);

    
    }}

`; 

export const CardSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card__description {
    margin: 0% 10% ;
    display:flex;
    justify-content: center;

    }
    .link {
        font-weight: 450;
        text-decoration: underline;
        letter-spacing: 0.7px;
    }

    .card {
    position: relative;
    height: 230px;
    width:500px;
    background: #fff;
    overflow: hidden;
    float: left;
    margin: 15px;
    
    &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: calc(100% - 100px);
    left: 0;
    opacity: 1;
    transition: all 0.75s ease-in-out;
    
    display: flex;
    align-items: top;
    justify-content: center;
    
    &-inner {
    position: relative;
    display: block;
    height: 80px;

    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    justify-content: center;
      /* background:red; */
    transition: all 0.75s ease-in-out;
    }
    &:after {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    border-color:  #F0CB46;
    border-style: solid;
    border-width: 3px 0 0 3px;
    content: "";
    }
    }
    &__title {
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Questrial";
    color: black;
    letter-spacing: 1px;
    font-size: 1.2rem;
    }
    &__description {
    color: black;
    font-family: "Questrial";
    }
    &:after {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-color:  #F0CB46;
    border-style: solid;
    border-width: 0 3px 3px 0;
    content: "";
  }
  &:hover 
    .card__content {
      top: 0;

      &-inner {
        height: 100%;

      }
}

}
@media (max-width: 700px) 
                {
                width: 95%;
                
           
            .card__description {
    margin: 0% 5% ;
    display:flex;
    justify-content: center;} 


    };
`; 


