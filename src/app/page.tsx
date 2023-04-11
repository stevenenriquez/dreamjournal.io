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
        <div className='flex min-h-screen flex-wrap justify-center mx-1 mb-2 mt-6 sm:m-6'>
            {dreams.map((dream: Dream & {author: User}) => <DreamEntry dream={dream} key={dream.id} />)}
        </div>
    );
}
