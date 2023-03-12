import { prisma } from '../../../server/db/client';
import Image from 'next/image';

export default async function Dream(context: any) {
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
                <p className='mt-4 text-gray-400'>{dream.content}</p>
                <div className='mt-6 text-purple-300'>
                    <Image src={dream.author.image} alt={dream.author.name} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                    {dream.author.name}
                </div>
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