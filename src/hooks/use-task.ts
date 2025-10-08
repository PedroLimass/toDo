import useLocalStorage from "use-local-storage";
import { TASK_KEYS, type Task } from "../models/task";

export const useTask = () => {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEYS, []);
    // const [task, setTask] = useLocalStorage<Task>("task", null);

    return {
        tasks,
        taskCount: tasks.length,
        concludedTasks: tasks.filter((task) => task.completed).length,
    };
};
