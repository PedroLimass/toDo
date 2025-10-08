import Badge from "../components/badge";
import Text from "../components/text";
import { useTask } from "../hooks/use-task";

export default function TasksSummary() {
  const { concludedTasks, taskCount, isLoadingTasks } = useTask();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>{taskCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas concluídas
        </Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {concludedTasks} de {taskCount}
        </Badge>
      </div>
    </>
  );
}
