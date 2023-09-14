// Хедер приложения содержит в себе меню с возможностью переключения языка, заголовок и форму ввода задачи

import React from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from 'react-i18next';
import TodoInput from "../TodoInput/TodoInput";
import Menu from "../Menu/Menu";
import { ILang } from "../../additional/types";
import styles from "./header.module.scss";

interface Props {
  lang: string;
  langs: ILang;
  saveLang: (lang: string) => void;
  createTodo: (title: string) => void;
  changeLanguage: (lang: string) => void;
}

const Header: React.FC<Props> = observer(({
  lang,
  langs,
  saveLang,
  createTodo,
  changeLanguage,
}) => {

  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Menu
        className={styles.headerTop}
        lang={lang}
        langs={langs}
        saveLang={saveLang}
        changeLanguage={changeLanguage}
      />
      <section className={styles.headerBottom}>
        <h1 className={styles.headerTitle}>{t("todoList")}</h1>
        <TodoInput createTodo={createTodo} />
      </section>
    </header>
  );
});

export default Header;
