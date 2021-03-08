import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link,
} from "@chakra-ui/react"
import theme from '../styles/theme';
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBanners from "../components/barraBanners";

export default function Home() {
    return (
        <Grid
            height="100vh"
            templateColumns="1fr 1080px 1fr"
            templateRows="200px 50px 30px 50px 1fr "
            templateAreas="
        '. cabecalho .'
        'direita menu esquerda' 
        'direita . esquerda' 
        'direita titulo esquerda'     
        'direita principal esquerda'          
        "
            justifyContent="center"
        >
            <Flex gridArea="direita"></Flex>
            {/* Cabeçalho */}
            <Cabecalho></Cabecalho>
            <Menu></Menu>
            <Titulo titulo="CONTRUINDO SONHOS"></Titulo>
            <Flex gridArea="principal" >
                <Box w="100%"></Box>
                <BarraBanners></BarraBanners>
            </Flex>
            <Flex gridArea="esquerda"></Flex>
        </Grid>

    )
}


