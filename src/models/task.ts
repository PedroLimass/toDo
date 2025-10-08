export const TASK_KEYS = "tasks"

export enum TaskState {
    CREATING = 'creating',
    CREATED = 'created'
};
// creating" | "created";

export interface Task {
    id: string;
    title: string;
    completed?: boolean;
    state?: TaskState
}