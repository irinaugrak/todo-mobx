import React from "react";
import { observer } from "mobx-react-lite";
import Select from "../Select/Select";
import styles from "./menu.module.scss";
import { ILang } from "../../additional/types";

interface Props {
  className: string;
  lang: string;
  langs: ILang;
  saveLang: (lang: string) => void;
  changeLanguage: (lang: string) => void;
}

const Menu: React.FC<Props> = observer(
  ({ className, lang, langs, saveLang, changeLanguage }) => {
    return (
      <section className={`${className} ${styles.menu}`}>
        <Select
          className={styles.menuSelect}
          element={lang}
          elements={langs}
          saveElement={saveLang}
          addFunction={changeLanguage}
        />
      </section>
    );
  }
);

export default Menu;
