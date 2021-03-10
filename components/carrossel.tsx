import { Box, Container, Flex, HStack, Text, Image, Heading, IconButton, Icon, Circle } from '@chakra-ui/react';
import { PhoneIcon, ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react';
import { useState, useEffect } from 'react';

const Carrossel: React.FC = () => {
    const [posicoes, setPosicoes] = useState([1, 2, 3, 4]);
    const [atual, setAtual] = useState(1);
    const Avancar = () => {
        let p = posicoes;
        p.push(p.shift());
        setPosicoes(p);
        setAtual(posicoes[2]);
        return atual;
    }
    const Retroceder = () => {
        let p = posicoes;
        let b = p.pop();
        p.unshift(b);
        setPosicoes(p);
        setAtual(posicoes[2]);
        return atual;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            Avancar();
        }, 6000);
        return () => clearInterval(interval);
    }, []);



    function newFunction(interval: NodeJS.Timeout): void  {
        return clearInterval(interval);
    }


    return (
        <Flex gridArea="carrossel" >

            <HStack spacing="25px" d="flex" color="preto.200" >

                <Box >
                    <IconButton onMouseMove={newFunction} h="300px" onClick={Avancar}
                        colorScheme="gray"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowLeftIcon />}
                    />
                </Box>

                <Box h="100%" >
                    <Image h="100%" w="100%" src={atual + ".jpg"} />
                </Box>

                <Box >
                    <IconButton h="300px" onClick={Retroceder}
                        colorScheme="gray"
                        aria-label="Call Segun"
                        size="lg"
                        icon={<ArrowRightIcon />}
                    />

                </Box>
            </HStack>

        </Flex>
    )

}

export default Carrossel
