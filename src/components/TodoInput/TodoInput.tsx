import React, { useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./todoInput.module.scss";

interface Props {
  createTodo: (title: string) => void;
}

const TodoInput: React.FC<Props> = ({ createTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const addTodo = useCallback(() => {
    createTodo(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <div className={styles.todoInput}>
      <input
        type="text"
        className={styles.todoInputValue}
        value={inputValue}
        placeholder={t("newTask")}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button className={styles.todoInputBtn} onClick={() => addTodo()}>
      <p>{t('add')}</p>
      </button>
    </div>
  );
};

export default TodoInput;
