import { makeAutoObservable } from "mobx";
import { ITodoItem, ITodosList } from "./types";

export class CommonStore {
  todoList: ITodosList = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addTodo = (todo: ITodoItem): void => {
    this.todoList = [...this.todoList, todo];
  };

  public toggleTodoCompleted = (id: string): void => {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };
}
