import DreamInteractions from '../../../components/DreamInteractions';
import SvgIcon, { Back } from '../../../components/Icon';
import Link from 'next/link';
import { PATH } from '../../../constants/path';
import { prisma } from '../../../server/db/client';
import Image from 'next/image';
import moment from 'moment';
import DreamTypes from '../../../components/DreamTypes';
import DreamMenu from '../../../components/DreamMenu';

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
            <>
                <Link href={PATH.HOME} as={PATH.HOME} className="dark:fill-white fixed top-6 left-6 rounded-full md:hidden">
                    <SvgIcon svg={Back} height={32} width={32} viewBoxHeight={24} viewBoxWidth={24} />
                </Link>
                <div className='fixed top-6 right-6 md:hidden rounded-full'>
                    <DreamMenu dreamId={dream.id} />
                </div>
                <div className='min-h-[80vh] mt-12 mb-16 p-6 md:mx-8 lg:mx-16 xl:mx-16 text-center'>
                    <h1 className='text-xl mt-4'><b>{dream.title}</b></h1>
                    <div className='mt-4 text-purple-700 dark:text-purple-400'>
                        <Image src={dream.author.image || '/favicon.ico'} alt={dream.author?.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                        {dream.author.name} · {moment(dream.createdAt).fromNow() || ''}
                    </div>
                    {readTime >= 1 && (
                        <div className="opacity-50 m-4">{readTime} minute read</div>
                    )}
                    <div className="border border-b-1 border-gray-200 dark:border-gray-800 mt-6" />
                    <p className='text-start mt-8 opacity-60 whitespace-pre-wrap'>{dream.content}</p>
                    <div className="mt-6">
                        <DreamTypes types={dream.type}/>
                    </div>
                    <div className="mt-6">
                        <DreamInteractions dreamId={dream.id} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className='text-center m-4'>
                Dream not found
            </div>
        )
    }
}