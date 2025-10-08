import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASK_KEYS, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";

export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEYS, []);
    const [isUpdatingTasks, setIsUpdatingTasks] = useState(false);
    const [isDeletingTasks, setIsDeletingTasks] = useState(false);

    useEffect(() => {
        console.log('isDeletingTasks: ', isDeletingTasks);
        console.log('isUpdatingTasks: ', isUpdatingTasks);
    }, [isUpdatingTasks, isDeletingTasks]);


    function prepareTasks() {
        setTasks([...tasks, { id: crypto.randomUUID(), title: "", state: TaskState.CREATING }]);
    }

    async function updateTask(id: string, payload: { title: Task['title'], completed?: Task['completed'] }) {
        await delay(1000);
        setIsUpdatingTasks(true)
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, state: TaskState.CREATED, ...payload } : task
        );
        setTasks(updatedTasks);
        setIsUpdatingTasks(false)
    }

    function updateTaskStatus(id: string, completed: boolean) {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed } : task
        );
        setTasks(updatedTasks);
    }

    async function deleteTask(id: string) {
        await delay(1000);
        setIsDeletingTasks(true);
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
        setIsDeletingTasks(false);
    }

    return { prepareTasks, updateTask, updateTaskStatus, deleteTask, isUpdatingTasks, isDeletingTasks };
}