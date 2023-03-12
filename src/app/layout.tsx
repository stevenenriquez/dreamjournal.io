'use client';

import NavBar from '../components/NavBar';
import { SessionProvider } from 'next-auth/react';

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>Dream Journal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="bg-black text-white">
                <SessionProvider>
                    <NavBar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
