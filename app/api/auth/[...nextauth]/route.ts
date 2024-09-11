"use server";

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connect_to_db } from "@/utils/database";

import User from "@/models/user";

// Pour gérer la connexion avec Google
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  // debug: true,
  callbacks: {
    // Pour savoir quel user est connecté
    async session({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user?.email
      });

      session.user.id = sessionUser._id.toString();
      // console.log(session);
      

      return session;
    },
    async signIn({ profile }: any) {
      try {
        // console.log("Profile: ", profile);

        await connect_to_db();

        // On vérifie que l'utilisateur n'existe pas déja
        const userExists = await User.findOne({ email: profile.email });

        // Si l'utilisateur n'existe pas, on l'ajoute
        if (!userExists) {
          await User.create({
            email: profile.email,
            // username: profile.name?.replace(" ", "").toLowerCase(),
            username: profile.name,
            image: profile.picture
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
})

export { handler as GET, handler as POST }