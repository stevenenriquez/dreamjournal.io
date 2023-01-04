'use client';

import NavBar from '../components/navBar';
import { SessionProvider } from 'next-auth/react';

type RootLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>The Dreamt</title>
            </head>
            <body>
                <SessionProvider>
                    <NavBar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
