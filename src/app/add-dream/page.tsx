'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { HTTP_METHODS, HTTP_STATUS_CODES } from '../../constants/db';

export default function AddDream() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        sleepTime: '',
        wakeTime: '',
    });

    const handleCreate = async () => {
        try {
            const body = {
                title: formData.title,
                content: formData.content,
                sleepTime: formData.sleepTime,
                wakeTime: formData.wakeTime
            }

            console.log(body)

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
            <div className="m-4 text-center">
                <input
                    type="text"
                    name="title"
                    placeholder="Untitled"
                    value={formData.title}
                    onChange={event =>
                        setFormData({ ...formData, title: event.target.value })
                    }
                    className="w-4/5 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                />
            </div>
            <div className="m-4 text-center">
                <h2>Sleep time</h2>
                <input
                    type="datetime-local"
                    name="Sleep Time"
                    placeholder="Sleep Time"
                    value={formData.sleepTime}
                    onChange={event =>
                        setFormData({ ...formData, sleepTime: event.target.value })
                    }
                    className="w-4/5 rounded-xl p-4 m-4 sm:m-1 border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                />
                <h2>Wake time</h2>
                <input
                    type="datetime-local"
                    name="Wake Time"
                    placeholder="Wake Time"
                    value={formData.wakeTime}
                    onChange={event =>
                        setFormData({ ...formData, wakeTime: event.target.value })
                    }
                    className="w-4/5 justify-between rounded-xl p-4 m-4 sm:m-1 border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                />
            </div>
            <div className="m-4 mt-6 mb-1 text-center">
                <textarea
                    name="Dream"
                    placeholder="Last night, I.."
                    value={formData.content}
                    onChange={event =>
                        setFormData({ ...formData, content: event.target.value })
                    }
                    className="mb-4 w-4/5 rounded-xl p-4 pb-64 border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-900"
                />
            </div>
            <div className="text-center">
                <button type="button" onClick={() => handleCreate()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-auto">Save Dream</button>
            </div>
        </div>
    );
}