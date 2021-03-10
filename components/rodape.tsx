import { Box, Container, Flex, HStack, Text, Image,  Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Rodape: React.FC = () => {

    return (
        <Flex gridArea="rodape" flexDir="row" color="preto.200" align="center" justifyContent="center">
            <Image h="70px" src="/faatlogo.png" alt="logo do grupo faat" /> 
            <Box ml="150px">© 2012. Grupo Faat. Todos os direitos reservados.</Box>
        </Flex>
    )
}
export default Rodape;