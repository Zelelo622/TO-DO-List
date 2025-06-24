export type ITodosList = ITodoItem[];

export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
  editorContent?: string;
}
