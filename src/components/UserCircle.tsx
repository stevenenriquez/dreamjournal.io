'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import path from '../utils/paths';

export default function UserCircle() {
    const [userMenuToggle, setUserMenuToggle] = useState(false);

    const toggleMenu = () => {
        setUserMenuToggle(!userMenuToggle);
    };

    const logOut = () => {
        toggleMenu();
        signOut();
    };

    return (
        <>
            <button
                onClick={() => toggleMenu()}
                className="transition ease-in-out hover:opacity-90"
            >
                <img
                    src="favicon.ico"
                    className="float-right h-9 w-9 rounded-full"
                />
            </button>
            {userMenuToggle ? (
                <ul className="absolute right-6 w-40 p-2 text-right transition ease-in-out">
                    <li className="transition ease-in-out hover:text-violet-500">
                        <Link href={path.profile} onClick={() => toggleMenu()}>
                            My Profile
                        </Link>
                    </li>
                    <li className="transition ease-in-out hover:text-violet-400">
                        <Link
                            href={path.myJournal}
                            onClick={() => toggleMenu()}
                        >
                            My Journal
                        </Link>
                    </li>
                    <li className="transition ease-in-out hover:text-violet-300">
                        <button onClick={() => logOut()}>Logout</button>
                    </li>
                </ul>
            ) : null}
        </>
    );
}
