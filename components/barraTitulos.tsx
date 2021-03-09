import { Box, Container, Flex, HStack, Text, Image,  Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo: React.FC = ({ titulo }) => {
    const property = {
        titulo: titulo,
    }
    return (
        <Flex  gridArea="titulo"  bg="yellow.700" mb="3" alignItems="center" justifyContent="start" w="100%" >
            <Box p="2" ml="3"><b>{property.titulo}</b></Box>
        </Flex>
    )

}
export default Titulo;