import { useQuery } from '@tanstack/react-query';
import type { User } from '@prisma/client';
import Image from 'next/image';

export default function ActiveUsers() {
    let content;
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('/api/user').then(
                (res) => res.json()
            ),
    });

    if (isLoading) {
        content = 'Loading...';
    } else if (error) {
        content = 'N/A';
    } else {
        content = (
            data.users.map((user: User) => {
                return (
                    <div key={`recommended-user-${user.id}`} className='flex justify-left p-2 items-center'>
                        <Image src={user.image || '/favicon.ico'} alt={user.name || 'User Avatar'} width={64} height={64} className="rounded-full w-12 h-12"/>
                        <p className='text-xl opacity-80 ml-4'>{user.name || 'N/A'}</p>
                    </div>
                );
            })
        );
    }
    
    return (
        <div>
            <h1 className="text-3xl mb-4">Active Dreamers</h1>
            <div className="text-2xl p-2">
                {content}
            </div>
        </div>
    );
}