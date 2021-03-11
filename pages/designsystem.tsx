import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link, VStack, Text

} from "@chakra-ui/react"
import Produtos from "../components/produtos";
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBannersProdutos from "../components/barraBannersProdutos";
import Rodape from "../components/rodape";
import { Head } from "next/document";

export default function Designsystem() {
    return (
        <Grid
            height="100vh"
            templateColumns="1fr 500px 500px 1fr"
            templateRows="200px 50px 20px 60px 1fr 90px"
            templateAreas="
            '. Cores Tipografia  .' 
            '. Titulos Textos  .'   
            '. Componentes .'
            '. Cabecalho  .' 
            '. barraDeTitilo saibaMais  .' 
            '. menu banners  .'          
                "
        >
            <Flex>
                <Box bg="gray" gridArea="Cores" flexDir="row">
                    <Heading>Cores:</Heading>
                    <Box>
                        <Heading as="h3">Marca:</Heading>                        
                        <Heading as="h5">Elementos:</Heading>
                        <Box bg="elementos.ar" br="45"></Box>
                        <Text>#f7fafc</Text>
                        <Box bg="red" br="45"></Box>
                        <Box bg="red" br="45"></Box>
                        <Box bg="red" br="45"></Box>
                        <Box bg="red" br="45"></Box>
                    </Box>
                </Box>
                <Box bg="gray" gridArea="Tipografia">
                    <Heading>Tipografia:</Heading>
                    <Box>tamanho das letras e fontes</Box>
                </Box>
                <Box bg="gray" gridArea="Titulos">
                    <Heading>Titulos:</Heading>
                    <Box>tamanho das letras e fontes</Box>
                </Box>
                <Box bg="gray" >
                    <Heading>Cores:</Heading>
                    <Box>tamanho das letras e fontes</Box>
                    <Cabecalho></Cabecalho>
                </Box>
                <Box bg="gray" >
                    <Heading>Cores:</Heading>
                    <Box bg="red" br="45"></Box>
                </Box>
            </Flex>
            {/* Cabeçalho */}
            <Titulo title="CONTATOS"></Titulo>
            <Flex gridArea="principal"   >
                <Box flexDir="column" >
                    <VStack spacing="25px" color="black">
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>

                    </VStack>
                </Box>
                <BarraBannersProdutos></BarraBannersProdutos>
            </Flex>
            <Rodape />

            <Flex></Flex>
        </Grid>

    )
}


