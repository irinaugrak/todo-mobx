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
