import React from "react";
import styles from "./index.module.scss";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Sort = ({ onChange }: Props) => {
  return (
    <div className={styles.sort}>
      <form className={styles.form}>
        <div className={styles.option}>
          <input
            name="sort"
            type="radio"
            id="cheapest"
            value="cheapest"
            onChange={onChange}
            defaultChecked
          />
          <label htmlFor="cheapest">Самый дешевый</label>
        </div>
        <div className={styles.option}>
          <input
            name="sort"
            type="radio"
            id="fastest"
            value="fastest"
            onChange={onChange}
          />
          <label className={styles.fastest} htmlFor="fastest">
            Самый быстрый
          </label>
        </div>
        <div className={styles.option}>
          <input
            name="sort"
            type="radio"
            id="optimal"
            value="optimal"
            onChange={onChange}
          />
          <label htmlFor="optimal">Оптимальный</label>
        </div>
      </form>
    </div>
  );
};

export default Sort;
