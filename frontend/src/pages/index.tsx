import { Box, Heading } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/layout';
import Sidebar from '../components/sidebar';

function Home(): JSX.Element {
  return (
    <Flex>
      <Box position="relative" width="10rem">
        <Sidebar />
      </Box>

      <Box flex={1} padding={8}>
        <Heading as="h1" size="xl" mb={4}>
          Welcome to ft_transcendence
        </Heading>
        <Text fontSize="lg">This is Pong Game and Chat app.</Text>
      </Box>
    </Flex>
  );
}

export default Home;
