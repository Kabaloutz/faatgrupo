import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton } from '@chakra-ui/react';
import { PhoneIcon, ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import {useState} from 'react';

const Carrossel: React.FC = () => {
    const [atual,setAtual] = useState(["/banner1_1.jpg", "/banner2_1.jpg", "/banner3_1.jpg", "/banner4_1.jpg"]);
    const property = {
        imageUrl: ["/banner1_1.jpg", "/banner2_1.jpg", "/banner3_1.jpg", "/banner4_1.jpg"],
        imageAlt: "jgrs f ydyt fcytfdyiy",
    }
    function Avacnar(){
        setAtual(atual+1)        
        console.log(atual);
    }
    function Atual(){        
        console.log(atual);
        return  atual;
    }
    function Retroceder(){
        setAtual(atual+1)        
        console.log(atual);
    }
    return (
        <Flex gridArea="carrossel">

            <HStack spacing="25px" color="black" w="1000px" d="flex" bg="white">
                <Box >
                    <IconButton onClick={Retroceder}
                        colorScheme="teal"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowLeftIcon />}
                    />
                </Box>
                <Box w="150px">
                    <Image src={"/banne"+"{atual}"+"_1.jpg"} alt={property.imageAlt} />
                </Box>
                <Box bg="blue"  >
                    <Image h="100%" w="100%" src={"/banne"+"{atual}"+"_1.jpg"} alt={property.imageAlt} />
                </Box>
                <Box w="150px">
                    <Image src={"/banne"+"{atual}"+"_1.jpg"} alt={property.imageAlt} />
                </Box>
                <Box>
                    <IconButton onClick={Avacnar}
                        colorScheme="teal"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowRightIcon />}
                    />
                </Box>
            </HStack>

        </Flex>
    )

}
export default Carrossel;