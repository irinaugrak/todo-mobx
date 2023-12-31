// Основная часть приложения. Содержит в себе панель управления и список задач

import React from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from 'react-i18next';
import TodoList from "../TodoList/TodoList";
import Bar from "../Bar/bar";
import { ITodo, IShow } from "../../additional/types";
import styles from "./main.module.scss";

interface Props {
  todos: Array<ITodo>;
  show: string;
  shows: IShow;
  completeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  removeTodo: (id: string) => void;
  saveShow: (show: string) => void;
}

const Main: React.FC<Props> = observer(
  ({ todos, show, shows, completeTodo, updateTodo, removeTodo, saveShow }) => {

    const { t } = useTranslation();

    return (
      <main className={styles.main}>
        <Bar show={show} shows={shows} saveShow={saveShow} />
        <section className={styles.mainContent}>
          {!todos.filter((todo: ITodo) => {
            if (show === "onlyDone") {
              return todo.completed;
            } else if (show === "onlyNotDone") {
              return !todo.completed;
            }
            return todo;
          }).length && <p>{t("noTask")}</p>}
          {
            <TodoList
              todos={todos}
              show={show}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          }
        </section>
      </main>
    );
  }
);

export default Main;
