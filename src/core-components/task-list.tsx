// import { cva } from "class-variance-authority";
import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import { useTask } from "../hooks/use-task";

export default function TasksList() {

  const { tasks, taskCount, concludedTasks } = useTask();
  console.log({ tasks, taskCount, concludedTasks });
  return (
    <>
      <section>
        <Button icon={PlusIcon} variant="primary" className="w-full">
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
