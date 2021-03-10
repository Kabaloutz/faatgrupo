import { Box, Container, Flex, HStack, Text, Image, Spacer, Link, Heading, Icon } from '@chakra-ui/react';
import React from 'react';

const Menu: React.FC = () => {
    return (
        <Flex gridArea="menu" bg="elementos.agua"  mb="4" alignItems="center" justifyContent="center" flexDir="row" >
                <Spacer/>
                <Box ><Link href="/">HOME</Link></Box>
                <Spacer/>
                <Image src="/traco.png" />
                <Spacer/>
                <Box><Link href="/">EMPRESA</Link></Box>
                <Spacer/>
                <Image src="/traco.png" />
                <Spacer/>
                <Box ><Link href="/NossosProdutos">PRODUTOS</Link></Box>
                <Spacer/>
                <Image src="/traco.png" />
                <Spacer/>
                <Box ><Link href="/">SIMULADOR</Link></Box>
                <Spacer/>
                <Image src="/traco.png" />
                <Spacer/>
                <Box ><Link href="/">CONTATOS</Link></Box>
                <Spacer/>
            </Flex>
    )

}
export default Menu;