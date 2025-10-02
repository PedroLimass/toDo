import { CheckIcon, PencilIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import { useState } from "react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    setIsEditing(false);
  }

  function handleSaveEditTask() {
    setIsEditing(false);
  }
  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <InputText className="flex-1" placeholder="Type something..." />
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="secondary" />
            <ButtonIcon
              icon={!isEditing ? PencilIcon : CheckIcon}
              variant="primary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitTask}
            />
            <ButtonIcon
              icon={!isEditing ? PencilIcon : CheckIcon}
              variant="primary"              
              onClick={handleSaveEditTask}
            />
          </div>
        </>
      )}
    </Card>
  );
}
