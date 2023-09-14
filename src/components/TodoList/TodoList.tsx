import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../additional/types";
import { observer } from "mobx-react-lite";
import styles from "./todoList.module.scss";

interface Props {
  todos: Array<ITodo>;
  show: string;
  completeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = observer(
  ({ todos, show, completeTodo, updateTodo, removeTodo }) => {
    return (
      <ul className={styles.todoList}>
        {todos
          .filter((todo: ITodo) => {
            if (show === "onlyDone") {
              return todo.completed;
            } else if (show === "onlyNotDone") {
              return !todo.completed;
            }
            return todo;
          })
          .map((todo: ITodo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ))}
      </ul>
    );
  }
);

export default TodoList;
