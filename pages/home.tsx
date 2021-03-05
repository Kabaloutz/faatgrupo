import { Heading, Grid, GridItem, Flex, Spacer, Box, Button } from "@chakra-ui/react"
import theme from '../styles/theme';


export default function Home() {
    return (
        <Grid
            as="main"
            height="100vh"
            templateColluns="1fr 500px 500px 1fr"
            templateRows="200px 100px 1fr "
            templateAreas="
            '. logo tijolito  . '
            '. produto lateral .'            
            "
            justfyContent="center"
            alingItems="center"
        >

            <Flex gridArea="logo" >
                <Box p="10" bg="brand.100"><img src="/faatlogo.png" alt="logo do grupo faat" /> </Box>
                <Box p="10" bg="brand.100"><img src="/slogan.png" alt="Nosso Slogan: A escolha certa para sua obra" /></Box>
            </Flex>
            <Flex gridArea="tijolito">
                <Box p="10" bg="brand.900"><img src="/mascote.png" alt="Tijolito mascote do grupo" /></Box>
            </Flex>
        </Grid>

    )
}


