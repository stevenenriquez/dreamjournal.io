'use client'

import SvgIcon, { AddDream, Home } from "./Icon";
import Link from 'next/link';
import path from '../../src/utils/paths';
import { useSession } from "next-auth/react";
import UserCircle from "./UserCircle";
import SignInButton from "./SignInButton";
import DarkModeToggle from "./DarkModeToggle";

export default function SideNav() {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col justify-between items-center">            
            <Link href={path.home} as={path.home} className="fill-black dark:fill-white mt-4 hover:scale-110 transition ease-in-out">
                <SvgIcon svg={Home} height={48} width={48} viewBoxHeight={24} viewBoxWidth={24}/>
            </Link>
            <Link href={path.addDream} as={path.addDream} className="mt-6 ml-2 fill-none stroke-black dark:stroke-white hover:scale-110 transition ease-in-out">
                <SvgIcon svg={AddDream} height={48} width={48} viewBoxHeight={18} viewBoxWidth={18} />
            </Link>
            <DarkModeToggle />
            <div className="mt-4">
                {session ? <UserCircle /> : (
                    status !== 'loading' && <SignInButton />
                )}
            </div>
        </div>
    )
}