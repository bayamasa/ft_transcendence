import NextAuth from 'next-auth';
import FortyTwoProvider from 'next-auth/providers/42-school';

export const authOptions = {
  providers: [
    FortyTwoProvider({
      clientId:
        'u-s4t2ud-a9dfd07fed1cc5b6cb8656c506022b44be6e4b55f9789bbc0981bcf30159659c',
      clientSecret:
        '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',
    }),
  ],
  // callbacks: {
  //    signIn() {
  //       return true;
  //    },
  //
  //     jwt({token, account}) {
  //        if (account) {
  //            token.accessToken = account.access_token;
  //        }
  //         return token;
  //     },
  //
  //     session({session, token}) {
  //       if (token.sub)  {
  //           session.user.id = token.sub;
  //           session.user.accessToken = token.accessToken;
  //       }
  //
  //       return session;
  //     },
  // },
  // secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
