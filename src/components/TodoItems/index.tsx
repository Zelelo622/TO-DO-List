import { Checkbox, List } from "antd";
import { ReactElement, useState } from "react";
import { observer } from "mobx-react-lite";
import { InputStyled, ListItemStyled } from "./styles";
import { useCommonStore } from "src/store/DAL";

export const TodoItems = observer((): ReactElement => {
  const { todoList, toggleTodoCompleted, updateTodoItem } = useCommonStore();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string): void => {
    setSelectedId(id);
  };

  return (
    <List
      dataSource={todoList}
      size="small"
      renderItem={(item) => (
        <ListItemStyled
          isSelected={item.id === selectedId}
          onClick={() => handleSelect(item.id)}>
          <Checkbox
            checked={item.completed}
            onChange={() => toggleTodoCompleted(item.id)}
          />
          <InputStyled
            size="small"
            value={item.title}
            onChange={(e) => updateTodoItem(item.id, { title: e.target.value })}
          />
        </ListItemStyled>
      )}
    />
  );
});
