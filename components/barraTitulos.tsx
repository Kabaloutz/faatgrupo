import { Box, Container, Flex, HStack, Text, Image, spacer, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo: React.FC = ({ largura, titulo }) => {
    const property = {
        titulo: titulo,
        largura: "80%",
    }
    return (
        <Flex  gridArea="titulo"  bg="yellow.700" mb="3" alignItems="center" justifyContent="start" w="76%" >
            <Box p="5%"><b>{property.titulo}</b></Box>
        </Flex>
    )

}
export default Titulo;