import { Plus, TrashIcon } from "@phosphor-icons/react";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

export default function PageComponents() {
  return (
    <Container size="md">
      <div className="bg-color-pin">
        <Text variant={"body-md"}>Here we go again! 👻</Text>
        <div className="flex gap-1">
          <Badge loading variant="primary">
            1
          </Badge>
          <Badge variant="secondary">2 de 5</Badge>
        </div>
        <div>
          <Button icon={Plus} variant="primary" size="md" >Nova Tarefa</Button>
          <Button icon={Plus} variant="primary" size="md" handling>Criar Tarefa</Button>

            
          
        </div>
        <div>
          <ButtonIcon loading icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>
        <InputText placeholder="Type something..." />
        <InputCheckbox />
        <InputCheckbox loading />
        <Card size="md">Olá mundo! 👻👻👻</Card>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </Container>
  );
}
