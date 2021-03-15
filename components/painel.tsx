import { Box, Container, Flex, HStack, Text, Image, Link, Heading, Wrap, WrapItem,Spacer } from '@chakra-ui/react';
import React from 'react';
import Quadro from './quadro'
const Painel: React.FC = () => {

    return (
        <HStack  justifyContent="center" >
            <Wrap w="100%" >
            
                <WrapItem>
                    <Quadro titulo="fdsf" texto="dfvs"/>
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro titulo="fdsf" texto="dfvs"/>
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro titulo="fdsf" texto="dfvs"/>
                </WrapItem>
                <Spacer />
                <WrapItem>
                    <Quadro titulo="fdsf" texto="dfvs"/>
                </WrapItem>
            </Wrap>
        </HStack>
    )

}
export default Painel;