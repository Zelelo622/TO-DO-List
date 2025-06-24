import { Checkbox, List } from "antd";
import { ReactElement, useState, useEffect } from "react"; // Add useEffect import
import { observer } from "mobx-react-lite";
import { generatePath, useNavigate } from "react-router-dom";
import { InputStyled, ListItemStyled } from "./styles";
import { useCommonStore } from "src/store/DAL";
import { ROUTES } from "src/router/constants";

export const TodoItems = observer((): ReactElement => {
  const navigate = useNavigate();
  const { todoList, toggleTodoCompleted, updateTodoItem } = useCommonStore();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [inputValues, setInputValues] = useState<Record<string, string>>(
    Object.fromEntries(todoList.map((item) => [item.id, item.title]))
  );

  useEffect(() => {
    setInputValues((prev) => {
      const newInputValues = Object.fromEntries(
        todoList.map((item) => [item.id, item.title])
      );
      return { ...prev, ...newInputValues };
    });
  }, [todoList]);

  const handleSelect = (id: string): void => {
    setSelectedId(id);
    navigate(generatePath(ROUTES.todoDetails.path, { id }));
  };

  const handleInputChange = (id: string, value: string): void => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleInputConfirm = (id: string): void => {
    const newTitle = inputValues[id]?.trim();
    if (newTitle) {
      updateTodoItem(id, { title: newTitle });
    } else {
      setInputValues((prev) => ({
        ...prev,
        [id]: todoList.find((item) => item.id === id)?.title || ""
      }));
    }
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
            value={inputValues[item.id] || ""}
            onChange={(e) => handleInputChange(item.id, e.target.value)}
            onBlur={() => handleInputConfirm(item.id)}
          />
        </ListItemStyled>
      )}
    />
  );
});
