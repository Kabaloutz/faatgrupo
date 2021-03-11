import { Box, Container, Flex, HStack, Text, Image, space, Heading } from '@chakra-ui/react';
import React from 'react';
interface Props {
    title: string;
    imageUrl: string;
    imageAlt: string;
    qnt: string;
    calcQnt: string;
}
const Produtos  = ({ title,imageUrl,imageAlt, qnt,calcQnt }: Props) => {
   
    return (
        <HStack spacing="25px" color="black" w="100%" bg="white" alignItems="center" justifyItems="center">
            <Box p='5'>
                <Image src={imageUrl} alt={imageAlt} />
            </Box>
            <Box>
                <br></br>
                <Heading size="md" alignItems="center" justifyItems="center" >{title}</Heading>
                <br></br>
                <b>Quantidade por m²</b>
                <br></br>
                {qnt}
                <br></br><br></br>
                <Box fontStyle="italic">{calcQnt}</Box>
                <br></br>
            </Box>
        </HStack>
    )

}
export default Produtos;