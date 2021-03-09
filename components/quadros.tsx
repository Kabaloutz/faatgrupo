import { Box, Container, Flex, HStack, Text, Image, Link, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Quadro from './quadro'
const Quadros: React.FC = () => {
    const property = {

    }
    return (
        <HStack gridArea="quadros" align="center" justifyContent="center">
            <Wrap spacing="80px">
                <WrapItem>
                    <Quadro imag="/t_001.jpg" titulo="HISTÓRIA" text="Conheça mais sobre a história da Cerâmica Primavera."/>
                </WrapItem>
                <WrapItem>
                    <Quadro imag="/processo_imagem.jpg" titulo="PROCESSO PRODUTIVO" text="Como são produzidos nossos produtos? Saiba mais..."/>
                </WrapItem>
                <WrapItem>
                    <Quadro imag="/simulador_imagem_1.jpg" titulo="SIMULADOR" text="Calcule a quantidade necessária de tijolos para a sua obra."/>
                </WrapItem>
                <WrapItem>
                    <Quadro imag="/trabalheconosco.jpg" titulo="TRABALHE CONOSCO" text="Venha fazer parte da nossa equipe. Envie seu currículo!"/>
                </WrapItem>
            </Wrap>
        </HStack>
    )

}
export default Quadros;