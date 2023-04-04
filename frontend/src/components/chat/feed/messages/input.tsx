/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const MessageInput = () => {
  const [messageBody, setMessageBody] = useState('');

  return (
    <Box p={4} py={6} width="100%">
      <form onSubmit={() => {}}>
        <Input
          value={messageBody}
          onChange={(event) => setMessageBody(event.target.value)}
          placeholder="New message"
          size="md"
          resize="none"
          _focus={{
            boxShadow: 'none',
            border: '1px solid',
          }}
        />
      </form>
    </Box>
  );
};
