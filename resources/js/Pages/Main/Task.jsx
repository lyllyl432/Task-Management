import React from "react";
import { useForm } from "@inertiajs/react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Button from "../components/Button";
const Task = ({ tasks = [], name }) => {
    const { post } = useForm();
    const handleLogout = () => {
        post(route("logout"));
    };
    return (
        <>
            <section className="md:grid md:grid-cols-2 md:gap-14 md:w-full">
                <div>
                    <div className="md:p-8 md:bg-blue-500 md:rounded-md shadow-md text-white md:mb-8">
                        <h1 className="text-2xl font-bold leading-normal">
                            Welcome, {name}
                        </h1>
                    </div>
                    <TaskForm />
                </div>
                <div className="md:p-8 md:bg-blue-500 md:rounded-md shadow-md text-white">
                    <h1 className="text-2xl font-bold leading-normal">
                        Your Tasks
                    </h1>
                    <h2 className="italic">Start adding your tasks</h2>
                    {tasks.map((task) => (
                        <TaskList key={task.id} task={task} />
                    ))}
                </div>
                <Button classes="w-full" onClick={handleLogout}>
                    Logout
                </Button>
            </section>
        </>
    );
};

export default Task;
