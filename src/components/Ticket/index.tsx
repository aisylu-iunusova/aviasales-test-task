import React from "react";
import styles from "./index.module.scss";
import s7 from "../../assets/s7.png";

type Segments = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

export type PropsTicket = {
  price: number;
  carrier: string;
  segments: Segments[];
};

const Ticket = ({ price, segments }: PropsTicket) => {
  console.log(origin);

  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeader}>
        <div className={styles.price}>{price}</div>
        {/* <img src={s7} alt="Airlines" /> */}
      </div>
      <div className={styles.ticketDetails}>
        {segments.map(({ origin, destination, date, duration }, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.column}>
              <div>{`${origin} - ${destination}`}</div>
              <div>{date}</div>
            </div>
            <div className={styles.column}>
              <div>В пути</div>
              <div>{duration}</div>
            </div>
            <div className={styles.column}>
              <div>2 пересадки</div>
              {/* <div>{stops}</div> */}
            </div>
          </div>
        ))}
        {/* <div className={styles.row}>
          <div className={styles.column}>
            <div>{`${origin} - ${destination}`}</div>
            <div>{date}</div>
          </div>
          <div className={styles.column}>
            <div>В пути</div>
            <div>{duration}</div>
          </div>
          <div className={styles.column}>
            <div>3 ПЕРЕСАДКИ</div>
            <div>{stops}</div>
          </div> */}
      </div>
    </div>
  );
};

export default Ticket;
