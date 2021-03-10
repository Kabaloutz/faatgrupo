import { Box, Container, Flex, Stack, HStack, VStack, Text, Image,  Link, Heading } from '@chakra-ui/react';
import React from 'react';

const BarraBannersProdutos: React.FC = () => {

    return (
        <VStack  ml="5" color="black" spacing="12" >
            <Box bg="white"  justifyContent="center" shadow="xl"  w="200px" h="200px"></Box>
            <Box mt="5" bg="white"  justifyContent="center" shadow="xl"  w="200px" h="200px"></Box>
            <Box mt="5" bg="white"  justifyContent="center" shadow="xl"  w="200px" h="200px"></Box>
        </VStack>
    )

}
export default BarraBannersProdutos;