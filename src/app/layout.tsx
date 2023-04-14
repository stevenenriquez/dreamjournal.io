'use client';

import SideNav from '../components/SideNav';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import BottomNav from '../components/BottomNav';

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
                <ThemeProvider attribute='class'>
                    <SessionProvider>
                        <div className="flex flex-row h-screen">
                            <nav className="hidden md:inline mt-6 mb-6 w-24 sm:w-26 border-r-2 border-r-gray-200 h-screen">
                                <SideNav />
                            </nav>
                            <main className="w-screen rounded-lg m-2 h-screen overflow-auto no-scrollbar">
                                {children}
                            </main>
                            <div className="my-6 mr-2 w-0 hidden xl:block xl:w-3/12 border-2 border-gray-300 dark:border-gray-800 h-screen rounded-lg m-2">
                                <div className="flex flex-col items-center p-4">
                                    <h1 className="text-2xl">Wow, hi there</h1>
                                </div>
                            </div>
                        </div>
                        <nav className='block md:hidden'>
                            <BottomNav />
                        </nav>
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
