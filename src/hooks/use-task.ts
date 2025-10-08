/* eslint-disable react-hooks/exhaustive-deps */
import useLocalStorage from "use-local-storage";
import { TASK_KEYS, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export const useTask = () => {
    const [tasksData] = useLocalStorage<Task[]>(TASK_KEYS, []);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = useState(true);


    async function fetchTasks() {
        if (isLoadingTasks) {
            await delay(2000);
            setIsLoadingTasks(false);
        }

        setTasks(tasksData);
    }

    useEffect(() => {
        fetchTasks();
    }, [tasksData]);

    return {
        tasks,
        taskCount: tasks.filter((task) => task.state === TaskState.CREATED).length,
        concludedTasks: tasks.filter((task) => task.completed).length,
        isLoadingTasks
    };
};
