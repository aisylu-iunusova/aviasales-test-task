import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Button from "./components/Button";
import Ticket from "./components/Ticket";
import { PropsTicket } from "./components/Ticket";

const App = () => {
  const [tickets, setTickets] = useState<PropsTicket[]>([]);

  useEffect(() => {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((response) => response.json())
      .then(({ searchId }) => {
        fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.tickets) {
              setTickets(data.tickets);
            }
            console.log(data);
          })
          .catch((err) => {
            console.log("Error get tickets");
          });
        console.log(searchId);
      })
      .catch((err) => {
        console.log("Error get searchId");
      });
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.page}>
        <div className={styles.sidebar}>
          <Filter />
        </div>
        <div className={styles.main}>
          <Sort />
          <ul className={styles.ticketsList}>
            {tickets.map((ticket, index) => (
              <li className={styles.ticketItem} key={`${ticket.price}${index}`}>
                <Ticket {...ticket} />
              </li>
            ))}
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
