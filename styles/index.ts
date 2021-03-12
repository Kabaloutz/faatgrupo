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
  display:none;
    background: red;
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
    width: 100vw;
    height: 100vh;
    background: #151515;
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    

.example-container {
    width: 50vw;
    height: 50vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: red;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }
  
  .next {
    right: 10px;
  }
  
  .prev {
    left: 10px;
    transform: scale(-1);
  }
  
  img {
    position: absolute;
    max-width: 100vw;
  }
  
  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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

