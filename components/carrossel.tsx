import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton, Fade, ScaleFade, Slide, SlideFade, useDisclosure, SimpleGrid } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import { useState, useEffect } from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';


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
        const interval = setInterval(() => {
            Avancar();
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    function paraTio() {
        setPausa(true);
        console.log("para tio", { pausa });
    }



    return ( 
        <Flex dir="row" mb="4" justifyContent="center" >
        <Box>
            <IconButton h="100%" onClick={Retroceder}
                colorScheme="gray"
                aria-label="Call Segun"
                size="lg"
                icon={<ArrowLeftIcon />}
            />
        </Box>
        <Box w="100%">
        <Image w="100%"  src={1 + ".jpg"} />
        </Box>
        <Box>
            <IconButton h="100%" onClick={Avancar}
                colorScheme="gray"
                aria-label="Call Segun"
                size="lg"
                icon={<ArrowRightIcon />}
            />
        </Box>
    </Flex>
    )
}
export default Carrossel
