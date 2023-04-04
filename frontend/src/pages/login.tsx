import { signIn, signOut, useSession } from 'next-auth/react';
import { Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';

const Login: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box>
        <p>Welcome, {session.user.email}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Box>
    );
  } else {
    return (
      <Box>
        <p>You are not signed in.</p>
        <Button
          onClick={() => {
            void (async () => {
              await signIn('42-school', {
                callbackUrl: '/auth',
              });
            })();
          }}
        >
          Sign in
        </Button>
      </Box>
    );
  }
};

export default Login;
