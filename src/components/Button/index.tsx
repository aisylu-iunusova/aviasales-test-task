import React from "react";
import styles from "./index.module.scss";

type Props = { onCLick?: () => void };

const Button: React.FC<Props> = ({ onCLick }: Props) => {
  return (
    <div className={styles.button}>
      <button className={styles.button} type="button" onClick={onCLick}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
};

export default Button;
