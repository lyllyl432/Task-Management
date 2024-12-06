import React from "react";
import { useForm } from "@inertiajs/react";
import Input from "./Input";
import Button from "./Button";
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
                <Input
                    id="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
            </div>
            <div className="mt-2">
                <textarea
                    id="desc"
                    value={data.desc}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full outline-black border border-gray-300 rounded-md p-4 text-xs md:text-sm"
                    rows="8"
                ></textarea>
            </div>
            <Button classes="w-full mt-2" type="submit" disabled={processing}>
                Save Task
            </Button>
        </form>
    );
};

export default TaskForm;
