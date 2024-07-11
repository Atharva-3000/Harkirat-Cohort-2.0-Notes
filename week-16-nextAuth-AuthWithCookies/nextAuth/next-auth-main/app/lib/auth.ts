
import CredentialsProvider from "next-auth/providers/credentials";import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";
 export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' },
                // otp: { label: 'otp', type: 'otp', placeholder: 'OTP' }
            },
            async authorize(credentials: any) {
                console.log(credentials);
                return {
                    // return whatever you wanna store in the session/jwt
                    id: "user1",
                    name: "user1",
                    email: "abc@123"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID || "",
            clientSecret: process.env.CLIENT_SECRET || "",
        
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // signIn: ({ user }) => {
        //   if (user.email == "abc@gmail.com") {
        //     return false;
        //   }
        //   return true;
        // }
        jwt: ({ token, user }:any) => {
            console.log(token);
            token.userId = token.sub;
            return token;

        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    },
    pages:{
        signIn: "/signin",
    }
}