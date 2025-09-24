import { Plus, TrashIcon } from "@phosphor-icons/react";
import "./App.css";
import Badge from "./components/badge";
import Button from "./components/button";
import Text from "./components/text";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

function App() {
  return (
    <Container size="md">
      <div className="bg-color-pin">
        <Text variant={"body-md"}>Here we go again! 👻</Text>
        <div className="flex gap-1">
          <Badge loading variant="primary">1</Badge>
          <Badge variant="secondary">2 de 5</Badge>
        </div>
        <Button icon={Plus} variant="primary" size="md">
          Button
        </Button>
        <ButtonIcon loading icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
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

export default App;
