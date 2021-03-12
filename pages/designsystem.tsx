import { Grid, Flex, Box, VStack } from "@chakra-ui/react"
import Produtos from "../components/produtos";
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBannersProdutos from "../components/barraBannersProdutos";
import Rodape from "../components/rodape";
import React from "react";
import GlobalStyles from '../styles/globals';
import Carrossel from "../components/carrossel";
import Painel from "../components/painel";
import BannerHor from "../components/bannerHorizontal";
import BarraBanners from "../components/barraBanners";
import QuadroTexto from "../components/quadroTexto";
import { Section, Sticky } from "../styles";

{/* comentario */ }
export default function Designsystem() {
    return (
        <>
            <GlobalStyles />
            <Section >
                <Sticky>
                    <Cabecalho></Cabecalho>
                    <Menu ></Menu>
                    <Carrossel ></Carrossel>
                    <Titulo title="CONTATOS"></Titulo>
                    <VStack spacing="25px" color="black">
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>
                        <Produtos title="Laje H-7" imageUrl="/laje_s1_1.jpg" imageAlt="Rear view of modern home with pool" qnt="17,4 deitado" calcQnt="*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos." ></Produtos>
                    </VStack>
                    <BarraBannersProdutos></BarraBannersProdutos> 
                <Rodape />
                </Sticky>
        </Section>

        </>
    )
}


