import { Checkbox, List, Typography } from "antd";
import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { ListItemStyled } from "./styles";
import { useCommonStore } from "src/store/DAL";

export const TodoItems = observer((): ReactElement => {
  const { todoList, toggleTodoCompleted, updateTodoItem } = useCommonStore();

  return (
    <List
      dataSource={todoList}
      size="small"
      renderItem={(item) => (
        <ListItemStyled>
          <Checkbox
            checked={item.completed}
            onChange={() => toggleTodoCompleted(item.id)}
          />
          <Typography.Text
            style={{ width: "100%" }}
            editable={{
              triggerType: ["text"],
              onChange: (newTitle) =>
                updateTodoItem(item.id, { title: newTitle })
            }}>
            {item.title}
          </Typography.Text>
        </ListItemStyled>
      )}
    />
  );
});
