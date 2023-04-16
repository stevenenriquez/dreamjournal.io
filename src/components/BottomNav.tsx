'use client'

import UserCircle from "./UserCircle";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
import path from "../../src/utils/paths";
import Image from 'next/image';

export default function BottomNav() {
    const { data: session, status } = useSession();

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-black">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <Link href={path.home} as={path.home} className="flex items-center justify-center">
                    <Image src={'/cloud-icon.png'} alt="Logo" width={52} height={52} className="rounded-full shadow-lg hover:opacity-70"/>
                </Link>
                <Link href={path.addDream} as={path.addDream} className="flex items-center justify-center rounded-full fill-gray-600 dark:fill-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 -1 28 28"><path d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3v3Zm-5 4q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13h5l-5-5v5Z"/></svg>
                </Link>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5">
                    {session ? <UserCircle /> : (
                        status !== 'loading' && <SignInButton />
                    )}
                </button>
            </div>
        </div>
    )
}