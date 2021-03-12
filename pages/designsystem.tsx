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
import { motion } from "framer-motion";
import React from "react";
import GlobalStyles from '../styles/globals';
import { Main, Sticky, Section } from '../styles';
import Carrossel from "../components/carrossel";
import Painel from "../components/painel";
import BannerHor from "../components/bannerHorizontal";
import BarraBanners from "../components/barraBanners";
import QuadroTexto from "../components/quadroTexto";
import CarrosselAnimado from '../components/carrosselAnimado'

{/* comentario */ }
export default function Designsystem() {
    return (
        <>
            <GlobalStyles />
            <Section style={{ height: "50%" }}>
                <Sticky>
                    <Grid
                        height="100vh"
                        templateColumns="1fr 1080px 1fr"
                        templateRows="200px 50px 1fr 20px 60px 1fr 90px"
                        templateAreas="
                                '. cabecalho .'
                                '. menu .' 
                                
                                '. carrossel .' 
                                '. . .'          
                                    '. titulo .'     
                                    '. principal2 .'   
                                    '. rodape .'         
                                    "
                    >
                        <Flex></Flex>
                        <Cabecalho></Cabecalho>
                        <Menu ></Menu>
                        <VStack gridArea="carrossel" spacing="25px" color="black">
                                <Carrossel ></Carrossel>
                        </VStack>
                        <Carrossel ></Carrossel>
                        <Titulo title="CONTATOS"></Titulo>
                        <Flex gridArea="principal2" >
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
                    </Grid>
                </Sticky>
            </Section>


            <Section style={{ height: "50%" }}>
                <Sticky>
                    <Grid
                        height="100vh"
                        templateColumns="1fr 1080px 1fr"
                        templateRows="200px 50px 40px 300px 50px 300px 50px 60px 1fr 20px 90px"
                        templateAreas="
                '. cabecalho .'
                '. menu .' 
                '. . .'         
                '. . .'  
                '. Painel .' 
                '. . esquerda' 
                '. titulo .'     
                '. principal .'
                '. . .'     
                '. rodape .'         
                "
                    >
                        <Cabecalho ></Cabecalho>
                        <Menu gridArea="menu"></Menu>
                        <CarrosselAnimado ></CarrosselAnimado>
                        <Painel></Painel>
                        <Titulo title="CONTRUINDO SONHOS"></Titulo>
                        <Flex gridArea="principal" >
                            <Box >
                                <QuadroTexto />
                                <BannerHor ></BannerHor>
                            </Box>
                            <BarraBanners ></BarraBanners>
                        </Flex>
                        <Rodape />
                    </Grid>
                </Sticky>
            </Section>
        </>
    )
}


