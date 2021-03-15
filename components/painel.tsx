import { Box, Container, Flex, HStack, Text, Image, Link, Heading, Wrap, WrapItem,Spacer } from '@chakra-ui/react';
import React from 'react';
import Quadro from './quadro'
const Painel: React.FC = () => {

    return (
        <HStack  justifyContent="center" >
            <Wrap w="100%" >
            
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro />
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro />
                </WrapItem>
            </Wrap>
        </HStack>
    )

}
export default Painel;