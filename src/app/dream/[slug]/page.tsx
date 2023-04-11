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

        let wordCount = dream.content.split(' ').length;
        let readTime = Math.round(wordCount / 130);

        return (
            <div className='border border-4 border-gray-800 rounded-lg min-h-[80vh] p-8 m-6 mt-4 md:mx-16 lg:mx-32 xl:mx-64 text-center'>
                <h1>{dream.title}</h1>
                <div className='mt-6 text-purple-300'>
                    <Image src={dream.author.image || '/favicon.ico'} alt={dream.author?.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                    {dream.author.name}
                </div>
                {readTime >= 1 && (
                    <div className="text-gray-500 m-4">{readTime} minute read</div>
                )}
                <div className="border border-b-1 border-gray-800 mt-6" />
                <p className='text-start mt-8 text-gray-400 text-center whitespace-pre-wrap'>{dream.content}</p>
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