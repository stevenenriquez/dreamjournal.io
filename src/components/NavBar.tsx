'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import UserCircle from './UserCircle';
import path from '../utils/paths';

export default function NavBar() {
    const { data: session, status } = useSession();

    return (
        <nav className="flex p-4 text-center">
            <h2 className="flex">
                <Link href={path.home} className="w-24 flex-auto p-2">
                    Home
                </Link>
                <Link href={path.addDream}>
                    <p className=" w-32 flex-auto p-2">Add Dream</p>
                </Link>
            </h2>

            <div className="ml-auto">
                {session ? (
                    <UserCircle />
                ) : status === 'loading' ? (
                    <main>Loading...</main>
                ) : (
                    <button className="p-2" onClick={() => signIn('discord')}>
                        Sign In
                    </button>
                )}
            </div>
        </nav>
    );
}
