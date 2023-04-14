'use client';

import SideNav from '../components/SideNav';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

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
            <body className="h-screen">
                <SessionProvider>
                    <div className="flex flex-row">
                        <div className="mt-6 mb-6 w-32 border-r-2 border-r-gray-200 h-screen">
                            <SideNav />
                        </div>
                        <div className="w-screen rounded-lg m-2 h-screen overflow-auto no-scrollbar">
                            {children}
                        </div>
                        <div className="w-0 lg:w-96 bg-gray-100 h-screen rounded-lg m-2"></div>
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
