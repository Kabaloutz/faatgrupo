{/* Cabeçalho */}
import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link,
    Fade, ScaleFade, Slide, SlideFade,
} from "@chakra-ui/react"
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBanners from "../components/barraBanners";
import Carrossel from "../components/carrossel";
import Painel from "../components/painel";
import QuadroTexto from "../components/quadroTexto";
import Rodape from "../components/rodape";
import BannerHor from "../components/bannerHorizontal";
import {motion} from "framer-motion";

export default function Home() {

    return (

        <Grid
            height="100vh"
            templateColumns="1fr 1080px 1fr"
            templateRows="200px 50px 40px 300px 50px 300px 50px 60px 1fr 20px 90px"
            templateAreas="
                '. Cabecalho .'
                '. menu .' 
                '. . .'         
                '. carrossel .' 
                '. . .'  
                '. Painel .' 
                '. . esquerda' 
                '. titulo .'     
                '. principal .'
                '. . .'     
                '. rodape .'         
                "
        >
           <Box gridArea="Cabecalho"><Cabecalho></Cabecalho></Box>
           <Box gridArea="Cabecalho"><Menu></Menu></Box>
           <Box gridArea="Cabecalho"><Carrossel ></Carrossel></Box>
           <Box gridArea="Cabecalho"><Painel></Painel></Box>
           <Box gridArea="Cabecalho"><Titulo title="CONTRUINDO SONHOS"></Titulo></Box>
           <Box gridArea="Cabecalho"><QuadroTexto /></Box >
           <Box gridArea="Cabecalho"><BannerHor ></BannerHor></Box>
           <Box gridArea="Cabecalho"><BarraBanners ></BarraBanners></Box>
           <Box gridArea="Cabecalho"><Rodape /></Box>
        </Grid>

    )
}


