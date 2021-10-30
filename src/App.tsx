import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Button from "./components/Button";
import Ticket from "./components/Ticket";
import { PropsTicket } from "./components/Ticket";
import {
  getTicketList,
  sortByPrice,
  sortByDuration,
  sortByOptimal,
  getTicketsRange,
  filterByCountStops,
} from "./service/tickets-storage";

const App = () => {
  const [tickets, setTickets] = useState<PropsTicket[]>([]);

  useEffect(() => {
    getTicketList().then((tickets) => {
      setTickets(tickets);
    });
  }, []);

  const showMoreTickets = () => {
    let moreTickets = getTicketsRange(tickets.length);
    setTickets([...tickets, ...moreTickets]);
  };

  const filterCurrentTickets = (checkeds: number[]) => {
    let list = filterByCountStops(checkeds);
    setTickets([...list]);
  };

  const sortTickets = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "fastest") {
      let fastTikets = sortByDuration();
      setTickets([...fastTikets]);
    }

    if (e.target.value === "cheapest") {
      let cheapestTikets = sortByPrice();
      setTickets([...cheapestTikets]);
    }

    if (e.target.value === "optimal") {
      let optimalTikets = sortByOptimal();
      setTickets([...optimalTikets]);
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.page}>
        <div className={styles.sidebar}>
          <Filter onChange={filterCurrentTickets} />
        </div>
        <div className={styles.main}>
          <Sort onChange={sortTickets} />
          <ul className={styles.ticketsList}>
            {tickets.map((ticket, index) => (
              <li className={styles.ticketItem} key={`${ticket.price}${index}`}>
                <Ticket {...ticket} />
              </li>
            ))}
          </ul>
          <Button onCLick={showMoreTickets} />
        </div>
      </div>
    </div>
  );
};

export default App;
