import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Produtos: React.FC = ({ largura }) => {
    return (
        <Flex >
            <Box p="3" m="5" w="100vh" h="200px" bg="white.100" d="flex">
            <img src="laje_s1_1.jpg" p="3" m="5" bg="yellow.700" w="200px" h="80%" ></img>
            <Stack spacing={3}>
                    <Text fontSize="md">
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsas
                        adasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa
                        sadasdfasdasdas  adas edas das das dsa das as das dsa das das as sa dsa</Text>
                </Stack>
            </Box>
        </Flex>
    )

}
export default Produtos;