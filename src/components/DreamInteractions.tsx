'use client'

import { useState, type MouseEvent } from "react";
import SvgIcon, { Like, Comment, Share } from "./Icon";
export default function DreamInteractions(props: { dreamId: string } ) {
    
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsLiked(!isLiked);
    }

    const handleComment = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('comment');
    }

    const handleShare = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('share');
    }

    // const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log('edit');
    // }

    // const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log('delete');
    // }
    
    return (
        <div className='flex justify-between'>
            <div className='flex flex-row'>
                <button onClick={event => handleLike(event)} key={`btn-like-${props.dreamId}`} className={'fill-black dark:fill-white opacity-80 mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon stroke='currentColor' fill={isLiked ? 'red' : 'none'} svg={Like} viewBoxHeight={48} viewBoxWidth={48}/>
                </button>
                <span className="mr-2">69</span>
                <button onClick={event => handleComment(event)} key={`btn-comment-${props.dreamId}`} className={'fill-black dark:fill-white opacity-80 mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={Comment}/>
                </button>
                <span className="mr-2">420</span>
                <button onClick={event => handleShare(event)} key={`btn-share-${props.dreamId}`} className={'fill-black dark:fill-white opacity-80 mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={Share}/>
                </button>
            </div>
            {/* <div className='flex flex-row'>
                <button onClick={event => handleEdit(event)} key={`btn-comment-${props.dreamId}`} className={'fill-black dark:fill-white opacity-80 mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={EditIcon}/>
                </button>
                <button onClick={event => handleDelete(event)} key={`btn-share-${props.dreamId}`} className={'fill-black dark:fill-white opacity-80 mr-2 hover:scale-125 transition-transform ease-in-out'}>
                    <SvgIcon svg={DeleteIcon}/>
                </button>
            </div> */}
        </div>
    )
}