import { ReactElement, useState } from "react";
import { Button, Input, Space, theme } from "antd";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import { PlusOutlined } from "@ant-design/icons";
import { useCommonStore } from "src/store/DAL";

export const AddTodoItem = observer((): ReactElement => {
  const { token } = theme.useToken();
  const { addTodo } = useCommonStore();
  const [title, setTitle] = useState("");

  const handleClickAddTask = (): void => {
    if (title.trim() !== "") {
      const id = uuidv4();
      addTodo({ id, title, completed: false });
      setTitle("");
    }
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onPressEnter={handleClickAddTask}
        prefix={<PlusOutlined style={{ color: token.colorTextPlaceholder }} />}
        placeholder="Новая задача"
        variant="filled"
      />
      <Button onClick={handleClickAddTask} color="default" variant="filled">
        <PlusOutlined />
      </Button>
    </Space.Compact>
  );
});
