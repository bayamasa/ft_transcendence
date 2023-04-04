import Link from 'next/link';
import { Box, Button, Icon, VStack } from '@chakra-ui/react';
import {
  FaHome,
  FaPeopleArrows,
  FaGamepad,
  FaUserFriends,
} from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillChatLeftFill } from 'react-icons/bs';

function Sidebar(): JSX.Element {
  return (
    <Box
      position="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      backgroundColor="whiteAlpha.100"
      flexDir="column"
      w="150px"
      justifyContent="space-between"
    >
      <VStack spacing={4} align="left" justify="start">
        <Link href="/">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={FaHome} boxSize="1.5rem" mr={2} />
            Home
          </Button>
        </Link>

        <Link href="/chat">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={BsFillChatLeftFill} boxSize="1.5rem" mr={2} />
            Chat
          </Button>
        </Link>

        <Link href="/friend">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={FaUserFriends} boxSize="1.5rem" mr={2} />
            Friend
          </Button>
        </Link>

        <Link href="/game">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={FaGamepad} boxSize="1.5rem" mr={2} />
            Game
          </Button>
        </Link>

        <Link href="/room">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={FaPeopleArrows} boxSize="1.5rem" mr={2} />
            Room
          </Button>
        </Link>

        <Link href="/settings">
          <Button
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="blue"
          >
            <Icon as={AiFillSetting} boxSize="1.5rem" mr={2} />
            Settings
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
