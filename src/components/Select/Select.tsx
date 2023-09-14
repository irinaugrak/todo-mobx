import React, { useRef } from "react";
import { ILang, IShow } from "../../additional/types";
import { observer } from "mobx-react-lite";
import styles from "./select.module.scss";


interface Props {
  className?: string;
  element: string;
  elements: ILang | IShow;
  saveElement: (element: string) => void;
  addFunction?: (element: string) => void;
}

const Select: React.FC<Props> = observer(
  ({ className, element, elements, saveElement, addFunction }) => {
    const showListRef = useRef<HTMLUListElement>(null);
    const onShowList = () => {
      showListRef.current?.classList.toggle(styles.Active);
    };

    return (
      <div className={`${className} ${styles.select}`}>
        <span
          className={styles.selectSelected}
          onClick={() => {
            onShowList();
          }}>
          {elements[element]}
        </span>
        <button
          className={styles.selectOpen}
          onClick={() => {
            onShowList();
          }}></button>

        <ul className={styles.selectList} ref={showListRef}>
          {Object.entries(elements).map(([key, value]) => (
            <li
              className={styles.selectItem}
              key={key}
              onClick={() => {
                saveElement(key);
                if (addFunction !== undefined) {
                  addFunction(key);
                }
                onShowList();
              }}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Select;
