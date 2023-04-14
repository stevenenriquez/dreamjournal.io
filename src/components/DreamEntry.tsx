import type { Dream, User } from "@prisma/client";
import Image from 'next/image';
import { truncate } from '../../src/utils/strings';
import Link from 'next/link';
import path from '../../src/utils/paths';
import DreamInteractions from './DreamInteractions';
import moment from "moment";

export default function DreamEntry(props: { dream: Dream & {author: User} }) {
    return (
        <Link href={`${path.dream}/[slug]`} as={`${path.dream}/${props.dream.id}`} className='border-2 border-gray-100 rounded-lg p-4 mb-6 w-11/12 hover:bg-gray-100 transition ease-in-out'>
            <div className='mt-2 w-max text-purple-700'>
                <Image src={props.dream.author.image || '/favicon.ico'} alt={props.dream.author.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                {props.dream.author.name} · {moment(props.dream.createdAt).fromNow() || ''}
            </div>
            <h1 className='mt-2'>{truncate(props.dream.title, 70)}</h1>
            <p className='mt-2 text-gray-700 whitespace-pre-wrap'>{truncate(props.dream.content, 420)}</p>
            <div className='mt-8'>
                <DreamInteractions dream={props.dream} />
            </div>
        </Link>
    )
}