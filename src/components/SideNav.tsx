'use client'

import Link from 'next/link';
import { PATH } from '../../src/constants/path';
import { useSession } from "next-auth/react";
import UserCircle from "./UserCircle";
import SignInButton from "./SignInButton";
import Image from 'next/image';

export default function SideNav() {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col justify-between items-center">            
            <Link href={PATH.HOME} as={PATH.HOME} className="mt-4 hover:scale-110 transition ease-in-out rounded-full">
                <Image src={'/cloud-icon.png'} alt="Logo" width={56} height={56} className="rounded-full"/>
            </Link>
            <Link href={PATH.ADD_DREAM} as={PATH.ADD_DREAM} className="mt-4 ml-2 hover:scale-110 transition ease-in-out fill-gray-600 dark:fill-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 28 28"><path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
            </Link>
            <div className="mt-4">
                {session ? <UserCircle /> : (
                    status !== 'loading' && <SignInButton />
                )}
            </div>
        </div>
    )
}