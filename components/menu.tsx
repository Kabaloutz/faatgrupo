import { Box, Container, Flex, HStack, Text, Image, Spacer, Link, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';



const Menu: React.FC = () => {

    const { scrollYProgress } = useViewportScroll()
    const frameOpacity = useTransform(scrollYProgress, [0.20, 0.60], [1, 1]);
    const frameScale = useTransform(scrollYProgress, [0.20, 0.40], [1, 1]);
    const frameH = useTransform(scrollYProgress, [0.155, 0.158], [1, 1]);
    const frameW = useTransform(scrollYProgress, [0.155, 0.158], [1, 1]);


    return (
        <Box >
            <motion.div style={{
            }}>
                <Flex bg="elementos.agua" h="40px" mb="4" alignItems="center" justifyContent="center" flexDir="row" >
                    <Spacer />
                    <Box ><Link href="/">HOME</Link></Box>
                    <Spacer />
                    <Image src="/traco.png" />
                    <Spacer />
                    <Box><Link href="/">EMPRESA</Link></Box>
                    <Spacer />
                    <Image src="/traco.png" />
                    <Spacer />
                    <Box ><Link href="/NossosProdutos">PRODUTOS</Link></Box>
                    <Spacer />
                    <Image src="/traco.png" />
                    <Spacer />
                    <Box ><Link href="/">SIMULADOR</Link></Box>
                    <Spacer />
                    <Image src="/traco.png" />
                    <Spacer />
                    <Box ><Link href="/contatos">CONTATOS</Link></Box>
                    <Spacer />
                </Flex>
            </motion.div>
        </Box>
    )
}
export default Menu;