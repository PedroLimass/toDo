import { CheckIcon, PencilIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import { useState } from "react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const {
    updateTask,
    deleteTask,
    updateTaskStatus,
    isUpdatingTasks,
    isDeletingTasks,
  } = useTasks();

  const [isEditing, setIsEditing] = useState(task.state === TaskState.CREATING);
  const [taskTitle, setTaskTitle] = useState(task.title);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    if (task.state === TaskState.CREATING) {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleChangeTaskCompleted(e: React.ChangeEvent<HTMLInputElement>) {
    const completed = e.target.checked;
    updateTaskStatus(task.id, completed);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  async function handleSaveTask(e: React.FormEvent) {
    e.preventDefault();
    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }
  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={!!task?.completed}
            value={task?.completed?.toString() ?? "false"}
            onChange={handleChangeTaskCompleted}
            loading={loading}
          />
          {!loading ? (
            <Text
              className={cx("flex-1", {
                "line-through text-gray-400": task?.completed,
              })}
            >
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="secondary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTasks}
            />
            <ButtonIcon
              icon={!isEditing ? PencilIcon : CheckIcon}
              variant="primary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            defaultValue={task?.title}
            autoFocus
            onChange={handleChangeTaskTitle}
            required
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitTask}
            />
            <ButtonIcon
              icon={!isEditing ? PencilIcon : CheckIcon}
              variant="primary"
              type="submit"
              handling={isUpdatingTasks}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
