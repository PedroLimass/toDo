// import { cva } from "class-variance-authority";
import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import { useTask } from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState, type Task } from "../models/task";

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTask();
  const { prepareTasks } = useTasks();

  const handleNewTask = () => {
    prepareTasks();
  };

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          variant="primary"
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.CREATING) ||
            isLoadingTasks
          }
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
