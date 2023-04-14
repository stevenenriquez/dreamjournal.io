'use client';

import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';

export default function UserCircle() {
    const { data: session } = useSession();

    const [userMenuToggle, setUserMenuToggle] = useState(false);

    const toggleMenu = (enabled?: boolean ) => {
        enabled === undefined ? setUserMenuToggle(!userMenuToggle) : setUserMenuToggle(enabled);
    };

    const logOut = () => {
        toggleMenu();
        signOut();
    };

    return (
        <>
            <button
                onMouseDown={() => toggleMenu()}
            >
                <Image
                    src={session?.user?.image || '/favicon.ico'}
                    alt="User"
                    width={64}
                    height={64}
                    className="float-right h-12 w-12 rounded-full border-2 border-purple-500 hover:scale-110 transition ease-in-out"
                />
            </button>
            {userMenuToggle ? (
                <ul className="absolute right-6 bottom-20 md:bottom-auto md:right-auto w-24 p-2 text-right transition ease-in-out bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-lg">
                    <li className="text-center">
                        <button onClick={() => logOut()} className="mt-2">Logout</button>
                    </li>
                    <li className="scale-75 mr-3">
                        <DarkModeToggle />
                    </li>
                </ul>
            ) : null}
        </>
    );
}
