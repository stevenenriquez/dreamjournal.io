import '../styles/globals.css';
import { prisma } from '../server/db/client';
import DreamEntry from '../components/DreamEntry';
import type { Dream, User } from '@prisma/client';

async function getDreams() {
    const dreams = await prisma.dream.findMany({
        include: {
            author: true
        }
    });

    return dreams;
}

export default async function Home() {

    const dreams = await getDreams();

    return (
        <div className='flex flex-col items-center h-screen mt-4 mb-16'>
            <h1 className='text-3xl mr-auto ml-6'>Explore</h1>
            {dreams.map((dream: Dream & {author: User}) => <DreamEntry dream={dream} key={`dream-entry-${dream.id}`} />)}
        </div>
    );
}
