import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton, Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import { useState, useEffect } from 'react';

const Carrossel: React.FC = () => {
    
    const [mostrar, setMostrar] = useState(false);
    const [posicoes, setPosicoes] = useState([1, 2, 3, 4]);
    const [atual, setAtual] = useState(1);

    const Avancar = () => {
        let p = posicoes;
        p.push(p.shift());
        setPosicoes(p);
        setAtual(posicoes[2]);
        setMostrar(true);
        return atual;
    }

    const Retroceder = () => {
        let p = posicoes;
        let b = p.pop();
        p.unshift(b);
        setPosicoes(p);
        setAtual(posicoes[2]);
        return atual;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            Avancar();
        }, 6000);        
        setMostrar(false);
        return () => clearInterval(interval);
    }, []);

    return (
        <Flex gridArea="carrossel" w="max">

            <HStack spacing="25px" d="flex" color="preto.200" >

                <Box >
                    <IconButton  h="300px" onClick={Avancar}  
                        colorScheme="gray"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowLeftIcon />}
                    />
                </Box>

                <Box h="100%" >
                    <ScaleFade initialScale={0.9} in={mostrar}>
                        <Image h="100%" w="100%" src={atual + ".jpg"} />
                    </ScaleFade>
                </Box>

                <Box >
                    <IconButton h="300px" onClick={Retroceder}
                        colorScheme="gray"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowRightIcon />}
                    />

                </Box>
            </HStack>

        </Flex>
    )

}

export default Carrossel
