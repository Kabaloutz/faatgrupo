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
    const property = {
        imageUrl: "/laje_s1_1.jpg",
        imageAlt: "Rear view of modern home with pool",
        title: "Laje H-7",
        qnt: "17,4 deitado",
        calcQnt: "*No cálculo da quantidade por m², foi considerado 1,5 cm de massa entre os tijolos.",

    }
    return (
        <HStack spacing="25px" color="black" w="100%" bg="white" alignItems="center" justifyItems="center">
            <Box p='5'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
            </Box>
            <Box>
                <br></br>
                <Heading size="md" alignItems="center" justifyItems="center" >{property.title}</Heading>
                <br></br>
                <b>Quantidade por m²</b>
                <br></br>
                {property.qnt}
                <br></br><br></br>
                <Box fontStyle="italic">{property.calcQnt}</Box>
                <br></br>
            </Box>
        </HStack>
    )

}
export default Produtos;