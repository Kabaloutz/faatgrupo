import { Box, Container, Flex, Stack, HStack, VStack, Text, Image,  Link, Heading } from '@chakra-ui/react';
import React from 'react';

const BarraBanners: React.FC = () => {
    const property = {
        title: "PRODUTOS",
        largura: "80%",
    }
    return (
        <VStack gridArea="esquerda"  ml="5" color="black" spacing="5" >
            <Box bg="white"  justifyContent="center" shadow="xl" color="black" w="200px" h="200px"></Box>
            <Box mt="5" bg="white"  justifyContent="center" shadow="xl" color="black"  w="200px" h="200px"></Box>
        </VStack>
    )

}
export default BarraBanners;