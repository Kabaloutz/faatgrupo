import { Box, Container, Flex, HStack, Text, Image, Link, Heading } from '@chakra-ui/react';
import React from 'react';

const QuadroTexto: React.FC = ({ imag, text, link }) => {
    const property = {
        imag: imag,
        text: text,
        link: link,

    }
    return (
        <HStack borderColor="gray.600" border="5px" bg="white"  justifyContent="center" shadow="xl" color="black" flexDir="row" h="280px">
            <Box pr="2%"  pt="2%" pb="2%">
                <Image src={property.imag} align="start" w="250px" h="200px" />
            </Box>
            <Box pr="5" w="60%" mb="5">
                <Text justifyContent="">
                    {property.text}
                </Text>
                <Box as="a" color="teal.400" href={property.link} fontWeight="bold">
                    <br></br>
                    Saiba mais
            </Box>
            </Box>
        </HStack>
    )

}
export default QuadroTexto;