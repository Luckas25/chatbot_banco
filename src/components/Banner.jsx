// src/components/Banner.jsx
import { Flex, Text } from '@chakra-ui/react';

function Banner() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.800"
      color="white"
      borderBottom="1px solid"
      borderColor="gray.700"
    >
       <Text fontSize="lg" textAlign="center" color="gray.300" fontWeight="bold">
    BANCA {/* Primera parte de tu nuevo logo */}
    <Text as="span" color="purple.400" fontWeight="bold">
      {' IA'} {/* El ' IA' con un espacio para separarlo visualmente si es necesario */}
    </Text>
    {/* Puedes omitir la tercera parte si " IA" es el final, o añadir más texto */}
  </Text>

    </Flex>
  );
}

export default Banner;
