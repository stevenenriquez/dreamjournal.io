'use client';

import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';

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
                    className="float-right h-14 w-14 rounded-full border border-gray-800 hover:border-gray-600 transition ease-in-out"
                />
            </button>
            {userMenuToggle ? (
                <ul className="absolute right-6 w-40 p-2 text-right transition ease-in-out bg-gray-800 hover:bg-gray-600 rounded-lg">
                    <li className="text-center">
                        <button onClick={() => logOut()}>Logout</button>
                    </li>
                </ul>
            ) : null}
        </>
    );
}
