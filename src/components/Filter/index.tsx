import React from "react";
import styles from "./index.module.scss";

type Props = {
  onChange: (checkeds: number[]) => void;
};

const Filter = ({ onChange }: Props) => {
  const [checkeds, setCheckeds] = React.useState<number[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let index = checkeds.indexOf(Number(e.target.value));

    if (index === -1) {
      setCheckeds([...checkeds, Number(e.target.value)]);
    } else {
      checkeds.splice(index, 1);
      setCheckeds([...checkeds]);
    }
  }

  React.useEffect(() => {
    onChange && onChange(checkeds);
  }, [checkeds.length]);

  return (
    <div className={styles.filter}>
      <form className={styles.filterForm}>
        <fieldset>
          <legend>Количество пересадок</legend>{" "}
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="all"
              name="all"
              value="all"
              className={styles.checkboxFieldInput}
              onChange={handleChange}
            />
            <label htmlFor="all" className={styles.checkboxFieldLabel}>
              Все
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="0"
              name="0"
              value="0"
              className={styles.checkboxFieldInput}
              onChange={handleChange}
            />
            <label htmlFor="0" className={styles.checkboxFieldLabel}>
              Без пересадок
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="1"
              name="1"
              value="1"
              onChange={handleChange}
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="1" className={styles.checkboxFieldLabel}>
              1 пересадка
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="2"
              name="2"
              onChange={handleChange}
              value="2"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="2" className={styles.checkboxFieldLabel}>
              2 пересадки
            </label>
          </div>
          <div className={styles.formFiled}>
            <input
              type="checkbox"
              id="3"
              name="3"
              onChange={handleChange}
              value="3"
              className={styles.checkboxFieldInput}
            />
            <label htmlFor="3" className={styles.checkboxFieldLabel}>
              3 пересадки
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Filter;
