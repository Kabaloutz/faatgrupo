import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const Quadro: React.FC = () => {

    return (
        <Box w="200px" h="300px" borderColor="gray.600" border="5px" bg="white" align="center"  shadow="xl" color="gray.600" >
            <Image src="/t_001.jpg" p='2' ></Image>
            <Heading size="md" >"HISTÓRIA"</Heading>
            <br></br>
            <Text>
                "Conheça mais sobre a história da Cerâmica Primavera."
            </Text>
        </Box>
        
    )

}
export default Quadro;