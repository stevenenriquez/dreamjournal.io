'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import SearchBar from './searchBar';
import UserCircle from './userCircle';
import path from '../utils/paths';

export default function NavBar() {
    const { data: session, status } = useSession();

    return (
        <nav className='text-center p-6'>
            <h2 className='inline-block float-left pt-4'><Link href={path.home}>dreamjournal</Link></h2>
            <SearchBar />
            <div className='inline-block p-2 float-right'>
                {session ? (
                    <UserCircle />
                ) : status === 'loading' ? (
                    <main>Loading...</main>
                ) : (
                    <button onClick={() => signIn('discord')}>
                        Login with Discord
                    </button>
                )}
            </div>
        </nav>
    );
}
