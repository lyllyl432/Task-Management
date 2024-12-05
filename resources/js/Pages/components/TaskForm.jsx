import React from "react";
import { useForm } from "@inertiajs/react";
const TaskForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        desc: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("task.store"));
        reset();
    };
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setData((data) => ({
            ...data,
            [key]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    id="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
            </div>
            <div>
                <input
                    id="desc"
                    value={data.desc}
                    onChange={handleChange}
                    placeholder="Description"
                />
            </div>
            <button type="submit" disabled={processing}>
                Save task
            </button>
        </form>
    );
};

export default TaskForm;
