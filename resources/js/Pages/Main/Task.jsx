import React from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
const Task = ({ tasks = [] }) => {
    return (
        <>
            <TaskForm />
            <h1>Your Tasks</h1>
            <h2>Start adding your tasks</h2>
            {tasks.map((task) => (
                <TaskList key={task.id} task={task} />
            ))}
        </>
    );
};

export default Task;
