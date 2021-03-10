import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo: React.FC  = ({titulo}) => {

    return (
        <Flex gridArea="titulo" bg="elementos.agua" mb="3" alignItems="center" justifyContent="start" w="100%" >            
                <Flex m='2' align="center"><Image p="2" src="/traco.png" /> <b>{titulo}</b> </Flex>            
        </Flex>
    )

}
export default Titulo;