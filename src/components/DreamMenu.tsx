'use client'

import { useState } from 'react';

export default function DreamMenu(props: { dreamId: string }) {
    
    const [showMenu, setShowMenu] = useState(false);
    
    async function handleDelete() {
        await fetch(`/api/dream/${props.dreamId}`, {
            method: 'DELETE',
        });
    }

    return (
        <>
            <button onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/></svg>
            </button>
            {showMenu ? (
                <ul className="absolute right-2 bg-gray-200 p-4 rounded-lg dark:bg-black ">
                    <li className="text-center">
                        <button className="mb-2">Edit</button>
                    </li>
                    <li className="text-center">
                        <button onClick={() => handleDelete()}>Delete</button>
                    </li>
                </ul>
            ) : null}
        </>
    )
}