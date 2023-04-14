'use client'

import type { Dream } from "@prisma/client";
import { useState } from "react";
import SvgIcon, { Like, Comment, Share, EditIcon, DeleteIcon } from "./Icon";
export default function DreamInteractions(props: { dream: Dream } ) {
    
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    const handleComment = () => {
        console.log('comment');
    }

    const handleShare = () => {
        console.log('share');
    }

    const handleEdit = () => {
        console.log('edit');
    }

    const handleDelete = () => {
        console.log('delete');
    }
    
    return (
        <div className='flex justify-between'>
            <div className='flex flex-row'>
                <button onClick={() => handleLike} key={`btn-like-${props.dream.id}`} className={'mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon stroke='currentColor' fill={isLiked ? 'red' : 'white'} svg={Like} viewBoxHeight={48} viewBoxWidth={48}/>
                </button>
                <button onClick={() => handleComment} key={`btn-comment-${props.dream.id}`} className={'mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={Comment}/>
                </button>
                <button onClick={() => handleShare} key={`btn-share-${props.dream.id}`} className={'mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={Share}/>
                </button>
            </div>
            <div className='flex flex-row'>
                <button onClick={() => handleEdit} key={`btn-comment-${props.dream.id}`} className={'mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={EditIcon}/>
                </button>
                <button onClick={() => handleDelete} key={`btn-share-${props.dream.id}`} className={'mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={DeleteIcon}/>
                </button>
            </div>
        </div>
    )
}