import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Quadro: React.FC = () => {

    return (
        <Box w="200px" h="300px" bg="white" align="center"  shadow="xl" color="preto.100" >
            <Image m="2" src="/t_001.jpg"  ></Image>
            <Heading m="2" size="md" >"HISTÓRIA"</Heading>
            <Text>
                "Conheça mais sobre a história da Cerâmica Primavera."
            </Text>
        </Box>
        
    )

}
export default Quadro;