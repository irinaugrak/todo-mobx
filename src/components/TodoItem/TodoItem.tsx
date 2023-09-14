// В данном компоненте представлена одна введенная задача, отображаемая в списке введенных задач в основной части приложения. Здесь реализована возможность пометки задачи выполнена/не выполнена, редактирования задачи, удаления задачи. Задачу можно сохранить, нажав на кнопку с галочкой, которая появляется вместо кнопки редактирования, либо нажать на клавишу Enter

import React, { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import styles from "./todoItem.module.scss";

interface Props {
  id: string;
  title: string;
  completed: boolean;
  completeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = observer(({
  id,
  title,
  completed,
  completeTodo,
  updateTodo,
  removeTodo,
}) => {
  const [checked, setChecked] = useState(completed);
  const [editMode, setEditMode] = useState(false);
  const [titleEdit, setTitleEdit] = useState(title);
  const titleEditRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode) {
      titleEditRef?.current?.focus();
    }
  }, [editMode]);

  return (
    <li className={styles.todoItem} key={id}>
      <div className={styles.todoItemContent}>
        <input
          id={`id-${id}`}
          type="checkbox"
          disabled={editMode}
          className={styles.todoItemCheckbox}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            completeTodo(id);
          }}
        />
        <label htmlFor={`id-${id}`} className={styles.todoItemLabel}>
          {editMode ? (
            <input
              className={styles.todoItemTitleEdit}
              ref={titleEditRef}
              value={titleEdit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateTodo(id, titleEdit);
                  setEditMode(false);
                }
              }}
              onChange={(e) => {
                setTitleEdit(e.target.value);
              }}
            />
          ) : (
            <span
              className={`${styles.todoItemTitle} ${
                completed ? styles.todoItemTitleCompleted : ""
              }`}>
              {title}
            </span>
          )}
        </label>
      </div>

      <div className={styles.todoItemActions}>
        {editMode ? (
          <button
            className={styles.todoItemSave}
            aria-label="Save"
            onClick={() => {
              updateTodo(id, titleEdit);
              setEditMode(false);
            }}
          />
        ) : (
          <button
            className={styles.todoItemEdit}
            aria-label="Edit"
            onClick={() => setEditMode(true)}
          />
        )}

        <button
          className={styles.todoItemRemove}
          aria-label="Remove"
          onClick={() => removeTodo(id)}
        />
      </div>
    </li>
  );
});

export default TodoItem;
