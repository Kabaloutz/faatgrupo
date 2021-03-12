import { Box, Container, Flex, HStack, Text, Image, space, Heading } from '@chakra-ui/react';
import React from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';

interface Props {
    title: string;
    imageUrl: string;
    imageAlt: string;
    qnt: string;
    calcQnt: string;
}
const Produtos  = ({ title,imageUrl,imageAlt, qnt,calcQnt }: Props) => {
   
    const { scrollYProgress } = useViewportScroll()
    const frameOpacity = useTransform(scrollYProgress, [0.20, 0.60], [1, 0]);
    const frameScale = useTransform(scrollYProgress, [0.20, 0.40], [1, 0.5]);
    const frameH = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);
    const frameW = useTransform(scrollYProgress, [0.155, 0.158], [1, 0]);


    return (
        <Box>
            <motion.div style={{
            }}>
        <Flex spacing="25px" bg="white" alignItems="center" justifyItems="center">
            <Box p='5'>
                <Image src={imageUrl} alt={imageAlt} />
            </Box>
            <Box>
                <br></br>
                <Heading size="md" alignItems="center" justifyItems="center" >{title}</Heading>
                <br></br>
                <b>Quantidade por m²</b>
                <br></br>
                {qnt}
                <br></br><br></br>
                <Box fontStyle="italic">{calcQnt}</Box>
                <br></br>
            </Box>
        </Flex>
            </motion.div>
        </Box>
    )
}
export default Produtos;