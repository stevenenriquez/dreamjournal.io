import type { Dream, User } from "@prisma/client";
import Image from 'next/image';
import { truncate } from '../../src/utils/strings';
import Link from 'next/link';
import path from '../../src/utils/paths';

export default function DreamEntry(props: { dream: Dream & {author: User} }) {
    return (
        <Link href={path.dream(props.dream.id)} className='border-2 border-gray-800 rounded-lg m-4 p-4 w-full hover:bg-gray-900 transition ease-in-out hover:scale-105'>
            <h1 className='mt-2'>{truncate(props.dream.title, 20)}</h1>
            <p className='mt-2 text-gray-400'>{truncate(props.dream.content)}</p>
            <div className='mt-2 w-max text-purple-300'>
                <Image src={props.dream.author.image} alt={props.dream.author.name} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                {props.dream.author.name}
            </div>
        </Link>
    )
}