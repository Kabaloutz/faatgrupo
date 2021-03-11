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
import {motion} from "framer-motion";
import React from "react";
import GlobalStyles from '../styles/Global'
import {Main} from '../styles'

export default function Designsystem() {
    return (
        <Grid
            height="100vh"
            templateColumns="1fr"
            templateRows="1fr"
            templateAreas="
            '.'  "
        >
            <Flex>
                
      <>
        <GlobalStyles />
        <Main style={{ height: '1610vh'}}>
          <section style={{ h:"72.7%"}}>
          
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
          </section>

          {/* Cabeçalho 
          
          
          <section style={{ h:"12.7%"}}>
          
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
            <Cabecalho></Cabecalho>
            <Menu ></Menu>
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
          </section>


          
          */}
        </Main>
      </>
            </Flex>
        </Grid>

    )
}


