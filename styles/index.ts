import styled from "styled-components";
import {motion} from "framer-motion";

export const Main =styled.main`
.HOME{
    background: red;
    overflow: hidden;
    .offset{}
    .a{
        background: #f5f1ea;        
    }
    .b{
        background: #582534; 
    }
    .c{
        background: #0a7397; 
    }
}
.carAnimado{
    background: red;
    display: flex;
    align-items: start;
}
.EMPRESA
{
    background: "#00AFEF";
}
.PRODUTOS
{
    background: "#00AFEF";
}
.SIMULADOR
{
    background: "#00AFEF";
}
.CONTATOS 
{
    background: "#5F8E49";
}   
.tela 
{
    background: "green";
} 
`;
export const Section =styled.div``;
export const Sticky =styled(motion.div)`
    height: 100vh;
    position: sticky;
    top:0;
    left:0;
    right: 0;
    `;

