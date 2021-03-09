import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Quadro: React.FC = ({ imag, titulo, text }) => {
    const property = {
        imag: imag,
        titulo: titulo,
        text: text,

    }
    return (
        <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center" justifyContent="center" shadow="xl" color="gray.600">
            <Image src={property.imag} p='2' />
            <Heading size="md" >{property.titulo}</Heading>
            <br></br>
            <Text>
                {property.text}

            </Text>
        </Box>
    )

}
export default Quadro;