import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';
// Prisma adapter for NextAuth (optional)
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { env } from '../../../env/server.mjs';
import { prisma } from '../../../server/db/client';

export const authOptions: NextAuthOptions = {
    // Include user.id on session
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        }
    },
    // Auth Providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        DiscordProvider({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET
        }),
        // TwitterProvider({
        //     clientId: env.TWITTER_CLIENT_ID,
        //     clientSecret: env.TWITTER_CLIENT_SECRET,
        // }),
        // FacebookProvider({
        //     clientId: env.FACEBOOK_CLIENT_ID,
        //     clientSecret: env.FACEBOOK_CLIENT_SECRET,
        // }),
    ]
};

export default NextAuth(authOptions);
