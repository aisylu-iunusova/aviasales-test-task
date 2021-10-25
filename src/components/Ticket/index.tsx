import React from "react";
import styles from "./index.module.scss";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeader}>
        <div className={styles.price}>13 400 р</div>
        <img src="" alt="Airlines" />
      </div>
      <div className={styles.ticketDetails}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div>MOW – HKT</div>
            <div>10:45 – 08:00</div>
          </div>
          <div className={styles.column}>
            <div>В пути</div>
            <div>21ч 15м</div>
          </div>
          <div className={styles.column}>
            <div>2 пересадки</div>
            <div>HKG, JNB</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div>HKT – MOW</div>
            <div>00:23 – 23:09</div>
          </div>
          <div className={styles.column}>
            <div>В пути</div>
            <div>22ч 46м</div>
          </div>
          <div className={styles.column}>
            <div>3 ПЕРЕСАДКИ</div>
            <div>SIN, SHA, DXB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
