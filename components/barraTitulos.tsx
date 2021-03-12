import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { Sticky } from '../styles';

interface Props {
    title: string;
}

const Titulo = ({ title }: Props) => {


    const { scrollYProgress } = useViewportScroll()
    const frameOpacity = useTransform(scrollYProgress, [0.20, 0.60], [1, 0]);
    const frameScale = useTransform(scrollYProgress, [0.20, 0.40], [1, 0.5]);
    const frameH = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);
    const frameW = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);


    return (
        <Sticky className="tituloAnimado">
            <motion.div style={{
                position: 'absolute',
                top: '0',
                borderRadius: '4px',
                scale: frameScale,
                height: frameH,
                width: frameW,
            }}>


                <Flex gridArea="titulo" bg="elementos.agua" mb="3" alignItems="center" justifyContent="start" w="100%" >
                    <Flex m='2' align="center"><Image p="2" src="/traco.png" /> <b>{title}</b> </Flex>
                </Flex>
            </motion.div>
        </Sticky>
    )
}
export default Titulo;