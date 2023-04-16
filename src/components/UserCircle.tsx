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

    const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
        const userMenu = document.getElementById('user-menu-list');
        if (event.relatedTarget === null || !userMenu?.contains(event.relatedTarget)) {
            toggleMenu(false);
        }
    };

    const logOut = () => {
        toggleMenu();
        signOut();
    };

    return (
        <>
            <button
                onMouseDown={() => toggleMenu()}
                onBlur={event => handleBlur(event)}
                id='user-avatar'
            >
                <Image
                    src={session?.user?.image || '/favicon.ico'}
                    alt="User"
                    width={48}
                    height={48}
                    className="float-right rounded-full border-2 border-purple-500 hover:scale-110 transition ease-in-out"
                />
            </button>
            {userMenuToggle ? (
                <ul id="user-menu-list" className="absolute right-6 bottom-20 md:bottom-auto md:right-auto w-24 p-2 text-right transition ease-in-out bg-gray-200 dark:bg-black rounded-lg">
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
