import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link,
    Fade, ScaleFade, Slide, SlideFade,
} from "@chakra-ui/react"
import theme from '../styles/theme';
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBanners from "../components/barraBanners";
import Carrossel from "../components/carrossel";
import Quadros from "../components/quadros";
import QuadroTexto from "../components/quadroTexto";
import Rodape from "../components/rodape";
import BannerHor from "../components/bannerHorizontal";


export default function Home() {

    return (
        <Grid
            height="100vh"
            templateColumns="1fr 1080px 1fr"
            templateRows="200px 50px 40px 300px 50px 300px 50px 60px 1fr 90px"
            templateAreas="
                '. cabecalho .'
                '. menu .' 
                '. . .'         
                '. carrossel .' 
                '. . .'  
                '. quadros .' 
                '. . esquerda' 
                '. titulo .'     
                '. principal .'   
                '. rodape .'         
                "
        >
            <Flex gridArea="direita"></Flex>
            {/* Cabeçalho */}
            <Cabecalho></Cabecalho>
            <Menu></Menu>
            <Carrossel ></Carrossel>
            <Quadros></Quadros>
            <Titulo titulo="CONTRUINDO SONHOS"></Titulo>
            <Flex gridArea="principal" >
                <Box >
                    <QuadroTexto
Link="/"
                    />
                    <BannerHor ></BannerHor>
                </Box>
                <BarraBanners ></BarraBanners>

            </Flex>
            <Rodape />
        </Grid>

    )
}


