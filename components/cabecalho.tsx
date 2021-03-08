import { Box, Container, Flex, HStack, Text, Image, spacer, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Cabecalho: React.FC = ({ largura, title }) => {
    const property = {
        title: "PRODUTOS",
        largura: "80%",
    }
    return (
        <Flex gridArea="cabecalho" bg="brand.100" flexDir="row">
            <Box p="20"><img src="/faatlogo.png" alt="logo do grupo faat" /> </Box>
            <Box p="20"><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
            <Box p="10"><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
        </Flex>
    )

}
export default Cabecalho;