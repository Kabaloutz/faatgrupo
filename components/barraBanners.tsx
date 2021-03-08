import { Box, Container, Flex, HStack, Text, Image, spacer, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const BarraBanners: React.FC = ({ largura, title }) => {
    const property = {
        title: "PRODUTOS",
        largura: "80%",
    }
    return (
        <Box bg="brand.100" ml="5">
            <Heading size="sm" alignItems="center" justifyItems="center" p="3" m="5" >Espaço barra lateral</Heading>
            <Box p="3" m="5" bg="yellow.700" w="200px" h="200px">banner</Box>
            <Box >banner</Box>
            <Box >banner</Box>
        </Box>
    )

}
export default BarraBanners;