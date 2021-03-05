import {  Heading, Grid, GridItem Flex, Spacer} from "@chakra-ui/react"


export default function Home () {
    return (
        <Grid
            as="main"
            height="100vh"
            templateColluns="1fr 795px 275px 1fr"
            templateRows="400px 100px 1fr "
            templateAreas="
            '. logo decoracao . '
            '. produto lateral .'            
            "
            justfyContent="center"
            alingItems="center"
        >
            <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
                <img src="/faatlogo.png" alt="logo grupo faat"/>
            </Flex>
        </Grid>

        )
    }
    
    
    