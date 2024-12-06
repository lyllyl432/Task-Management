import React from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
const Task = ({ tasks = [], name }) => {
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
            </section>
        </>
    );
};

export default Task;
