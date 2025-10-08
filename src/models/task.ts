export const TASK_KEYS = "tasks"

export type TaskState = "creating" | "created";

export interface Task {
    id: string;
    title: string;
    completed?: boolean;
    state?: TaskState
}