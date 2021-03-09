import { Box, Container, Flex, Stack, HStack, VStack, Text, Image,  Link, Heading } from '@chakra-ui/react';
import React from 'react';

const BarraBannersProdutos: React.FC = () => {
    const property = {
        title: "PRODUTOS",
        largura: "80%",
    }
    return (
        <VStack  ml="5" color="black" spacing="12" >
            <Box borderColor="gray.600"  bg="white"  justifyContent="center" shadow="xl" color="black" w="200px" h="200px"></Box>
            <Box borderColor="gray.600" mt="5" bg="white"  justifyContent="center" shadow="xl" color="black"  w="200px" h="200px"></Box>
            <Box borderColor="gray.600" mt="5" bg="white"  justifyContent="center" shadow="xl" color="black"  w="200px" h="200px"></Box>
        </VStack>
    )

}
export default BarraBannersProdutos;