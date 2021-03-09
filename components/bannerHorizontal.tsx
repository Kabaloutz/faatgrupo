import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const BannerHor: React.FC = ({ imag, titulo, text }) => {
    const property = {
        imag: imag,
        titulo: titulo,
        text: text,
    }
    return (
        <HStack mt="30" borderColor="gray.600" border="5px" bg="white"  justifyContent="center" shadow="xl" color="black" flexDir="row" h="110px">
            <Text></Text>
        </HStack>
    )

}
export default BannerHor;