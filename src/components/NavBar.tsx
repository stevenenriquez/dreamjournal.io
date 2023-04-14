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
        <nav className="flex ml-5 mt-4">

        </nav>
    );
}
