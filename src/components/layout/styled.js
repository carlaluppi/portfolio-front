import styled from "styled-components";


export const ContainerNav = styled.div`
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

export const ContainerMain2 = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    

    .year{
            color: black;
            font-weight:800;
            font-size: 1rem;
            position: absolute;
            bottom: 1rem;
            right:3rem;
        }
`;
   
export const ContainerRight = styled.section`
    background-color: #F0CB46;
    height: 100vh;
    width: 50%;
    margin: 0;
    
`;
export const ContainerLeft = styled.section`
    
    height: 100vh;
    width: 50%;
   
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



