import { Box, Container, Flex, HStack, Text, Image, Link, Heading, ColorModeProvider, color, ColorModeScript, Button } from '@chakra-ui/react';

import React, { useState } from 'react';

interface Arg {
    titulo: string;
    texto: string;
}
const Quadro = ({ titulo, texto }: Arg) => {
    const Normal = {
        w: "500px",
        h: "200px",
        bg: "red",
    };

    return (
        <Box w={Normal.w} bg={Normal.bg} dir="Row">
            <Box>
                <Image m="2" src="/t_001.jpg" ></Image>
            </Box>
            <Box>
            <Box>
                <Heading m="2" size="md" >{titulo}</Heading>
            </Box>
            <Box>
                <Text>
                    {texto}
                    <a> dssa</a>
                </Text>
            </Box>
            </Box>           
        </Box>
    )

}
export default Quadro;