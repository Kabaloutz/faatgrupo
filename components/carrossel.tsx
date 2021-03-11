import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton, Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import { useState, useEffect } from 'react';

const Carrossel: React.FC = () => {

    const [mostrar, setMostrar] = useState(true);
    const [pausa, setPausa] = useState(false);
    const [posicoes, setPosicoes] = useState([1, 2, 3, 4]);
    const [atual, setAtual] = useState(1);
    
    const Avancar = () => {
        let p = posicoes;
        p.push(p.shift());
        setPosicoes(p);
        setMostrar(false);
        setTimeout(() => {
            setAtual(posicoes[2]);
            setMostrar(true);
        }, 500);
        return false;        
    };

    function Retroceder() {
        let p = posicoes;
        let b = p.pop();
        p.unshift(b);
        setPosicoes(p);
        setMostrar(false);
        setTimeout(() => {
            setAtual(posicoes[2]);
            setMostrar(true);
        }, 500);
    }

    useEffect(() => {
        console.log(" useEffect pause=", { pausa });
        const interval = setInterval(() => {
            console.log(" interval pause ", { pausa });
            if (Avancar) {
                console.log(" afffe ");
                Avancar();
            };
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    function paraTio() {
        setPausa(true);
        console.log("para tio", { pausa });
    }

    return (

        <Flex bg="black"  onClick={paraTio} align="center" justify="center">
            <Box>
                <HStack spacing="25px"  color="preto.200"
                    onMouseEnter={() => setPausa(true)}
                    onMouseLeave={() => setPausa(false)}
                >
                    <Box >
                        <IconButton minH="300px" onClick={Avancar}
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
            </Box>
        </Flex>
    )
}
export default Carrossel
