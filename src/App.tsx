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

function App() {
  return (
    <Container size="md">
      <div className="bg-color-pin">
        <Text variant={"body-md"}>Here we go again! 👻</Text>
        <Badge variant="primary" size="md">
          1
        </Badge>
        <Badge variant="secondary" size="lg">
          2 de 5
        </Badge>
        <Button icon={Plus} variant="primary" size="md">
          Button
        </Button>
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <InputText placeholder="Type something..." />
        <InputCheckbox />
        <Card size="md">Olá mundo! 👻👻👻</Card>
      </div>
    </Container>
  );
}

export default App;
