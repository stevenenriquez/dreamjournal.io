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

        const wordCount = dream.content.split(' ').length;
        const readTime = Math.round(wordCount / 130);

        return (
            <div className='min-h-[80vh] p-8 mt-4 md:mx-8 lg:mx-16 xl:mx-16 text-center'>
                <h1>{dream.title}</h1>
                <div className='mt-6 text-purple-700'>
                    <Image src={dream.author.image || '/favicon.ico'} alt={dream.author?.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                    {dream.author.name}
                </div>
                {readTime >= 1 && (
                    <div className="text-gray-500 m-4">{readTime} minute read</div>
                )}
                <div className="border border-b-1 border-gray-200 mt-6" />
                <p className='text-start mt-8 text-gray-700 text-center whitespace-pre-wrap'>{dream.content}</p>
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