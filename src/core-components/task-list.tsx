// import { cva } from "class-variance-authority";
import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import { useTask } from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState } from "../models/task";

export default function TasksList() {
  const { tasks, taskCount, concludedTasks } = useTask();
  const { prepareTasks } = useTasks();
  console.log({ tasks, taskCount, concludedTasks });

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
          disabled={tasks.some((task) => task.state === TaskState.CREATING)}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
