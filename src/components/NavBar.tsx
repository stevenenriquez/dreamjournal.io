'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import UserCircle from './UserCircle';
import path from '../utils/paths';

export default function NavBar() {
    const { data: session, status } = useSession();

    const navLinks = [];

    navLinks.push({title: 'Home', id: 'nav-link-home', path: path.home});
    if(session) {
        navLinks.push({title: 'Add Dream', id: 'nav-link-add-dream', path: path.addDream});
    }

    return (
        <nav className="flex p-4 text-center">
            <h2 className="flex">
                {navLinks.map(link => {
                    return (
                        <Link key={link.id} href={link.path} className="w-24 flex-auto p-2">
                            <p className="w-32 flex-auto p-2">{link.title}</p>
                        </Link>
                    );
                })}
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
