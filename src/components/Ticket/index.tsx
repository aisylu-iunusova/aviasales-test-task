import React from "react";
import styles from "./index.module.scss";
import s7 from "../../assets/s7.png";

export type Segments = {
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

const Ticket = ({ price, segments, carrier }: PropsTicket) => {
  const getTimeFromMins = (mins: number) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  const countStops = (length: number) => {
    if (length === 1) {
      return <div>{length} пересадка</div>;
    } else if (length > 1) {
      return <div>{length} пересадки</div>;
    } else {
      return <div>Без пересадок</div>;
    }
  };

  const calculateFlyTime = ({ date, duration }: any) => {
    let beginTime = new Date(date);
    let endTime = new Date(date);
    endTime.setMinutes(endTime.getMinutes() + duration);
    let start = `${beginTime.getHours()}:${beginTime.getMinutes()}`;
    let finish = `${endTime.getHours()}:${endTime.getMinutes()}`;

    return `${start} - ${finish}`;
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeader}>
        <div className={styles.price}>{`${price} p`}</div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Airlines" />
      </div>
      <div className={styles.ticketDetails}>
        {segments.map(
          ({ origin, destination, date, duration, stops }, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.column}>
                <div>{`${origin} - ${destination}`}</div>
                <div>{calculateFlyTime({ date, duration })}</div>
              </div>
              <div className={styles.column}>
                <div>В пути</div>
                <div>{getTimeFromMins(duration)}</div>
              </div>
              <div className={styles.column}>
                {countStops(stops.length)}
                <div>{stops.join(", ")}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Ticket;
