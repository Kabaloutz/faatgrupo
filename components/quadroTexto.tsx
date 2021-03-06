import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const QuadroTexto: React.FC = () => {

    return (
        <HStack bg="white" justifyContent="center" align="flex-start" shadow="xl" color="preto.200" flexDir="row" >
            <Box pr="2%"  pt="2%" pb="2%">
                <Image src='/processo_imagem.jpg' align="start" w="250px" h="200px" />
            </Box>
            <Box pr="5" w="60%" pt="2%">
                <Text >
                "A Cerâmica Primavera investe em tecnologia de ponta para garantir a qualidade e segurança em todo o processo de fabricação dos seus produtos.
A busca contínua a adequação às normas da ABNT resulta em produtos com alto padrão de qualidade e uniformidade."
                </Text>
                <Box as="a" color="teal.400" href="/" fontWeight="bold">
                    <br></br>
                    Saiba mais
            </Box>
            </Box>
        </HStack>
    )

}
export default QuadroTexto;