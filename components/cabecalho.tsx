import { Box, Container, Flex, HStack, Text, Image,  Link, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';

const Cabecalho: React.FC = () => {
   
    return (
        <Flex gridArea="cabecalho" flexDir="row" align="center"  height="200px">
            <Box><Image h="150px" src="/faatlogo.png"  alt="logo do grupo faat" /> </Box>
            <Spacer />
            <Box ><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
            <Spacer />
            <Box ><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
        </Flex>
    )

}
export default Cabecalho;