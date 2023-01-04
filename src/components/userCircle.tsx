'use client'

import { signOut } from "next-auth/react";
import Link from 'next/link';
import { useState } from 'react';
import path from '../utils/paths';

export default function UserCircle() {

    const [userMenuToggle, setUserMenuToggle] = useState(false);

    const toggleMenu = () => {
        setUserMenuToggle(!userMenuToggle);
    }

    const logOut = () => {
        toggleMenu();
        signOut();
    }

    return (
        <>
            <button onClick={() => toggleMenu()} className='hover:opacity-90 transition ease-in-out'>
                <img src="favicon.ico" className="rounded-full h-9 w-9 float-right"/>
            </button>
            {userMenuToggle ? (
                <ul className='absolute right-6 p-2 w-40 text-right transition ease-in-out'>
                    <li className='hover:text-violet-500 transition ease-in-out'>
                        <Link href={path.profile} onClick={() => toggleMenu()}>My Profile</Link>
                    </li>
                    <li className='hover:text-violet-400 transition ease-in-out'>
                        <Link href={path.myJournal} onClick={() => toggleMenu()}>My Journal</Link>
                    </li>
                    <li className='hover:text-violet-300 transition ease-in-out'>
                        <button onClick={() => logOut()}>Logout</button>
                    </li>
                </ul>
            ) : null}
        </>
    )
}