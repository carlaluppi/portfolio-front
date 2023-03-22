import styled from "styled-components";


export const ContainerNav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&family=Work+Sans:wght@700&display=swap');

    /* background-color: lightcoral; */

        h1 {
            font-family: "Work Sans";
            margin: 0;
        }

        hr {
            height: 2px;
            background-color: black;
            border:none;
            opacity: 1;
        }
`;

export const Nav = styled.div`
    display: flex;
    gap:50px;
    justify-content: flex-end;
    margin-top: 7px;

        a {
            text-decoration: none;
            font-family: "Questrial";
            color:black;
        }     

`;

export const ContainerBg = styled.section`
    background-color: #F0CB46;

`;

export const ContainerMain = styled.section`


`;

export const DivImg = styled.div`

   margin-left:300px;
   margin-top: 200px;
   position: relative;
   img {
    width: 500px;
   }

    
`;

export const ContainerContact = styled.div`

        display: flex;
        flex-direction: column;
        margin-left: 70px;
        margin-top: -100px;


`;
export const Vertical = styled.div`

        padding-top:30px;
        position: relative;
`;
export const Icon = styled.div`

        display: flex;
        flex-direction: column;
        gap:10px;


`;



