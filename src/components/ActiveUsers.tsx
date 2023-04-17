import type { User } from '@prisma/client';
import Image from 'next/image';
import { prisma } from '../server/db/client';

async function getUsers() {
    const users = await prisma.user.findMany({
        take: 10
    });

    return users;
}

export default async function ActiveUsers() {
    const users = await getUsers();
    
    return (
        <div>
            <h1 className="text-3xl mb-4">Active Dreamers</h1>
            <div className="text-2xl p-2">
                {users.map((user: User) => {
                    return (
                        <div key={`recommended-user-${user.id}`} className='flex justify-left p-2 items-center'>
                            <Image src={user.image || '/favicon.ico'} alt={user.name || 'User Avatar'} width={64} height={64} className="rounded-full w-12 h-12"/>
                            <p className='text-xl opacity-80 ml-4'>{user.name || 'N/A'}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}