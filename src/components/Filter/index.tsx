import React from "react";
import styles from "./index.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <form className={styles.filterForm}>
        <fieldset>
          <legend>Количество пересадок</legend>{" "}
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              Все
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              Без пересадок
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              1 пересадка
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              2 пересадки
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              3 пересадки
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Filter;
