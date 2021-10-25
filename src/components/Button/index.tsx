import React from "react";
import styles from "./index.module.scss";

const Button = () => {
  return (
    <div className={styles.button}>
      <button className={styles.button} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default Button;
