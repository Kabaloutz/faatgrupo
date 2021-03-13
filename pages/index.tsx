
import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link,
    Fade, ScaleFade, Slide, SlideFade, Stack, HStack, VStack
} from "@chakra-ui/react"
import Titulo from "../components/barraTitulos";
import Menu from "../components/menu";
import Cabecalho from "../components/cabecalho";
import BarraBanners from "../components/barraBanners";
import Carrossel from "../components/carrossel";
import Painel from "../components/painel";
import QuadroTexto from "../components/quadroTexto";
import Rodape from "../components/rodape";
import BannerHor from "../components/bannerHorizontal";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Display from "../components/display";
import { useState } from "react";

export default function Home() {

    const [ffLayer, setFfLayer] = useState(0)
    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.05, 0.10], [800, 500, 0])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200])
    const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])
    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0)
    })
    return (
        <Flex justify="center">

            <VStack
                h="300vh"
                w="70vw"
                spacing={8}
                align="stretch"
            >
                {/* Cabeçalho */}
                <Cabecalho />
                {/* Menu */}
                <Menu />
                {/* Carrossel */}
                <motion.div style={{ width: scaleAnim }}>
                   <Carrossel />
                </motion.div>
                {/* Carrossel */}
                <motion.div style={{ width: scaleAnim }}>
                   <Painel />
                </motion.div>
                <motion.div initial="hidden" animate="visible"
                whileHover={{
                        width: 0,
                        display: "flex",
                        transition: {
                            duration: 1
                        },
                    }}
                    variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .4
                            }
                        },
                    }}>
                    <Display name="cabeçalho" children={Cabecalho} />
                </motion.div>
                <Display name="cabeçalho" />
                <Display name="cabeçalho" />
                <Display name="cabeçalho" />
                <Display name="cabeçalho" />
            </VStack>

        </Flex >
    )
}


