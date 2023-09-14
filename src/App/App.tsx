import React from "react";
import { observer } from "mobx-react-lite";
import "../i18n/config";
import { useTranslation } from "react-i18next";
import todoStore from "../store/todoStore";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Langs as langs, Shows as shows } from "../additional/enums";
import styles from "./app.module.scss";

export const App: React.FC = observer(() => {
  const { i18n } = useTranslation();
  const {
    todos,
    createTodo,
    completeTodo,
    updateTodo,
    removeTodo,
    show,
    saveShow,
    lang,
    saveLang,
  } = todoStore;
  
  const changeLanguage = (lang: string) => {
    console.log('change', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.todoBox}>
      <Header
        lang={lang}
        langs={langs()}
        saveLang={saveLang}
        createTodo={createTodo}
        changeLanguage={changeLanguage}
      />
      <Main
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        show={show}
        shows={shows()}
        saveShow={saveShow}
      />
    </div>
  );
});
