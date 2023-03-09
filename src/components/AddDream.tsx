'use client';

import { useState } from 'react';

export default function AddDream() {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        dream: ''
    });

    return (
        <div className="mt-10">
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
                    type="date"
                    name="Date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={event =>
                        setFormData({ ...formData, date: event.target.value })
                    }
                    className="mr-2 w-3/12 rounded-xl border border-white bg-black p-2"
                />
                <input
                    type="time"
                    name="Time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={event =>
                        setFormData({ ...formData, time: event.target.value })
                    }
                    className="w-3/12 rounded-xl border border-white bg-black p-2"
                />
            </div>
            <div className="m-4">
                <textarea
                    name="Dream"
                    placeholder="Dream"
                    value={formData.dream}
                    onChange={event =>
                        setFormData({ ...formData, dream: event.target.value })
                    }
                    className="mb-4 w-3/6 rounded-xl border border-white bg-black p-4"
                />
            </div>
            <button
                onClick={() => console.log(formData)}
                className="w-16 rounded-lg bg-gray-800 px-4"
            >
                Add
            </button>
        </div>
    );
}
