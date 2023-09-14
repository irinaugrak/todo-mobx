// Пока в данном компоненте(панели управления) только один вложенный элемент (фильтрация списка задач по статусу выполнения), но при расширении приложения сюда можем поместить еще какие-то дополнительные элементы, например, сортировку или дополнительную фильтрацию

import React from "react";
import { observer } from "mobx-react-lite";
import Select  from "../Select/Select";
import { IShow } from "../../additional/types";
import styles from "./bar.module.scss";

interface Props {
  show: string;
  shows: IShow;
  saveShow: (show: string) => void;
}

const Bar: React.FC<Props> = observer(({ show, shows, saveShow }) => {
  return (
    <section className={styles.actionBar}>
      <Select element={show} elements={shows} saveElement={saveShow} />
    </section>
  );
});

export default Bar;
