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
        <div className="mt-10 text-center">
            <div className="m-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={event =>
                        setFormData({ ...formData, title: event.target.value })
                    }
                    className="w-4/5 rounded-xl border border-white bg-gray-200 p-4"
                />
            </div>
            <div className="m-4">
                <input
                    type="datetime-local"
                    name="Sleep Time"
                    placeholder="Sleep Time"
                    value={formData.sleepTime}
                    onChange={event =>
                        setFormData({ ...formData, sleepTime: event.target.value })
                    }
                    className="mr-2 w-2/5 rounded-xl border border-white bg-gray-200 p-4"
                />
                <input
                    type="datetime-local"
                    name="Wake Time"
                    placeholder="Wake Time"
                    value={formData.wakeTime}
                    onChange={event =>
                        setFormData({ ...formData, wakeTime: event.target.value })
                    }
                    className="w-2/5 justify-between rounded-xl border border-white bg-gray-200 p-4"
                />
            </div>
            <div className="m-4">
                <textarea
                    name="Dream"
                    placeholder="Dream"
                    value={formData.content}
                    onChange={event =>
                        setFormData({ ...formData, content: event.target.value })
                    }
                    className="mb-4 w-4/5 rounded-xl border border-white bg-gray-200 p-4 pb-64"
                />
            </div>
            <button
                onClick={() => handleCreate()}
                className="w-16 rounded-lg bg-gray-500 text-white p-4"
            >
                Add
            </button>
        </div>
    );
}