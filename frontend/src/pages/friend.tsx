import { Flex, Text } from '@chakra-ui/layout';
import { Box, Heading } from '@chakra-ui/react';
import Sidebar from '../components/sidebar';

export default function Friend() {
  return (
    <Flex>
      <Box position="relative" width="10rem">
        <Sidebar />
      </Box>

      <Box flex={1} padding={8}>
        <Heading as="h1" size="xl" mb={4}>
          Friend
        </Heading>
        <Text fontSize="lg">Friend page</Text>
      </Box>
    </Flex>
  );
}
