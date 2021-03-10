import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link, VStack,
    
} from "@chakra-ui/react"
import Produtos from "../components/produtos";
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBannersProdutos from "../components/barraBannersProdutos";
import Rodape from "../components/rodape";

export default function Contatos() {
    return (
        <Grid
            height="100vh"
            templateColumns="1fr 1080px 1fr"
            templateRows="200px 50px 20px 60px 1fr 90px"
            templateAreas="
            '. cabecalho .'
            '. menu .' 
            '. . .'          
                '. titulo .'     
                '. principal .'   
                '. rodape .'         
                "
        >
            <Flex></Flex>
            {/* Cabeçalho */}
            <Cabecalho></Cabecalho>
            <Menu ></Menu>
            <Titulo title="CONTATOS"></Titulo>
            <Flex gridArea="principal"   >
                <Box flexDir="column" >
                    <VStack spacing="25px" color="black">
                        <Produtos  ></Produtos>
                        <Produtos  ></Produtos>
                        <Produtos  ></Produtos>
                    </VStack>
                </Box>
            <BarraBannersProdutos></BarraBannersProdutos>
            </Flex>
            <Rodape />
            
            <Flex></Flex>
        </Grid>

    )
}


