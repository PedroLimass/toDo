import {
  CheckIcon,
  FunctionIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from "@phosphor-icons/react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import { useState } from "react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import Text from "../components/text";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.state === TaskState.CREATING);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  // function handleSaveEditTask() {
  //   setIsEditing(false);
  // }

  function handleSaveTask(e: React.FormEvent) {
    e.preventDefault();
    console.log({id: task.id, title: taskTitle, completed: taskCompleted});
     
    setIsEditing(false);
    // handleSaveEditTask();
  }
  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={!!task?.completed}
            value={task?.completed?.toString() ?? "false"}
          />
          <Text
            className={cx("flex-1", {
              "line-through text-gray-400": task?.completed,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="secondary" />
            <ButtonIcon
              icon={!isEditing ? PencilIcon : CheckIcon}
              variant="primary"
              onClick={handleEditTask}
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
            />
          </div>
        </form>
      )}
    </Card>
  );
}
