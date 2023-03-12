'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';

export default function UserCircle() {
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
                className="transition ease-in-out hover:opacity-90"
            >
                <Image
                    src="/favicon.ico"
                    alt="User"
                    width={128}
                    height={128}
                    className="float-right h-9 w-9 rounded-full"
                />
            </button>
            {userMenuToggle ? (
                <ul className="absolute right-6 w-40 p-2 text-right transition ease-in-out bg-gray-900 rounded-lg">
                    <li className="transition ease-in-out hover:text-violet-300">
                        <button onClick={() => logOut()}>Logout</button>
                    </li>
                </ul>
            ) : null}
        </>
    );
}
