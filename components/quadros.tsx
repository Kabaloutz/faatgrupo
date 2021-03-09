import { Box, Container, Flex, HStack, Text, Image, Link, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Quadro from './quadro'
const Quadros: React.FC = () => {
    const property = {

    }
    return (
        <HStack gridArea="quadros" align="center" justifyContent="center">
            <Wrap spacing="80px">
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
export default Quadros;