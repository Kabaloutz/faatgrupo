import { Box, Container, Flex, HStack, Text, Image, Link, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Quadro from './quadro'
const Painel: React.FC = () => {
    const property = {

    }
    return (
        <HStack gridArea="Painel" align="center" justifyContent="center">
            <Wrap w="100%" align="center" spacing="92px">
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <WrapItem>
                    <Quadro />
                </WrapItem>
            </Wrap>
        </HStack>
    )

}
export default Painel;