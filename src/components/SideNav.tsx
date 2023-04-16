'use client'

import Link from 'next/link';
import path from '../../src/utils/paths';
import { useSession } from "next-auth/react";
import UserCircle from "./UserCircle";
import SignInButton from "./SignInButton";
import Image from 'next/image';

export default function SideNav() {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col justify-between items-center">            
            <Link href={path.home} as={path.home} className="mt-4 hover:scale-110 transition ease-in-out shadow-lg rounded-full dark:bg-transparent">
                <Image src={'/cloud-icon.png'} alt="Logo" width={56} height={56} className="rounded-full"/>
            </Link>
            <Link href={path.addDream} as={path.addDream} className="mt-8 ml-2 hover:scale-110 transition ease-in-out fill-gray-600 dark:fill-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 28 28"><path d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3v3Zm-5 4q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13h5l-5-5v5Z"/></svg>
            </Link>
            <div className="mt-6">
                {session ? <UserCircle /> : (
                    status !== 'loading' && <SignInButton />
                )}
            </div>
        </div>
    )
}