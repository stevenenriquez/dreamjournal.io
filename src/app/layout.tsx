import SideNav from '../components/SideNav';
import '../styles/globals.css';
import BottomNav from '../components/BottomNav';
import ActiveUsers from '../components/ActiveUsers';
import Providers from '../components/Providers';

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
                <Providers>
                    <div className="flex flex-row h-screen">
                        <nav className="hidden md:inline mt-6 mb-6 w-24 sm:w-26 border-r-2 border-r-gray-200 dark:border-r-black h-screen">
                            <SideNav />
                        </nav>
                        <main className="w-screen rounded-lg m-2 h-screen overflow-auto no-scrollbar">
                            {children}
                        </main>
                        <div className="my-6 mr-2 w-0 hidden xl:block xl:w-1/3 max-w-sm border-4 border-gray-200 dark:border-black h-screen dark:bg-black rounded-lg m-2">
                            <div className="flex flex-col items-center p-4">
                                <div className="text-center mt-8 text-gray-800 dark:text-gray-300">
                                    {/* @ts-expect-error Async Server Component */}
                                    <ActiveUsers />
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className='block md:hidden'>
                        <BottomNav />
                    </nav>
                </Providers>
            </body>
        </html>
    );
}
