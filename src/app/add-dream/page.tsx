'use client';

import { useState } from 'react';
import { HTTP_METHODS } from '../../constants/db';

export default function AddDream() {
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

            await fetch('/api/dream', {
                method: HTTP_METHODS.POST, 
                body: JSON.stringify(body),
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-10 text-center">
            <h1>Add Dream</h1>
            <div className="m-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={event =>
                        setFormData({ ...formData, title: event.target.value })
                    }
                    className="w-3/6 rounded-xl border border-white bg-black p-4"
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
                    className="mr-2 w-3/12 rounded-xl border border-white bg-black p-2"
                />
                <input
                    type="datetime-local"
                    name="Wake Time"
                    placeholder="Wake Time"
                    value={formData.wakeTime}
                    onChange={event =>
                        setFormData({ ...formData, wakeTime: event.target.value })
                    }
                    className="w-3/12 rounded-xl border border-white bg-black p-2"
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
                    className="mb-4 w-3/6 rounded-xl border border-white bg-black p-4"
                />
            </div>
            <button
                onClick={() => handleCreate()}
                className="w-16 rounded-lg bg-gray-800 px-4"
            >
                Add
            </button>
        </div>
    );
}