import { ReactElement } from "react";
import { Divider } from "antd";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { DetailsContainer, MainContainer, TodoContainer } from "./styles";
import { AddTodoItem } from "src/components/AddTodoItem";
import { TodoItems } from "src/components";

export const Main = observer(
  (): ReactElement => (
    <MainContainer>
      <TodoContainer>
        <AddTodoItem />
        <TodoItems />
      </TodoContainer>
      <Divider type="vertical" style={{ height: "100%" }} />
      <DetailsContainer>
        <Outlet />
      </DetailsContainer>
    </MainContainer>
  )
);
