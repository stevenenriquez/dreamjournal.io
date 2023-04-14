'use client'

import SvgIcon, { AddDream, Home } from "./Icon";
import Link from 'next/link';
import path from '../../src/utils/paths';
import { useSession } from "next-auth/react";
import UserCircle from "./UserCircle";
import SignInButton from "./SignInButton";

export default function SideNav() {
    const { data: session, status } = useSession();


    return (
        <nav className="flex flex-col items-center">            
            <Link href={path.home} as={path.home} className="mt-4 hover:scale-110 transition ease-in-out">
                <SvgIcon svg={Home} height={48} width={48} viewBoxHeight={24} viewBoxWidth={24}/>
            </Link>
            <Link href={path.addDream} as={path.addDream} className="mt-6 fill-white stroke-black hover:scale-110 transition ease-in-out">
                <SvgIcon svg={AddDream} height={48} width={48} viewBoxHeight={16} viewBoxWidth={16} />
            </Link>
            <div className="mt-6">
                {session ? <UserCircle /> : (
                    status !== 'loading' && <SignInButton />
                )}
            </div>
        </nav>
    )
}