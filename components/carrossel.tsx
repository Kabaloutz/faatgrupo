import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton, Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import { useState, useEffect } from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { Sticky } from '../styles';

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


    const { scrollYProgress } = useViewportScroll()
    const frameOpacity = useTransform(scrollYProgress, [0.20, 0.60], [1, 0]);
    const frameScale = useTransform(scrollYProgress, [0.20, 0.40], [1, 0.5]);
    const frameH = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);
    const frameW = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);


    return (
        <Sticky className="carAnimado">
            <motion.div style={{
            }}>
                <Flex bg="black" onClick={paraTio} align="center" justify="center" bgImage={atual + ".jpg"}>
                    <Box>
                        <HStack spacing="25px" color="preto.200"
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
                                <Image h="100%" w="100%" src={atual + ".jpg"} />
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
            </motion.div>
        </Sticky>
    )
}
export default Carrossel
