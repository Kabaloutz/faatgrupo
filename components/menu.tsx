import { Box, Container, Flex, HStack, Text, Image, Spacer, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Menu: React.FC = () => {
    return (
        <Flex gridArea="menu" bg="yellow.700" mb="3" alignItems="center" justifyContent="center" flexDir="row" >
                <Box p="5%"><Link href="/">HOME</Link></Box>
                <Spacer />
                <Box  ><Link href="/">EMPRESA</Link></Box>
                <Spacer />
                <Box ><Link href="/NossosProdutos">PRODUTOS</Link></Box>
                <Spacer />
                <Box ><Link href="/">SIMULADOR</Link></Box>
                <Spacer />
                <Box p="5%"><Link href="/">CONTATOS</Link></Box>
            </Flex>
    )

}
export default Menu;