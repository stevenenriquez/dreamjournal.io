'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../constants/http';
import moment from 'moment';

interface DreamTypes {
    [key: string]: boolean;
}

interface DreamFormData {
    title: string;
    content: string;
    sleepTime: string;
    wakeTime: string;
    type: DreamTypes;
}

interface PostDreamBody {
    title: string;
    content: string;
    sleepTime: string;
    wakeTime: string;
    type: string[];
}

export default function AddDream() {
    const router = useRouter();

    const [formData, setFormData] = useState<DreamFormData>({
        title: '',
        content: '',
        sleepTime: moment().format('YYYY-MM-DDTHH:mm'),
        wakeTime: moment().format('YYYY-MM-DDTHH:mm'),
        type: {
            LUCID: false,
            RECURRING: false,
            FALSE_AWAKENING: false,
            NIGHTMARE: false,
            SLEEP_PARALYSIS: false
        },
    });

    const handleCreate = async () => {
        try {
            const body = {
                title: formData.title,
                content: formData.content,
                sleepTime: formData.sleepTime,
                wakeTime: formData.wakeTime,
                type: [] as string[],
            } as PostDreamBody;

            for(const key in formData.type) {
                if(formData.type[key]) {
                    body.type.push(key);
                }
            }

            const postResponse = await fetch('/api/dream', {
                method: HTTP_METHODS.POST, 
                body: JSON.stringify(body),
            });

            if(postResponse.status === HTTP_STATUS_CODES.CREATED) {
                router.push('/');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-10">
            <div className="m-1 text-center text-2xl">
                <input
                    type="text"
                    name="title"
                    placeholder="Untitled Dream"
                    value={formData.title}
                    onChange={event =>
                        setFormData({ ...formData, title: event.target.value })
                    }
                    className="w-11/12 sm:w-4/5 max-w-3xl p-4 border-b-2 dark:border-0 hover dark:text-gray-300 dark:bg-black dark:rounded-lg outline-0"
                />
            </div>
            <div className="m-1 mt-6 mb-1 text-center">
                <textarea
                    name="Dream"
                    placeholder="Last night, I.."
                    value={formData.content}
                    onChange={event =>
                        setFormData({ ...formData, content: event.target.value })
                    }
                    className="mb-4 w-11/12 sm:w-4/5 max-w-3xl rounded-xl p-4 pb-64 border-2 border-gray-200 dark:border-0 dark:text-gray-400 dark:bg-black dark:rounded-lg outline-0"
                />
            </div>
            <div className="text-center mb-6 mx-4">
                <button onClick={() => setFormData({...formData, type: {...formData.type, LUCID: !formData.type.LUCID}})} className={`rounded-full p-2 px-4 mx-1 mb-2 border-2 dark:border-gray-700 hover:bg-gray-50 ${ formData.type.LUCID ? 'text-black dark:text-white bg-gradient-to-br from-green-200 to-cyan-200 dark:from-green-700 dark:to-cyan-700' : 'text-black dark:text-white dark:hover:bg-black'}`}>
                    Lucid
                </button>
                <button onClick={() => setFormData({...formData, type: {...formData.type, RECURRING: !formData.type.RECURRING}})} className={`rounded-full p-2 px-4 mx-1 mb-2 border-2 dark:border-gray-700 hover:bg-gray-50 ${ formData.type.RECURRING ? 'text-black dark:text-white bg-gradient-to-br from-cyan-200 to-purple-300 dark:from-cyan-700 dark:to-purple-700' : 'text-black dark:text-white dark:hover:bg-black'}`}>
                    Recurring
                </button>
                <button onClick={() => setFormData({...formData, type: {...formData.type, FALSE_AWAKENING: !formData.type.FALSE_AWAKENING}})} className={`rounded-full p-2 px-4 mx-1 mb-2 border-2 dark:border-gray-700 hover:bg-gray-50 ${ formData.type.FALSE_AWAKENING ? 'text-black dark:text-white bg-gradient-to-br from-purple-200 to-red-200 dark:from-purple-700 dark:to-red-700' : 'text-black dark:text-white dark:hover:bg-black'}`}>
                    False Awakening
                </button>
                <button onClick={() => setFormData({...formData, type: {...formData.type, NIGHTMARE: !formData.type.NIGHTMARE}})} className={`rounded-full p-2 px-4 mx-1 mb-2 border-2 dark:border-gray-700 hover:bg-gray-50 ${ formData.type.NIGHTMARE ? 'text-black dark:text-white bg-gradient-to-br from-red-200 to-orange-400 dark:from-red-700 dark:to-orange-700' : 'text-black dark:text-white dark:hover:bg-black'}`}>
                    Nightmare
                </button>
                <button onClick={() => setFormData({...formData, type: {...formData.type, SLEEP_PARALYSIS: !formData.type.SLEEP_PARALYSIS}})} className={`rounded-full p-2 px-4 mx-1 mb-2 border-2 dark:border-gray-700 hover:bg-gray-50 ${ formData.type.SLEEP_PARALYSIS ? 'text-black dark:text-white bg-gradient-to-br from-orange-400 to-green-400 dark:from-orange-700 dark:to-green-700' : 'text-black dark:text-white dark:hover:bg-black'}`}>
                    Sleep Paralysis
                </button>
            </div>
            <div className="text-center">
                <button type="button" onClick={() => handleCreate()} className="text-white bg-gradient-to-br from-purple-400 to-cyan-400 dark:from-purple-600 dark:to-cyan-600 hover:bg-gradient-to-bl rounded-full text-sm px-5 py-2.5 mr-2 mb-2 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Z"/></svg>
                </button>
            </div>
        </div>
    );
}