import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button,
    Link,
} from "@chakra-ui/react";
import theme from '../styles/theme';

export default function Home() {
    return (
        <Grid
            as="main"
            height="100vh"
            templateRows="200px 50px 1fr"
            templateAreas="
            'direita cabecalho esquerda'
            'direita menu esquerda'   
            'direita principal esquerda'          
            "
            templateCollumns="1fr 480px 80px1fr"
            alingItems="center"
            justfyContent="center"
        >
            <Flex gridArea="direita">
                <Box w="100%" h="100%" bg="brand.100">  </Box>
            </Flex>
            {/* Cabeçalho */}
            <Flex gridArea="cabecalho" bg="brand.100" >
                <Box p="20"><img src="/faatlogo.png" alt="logo do grupo faat" /> </Box>
                <Spacer />
                <Box p="20"><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
                <Spacer />
                <Box p="10"><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
            </Flex>
            <Flex gridArea="menu">
                <Link>HOME</Link>
                <Link>EMPRESA</Link>
                <Link>PRODUTOS</Link>
                <Link>SIMULADOR</Link>
                <Link>CONTATOS</Link>
            </Flex>
            <Flex gridArea="esquerda">
                <Box w="100%" h="100%" bg="brand.100">f </Box>
            </Flex>
        </Grid>

    )
}


