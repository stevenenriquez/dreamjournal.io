import type { Dream, User } from "@prisma/client";
import Image from 'next/image';
import { truncate } from '../../src/utils/strings';
import Link from 'next/link';
import { PATH } from '../../src/constants/path';
import DreamInteractions from './DreamInteractions';
import DreamTypes from "./DreamTypes";
import moment from "moment";

export default function DreamEntry(props: { dream: Dream & {author: User} }) {
    return (
        <div className="border-b border-b-gray-300 dark:border-b-gray-700 p-4 pb-8 w-11/12 transition ease-in-out">
            <div className='mt-2 w-max text-purple-700 dark:text-purple-400'>
                <Image src={'/favicon.ico'} alt={props.dream.author.name || 'User Avatar'} width={64} height={64} className='rounded-full w-8 h-8 inline-block mr-2' />
                {props.dream.author.name} · {moment(props.dream.createdAt).fromNow() || ''}
            </div>
            <Link href={`${PATH.DREAM}/[slug]`} as={`${PATH.DREAM}/${props.dream.id}`}>
                <h1 className='mt-2'><b>{truncate(props.dream.title, 70)}</b></h1>
                <p className='mt-2 opacity-70 whitespace-pre-wrap'>{truncate(props.dream.content, 420)}</p>
            </Link>
            <div className="mt-8">
                <DreamTypes types={props.dream.type}/>
            </div>
            <div className='mt-8'>
                <DreamInteractions dreamId={props.dream.id} />
            </div>
        </div>
    )
}