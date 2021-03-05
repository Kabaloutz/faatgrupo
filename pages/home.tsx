import {
    Heading, Grid, GridItem, Flex, Spacer, Box, Button, Link,
} from "@chakra-ui/react"
import theme from '../styles/theme';

export default function Home() {
    return (
        <Grid
            as="main"
            height="100vh"
            templateColumns="1fr 1080px 1fr"
            templateRows="200px 50px 1fr "
            templateAreas="
            '. cabecalho .'
            'direita menu esquerda'   
            'direita principal esquerda'          
            "
            justifyContent="center"
        >
            <Flex gridArea="direita">
                <Box w="100%" h="100%" bg="brand.100">  </Box>
            </Flex>
            {/* Cabeçalho */}
            <Flex gridArea="cabecalho" bg="brand.100" flexDir="row">
                <Box p="20"><img src="/faatlogo.png" alt="logo do grupo faat" /> </Box>
                <Box p="20"><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
                <Box p="10"><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
            </Flex>
            <Flex gridArea="menu" bg="yellow.700" mb="3" alignItems="center" justifyContent="center" flexDir="row" >
                <Box p="5%"><Link>HOME</Link></Box>
                <Spacer />
                <Box  ><Link>EMPRESA</Link></Box>
                <Spacer />
                <Box ><Link>PRODUTOS</Link></Box>
                <Spacer />
                <Box ><Link>SIMULADOR</Link></Box>
                <Spacer />
                <Box p="5%"><Link>CONTATOS</Link></Box>
            </Flex>
            <Flex gridArea="principal" >
                <Box w="100%" bg="yellow.900">espaço produtos</Box>
                <Box bg="brand.100" ml="5">
                    espaço barra lateral
                    <Box p="3" m="5" bg="yellow.700" w="200px" h="200px">banner</Box>
                    <Box p="3" m="5" bg="yellow.700" w="200px" h="200px">banner</Box>
                    <Box p="3" m="5" bg="yellow.700" w="200px" h="200px">banner</Box>
                </Box>
            </Flex>
            <Flex gridArea="esquerda">

            </Flex>
        </Grid>

    )
}


