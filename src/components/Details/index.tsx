import { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { Button } from "antd";
import { EditorWrapper, StyledBubbleMenu } from "./styles";
import { useCommonStore } from "src/store/DAL";

export const Details = (): ReactElement | null => {
  const { todoList, updateTodoItem } = useCommonStore();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const todo = todoList.find((item) => item.id === id);
  const isPresent = !!todo;

  useEffect(() => {
    if (!isPresent) {
      navigate("/", { replace: true });
    }
  }, [id, isPresent]);

  const editor = useEditor(
    {
      extensions: [StarterKit, TaskList, TaskItem.configure({ nested: true })],
      content: todo?.editorContent || "",
      onUpdate: ({ editor: edit }) => {
        if (id) {
          updateTodoItem(id, { editorContent: edit.getHTML() });
        }
      }
    },
    [id]
  );

  if (!isPresent) {
    return null;
  }

  return (
    <>
      <h2>Детали задачи {todo.title}</h2>
      {editor && (
        <StyledBubbleMenu
          className="bubble-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }>
            H1
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }>
            H2
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}>
            Список
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={editor.isActive("taskList") ? "is-active" : ""}>
            Чекбокс
          </Button>
        </StyledBubbleMenu>
      )}
      <EditorWrapper>
        <EditorContent className="editor-content" editor={editor} />
      </EditorWrapper>
    </>
  );
};
