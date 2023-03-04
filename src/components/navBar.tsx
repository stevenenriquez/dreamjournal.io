'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import UserCircle from './userCircle';
import path from '../utils/paths';

export default function NavBar() {
    const { data: session, status } = useSession();

    return (
        <nav className='text-center p-4 flex'>
            
            <h2 className='flex'>
                <Link href={path.home} className='flex-auto w-24 p-2'>Home</Link>
                <Link href={path.explore}><p className='flex-auto w-32 p-2'>Explore</p></Link>
                <Link href={path.myJournal}><p className=' flex-auto w-32 p-2'>My Journal</p></Link>
            </h2>

            <div className='ml-auto'>
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
