import { Heading, Grid, GridItem, Flex, Spacer, Box, Button } from "@chakra-ui/react"
import theme from '../styles/theme';


export default function Home() {
    return (
        <Grid
            as="main"
            height="100vh"
            templateColluns="1fr 1fr 1fr"
            templateRows="200px 50px 1fr "
            templateAreas="
            '. cabecalho .'
            'direita menu esquerda'   
            'direita principal esquerda'          
            "
            alingItems="center"
            justfyContent="center"
        >
            <Flex gridArea="direita">
                <Box w="100%" h="100%" bg="brand.100">  </Box>
            </Flex>
            {/* Cabeçalho */}
            <Flex gridArea="cabecalho"  bg="brand.100" center>
                <Box p="20"><img src="/faatlogo.png" alt="logo do grupo faat" /> </Box>
                <Spacer />
                <Box p="20"><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
                <Spacer />
                <Box p="10"><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
            </Flex>
            <Flex gridArea="menu">
                <Box bg="yellow.700" w="100%">espaço para menu</Box>
            </Flex>
            <Flex gridArea="principal">
                <Box bg="yellow.900" w="100%">espaço produtos</Box>
                <Box bg="yellow.700" >
                    espaço barra lateral
                    <Box p="3" bg="yellow.900" >banner</Box>
                    <Spacer />
                    <Box p="3"bg="yellow.700" >banner</Box>
                    <Spacer />
                    <Box p="3"bg="yellow.900" >banner</Box>
                </Box>
            </Flex>
            <Flex gridArea="esquerda">
                <Box w="100%" h="100%" bg="brand.100">f </Box>
            </Flex>
        </Grid>

    )
}


