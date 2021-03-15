
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
    const widthAnim = useTransform(scrollYProgress, [0.2, 0.3], [1000, 0])
    const heightAnim = useTransform(scrollYProgress, [0, 0.05, 0.10], [0, 100, 200])
    const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])
    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0)
    })
    return (
        <Flex justifyItems="center"  >
            <Spacer />
            <Box w="60vw" >
                <Cabecalho></Cabecalho>
                <Menu></Menu>
                <Carrossel ></Carrossel>
                <Painel></Painel>                
                <Rodape />
            </Box>
            <Spacer />
        </Flex>
    )
}
