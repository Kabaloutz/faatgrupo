import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';
interface Props {
    readonly name: string;
}
const Display: React.FC<Props> = ({name}) => {
  return (
    <Box layerStyle="Display"  shadow="md" >
    <Heading fontSize="xl">{name}</Heading>
    <Text mt={4}>{name}</Text>
  </Box>
  )
}

export default Display;