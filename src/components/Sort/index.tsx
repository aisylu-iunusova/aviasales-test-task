import React from "react";
import styles from "./index.module.scss";

const Sort = () => {
  return (
    <div className={styles.sort}>
      <form className={styles.form}>
        <div className={`${styles.option} ${styles.active}`}>
          <input type="radio" id="cheapest"></input>
          <label htmlFor="cheapest">Самый дешевый</label>
        </div>
        <div className={styles.option}>
          <input type="radio" id="fastest"></input>
          <label className={styles.fastest} htmlFor="fastest">
            Самый быстрый
          </label>
        </div>
        <div className={`${styles.option} ${styles.active}`}>
          <input type="radio" id="optimal"></input>
          <label htmlFor="optimal">Оптимальный</label>
        </div>
      </form>
    </div>
  );
};

export default Sort;
