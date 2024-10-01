import type { AuthConfig } from "@auth/core/types";
import { NuxtAuthHandler } from "#auth";
import Credentials from "@auth/core/providers/credentials";
import { getCurrentUser, signIn } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import outputs from '../../../amplify_outputs.json';


Amplify.configure(outputs);

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig();

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {

        const { nextStep, isSignedIn  } = await signIn({
          username: `${credentials.username}`,
          password: `${credentials.password}`,
        });
        if(!isSignedIn){
          return null
        }

        const { userId } = await getCurrentUser();


        return { 
          email: `${credentials.username}`, 
          id: userId,
          name: "Styven Maldonado",
          image: "/image.png",
          data: ""
        };
      },
    }),
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
