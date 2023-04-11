import { prisma } from '../../../server/db/client';
import Image from 'next/image';

export default async function Dream(context: { params: Record<string, string> }) {
    const { slug } = context.params;
    
    async function getDream() {
        const dream = await prisma.dream.findUnique({
            where: {
                id: slug
            },
            include: {
                author: true
            }
        });
    
        return dream;
    }

    const dream = await getDream();

    if(dream) {
        return (
            <div className='text-center m-4'>
                <h1>{dream.title}</h1>
                <div className='mt-6 text-purple-300'>
                    <Image src={dream.author.image || '/favicon.ico'} alt={dream.author?.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                    {dream.author.name}
                </div>
                <p className='m-16 xl:mx-64 xl:mt-8 mt-8 text-gray-400 text-center whitespace-pre-wrap'>{dream.content}</p>
            </div>
        )
    } else {
        return (
            <div className='text-center m-4'>
                Dream not found
            </div>
        )
    }
}