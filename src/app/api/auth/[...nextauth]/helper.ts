import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@lib/db";
import { User } from "@prisma/client";
export const authOptions = {
  providers: [
    // TODO: add google and facebook providers to log in
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_AUTH_PROVIDER_ID || "",
    //   clientSecret: process.env.GOOGLE_AUTH_PROVIDER_SECRET || "",
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_AUTH_PROVIDER_ID || "",
    //   clientSecret: process.env.FACEBOOK_AUTH_PROVIDER_SECRET || "",
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "e-mail", type: "text", placeholder: "email" },
        password: { label: "Contraseña", type: "password" },
      },

      async authorize(credentials, req) {
        // You can also use the `req` object to obtain additional parameters
        try {
          const nextAuthUrl = process.env.NEXTAUTH_URL;
          if (!nextAuthUrl) return null;
          if (!credentials) return null;

          if (process.env.DEBUG) console.log(credentials);

          const userFound: User = (await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          })) as User;
          //userFound Check
          if (!userFound) {
            // throw new Error("usuario no encontrado");
            return null;
          }
          //Password Check
          const matchPassword = await bcrypt.compare(
            credentials?.password,
            userFound.password
          );
          // Return null if user data could not be retrieved
          if (!matchPassword) {
            // throw new Error("Contraseña Incorrecta");
            //TODO: return error response to handle incorrect password
            return null;
          }

          return userFound;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
