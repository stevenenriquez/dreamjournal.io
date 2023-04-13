'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UserCircle from './UserCircle';
import path from '../utils/paths';
import SignInButton from './SignInButton';

export default function NavBar() {
    const { data: session, status } = useSession();

    const navLinks = [];

    navLinks.push({title: 'Home', id: 'nav-link-home', path: path.home});
    if(session) {
        navLinks.push({title: 'Add Dream', id: 'nav-link-add-dream', path: path.addDream});
    }

    return (
        <nav className="flex ml-6 mt-4">
            <h2 className="flex">
                {navLinks.map(link => {
                    return (
                        <Link key={link.id} href={link.path} className="p-1 hover:text-purple-400 transition-colors ease-in-out">
                            <p className="pt-2 mr-6">{link.title}</p>
                        </Link>
                    );
                })}
            </h2>

            <div className="ml-auto pr-4">
                {session ? <UserCircle /> : (
                    status !== 'loading' && <SignInButton />
                )}
            </div>
        </nav>
    );
}
