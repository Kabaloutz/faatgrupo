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


    const { scrollYProgress } = useViewportScroll();
    const frameOpacity = useTransform(scrollYProgress, [0.20, 0.60], [1, 0]);
    const frameScale = useTransform(scrollYProgress, [0.20, 0.40], [1, 0.5]);
    const frameH = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);
    const frameW = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);
    const boxVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <Box >
            <motion.div  >
                <Box layerStyle="container" initial="hidden" animate="visible" variants={boxVariants}>
                    <Box>
                        <IconButton h="300px" onClick={Retroceder}
                            colorScheme="gray"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<ArrowLeftIcon />}
                        />
                    </Box>
                    <Box>
                        <Image src={1 + ".jpg"} />
                    </Box>
                    <Box>
                        <IconButton h="300px" onClick={Avancar}
                            colorScheme="gray"
                            aria-label="Call Segun"
                            size="lg"
                            icon={<ArrowRightIcon />}
                        />
                    </Box>

                </Box>
            </motion.div>
        </Box>
    )
}
export default Carrossel
