import useLocalStorage from "use-local-storage";
import { TASK_KEYS, TaskState, type Task } from "../models/task";

export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEYS, []);

    function prepareTasks() {
        setTasks([...tasks, { id: crypto.randomUUID(), title: "", state: TaskState.CREATING }]);
    }

    return { prepareTasks };
}