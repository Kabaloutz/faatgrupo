import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Quadro: React.FC = () => {

    return (
        <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center" justifyContent="center" shadow="xl" color="gray.600" >
            <Image src="/t_001.jpg" p='2' ></Image>
            <Heading size="md" >"HISTÓRIA"</Heading>
            <br></br>
            <Text>
                "Conheça mais sobre a história da Cerâmica Primavera."
            </Text>
        </Box>
        <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center" justifyContent="center" shadow="xl" color="gray.600"> 
        <Image src="/processo_imagem.jpg" p='2'></Image>
        <Heading size="md" >"PROCESSO PRODUTIVO"</Heading>
        <br></br>
        <Text>
                "Como são produzidos nossos produtos? Saiba mais..."
        </Text>
    </Box>
    <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center" justifyContent="center" shadow="xl" color="gray.600" >
    <Image src="/simulador_imagem_1.jpg" p='2'></Image>
    <Heading size="md" >"SIMULADOR"</Heading>
    <br></br>
    <Text>
                "Calcule a quantidade necessária de tijolos para a sua obra."
    </Text>
</Box>
    </Box >
    <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center" justifyContent="center" shadow="xl" color="gray.600" >
        <Image src="/trabalheconosco.jpg" p='2' />
        <Heading size="md" >"TRABALHE CONOSCO"</Heading>
        <br></br>
        <Text>
            "Venha fazer parte da nossa equipe. Envie seu currículo!"
        </Text>
    </Box>
    )

}
export default Quadro;