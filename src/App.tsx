import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Button from "./components/Button";
import Ticket from "./components/Ticket";
import { PropsTicket } from "./components/Ticket";

const CURRENT_COUNT: number = 5;

const sortCheapest = (arr: PropsTicket[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min].price > arr[j].price) {
        min = j;
      }
    }
    if (min !== i) {
      let k = arr[min];
      arr[min] = arr[i];
      arr[i] = k;
    }
  }
  return arr;
};

const App = () => {
  const [tickets, setTickets] = useState<PropsTicket[]>([]);
  const [currentTickets, setCurrentTickets] = useState<PropsTicket[]>([]);

  const getCurrentTickets = () => {
    let beginIndex = currentTickets.length;
    let endIndex = beginIndex + CURRENT_COUNT;
    let moreTickets = tickets.slice(beginIndex, endIndex);
    setCurrentTickets([...currentTickets, ...moreTickets]);
  };

  const showMoreTickets = () => {
    getCurrentTickets();
  };

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
              let sortCurrentTickets = sortCheapest(
                data.tickets.slice(0, CURRENT_COUNT)
              );
              setCurrentTickets(sortCurrentTickets);
            }
          })
          .catch((err) => {
            console.log("Error get tickets");
          });
      })
      .catch((err) => {
        console.log("Error get searchId");
      });
  }, []);

  const sortFastest = () => {
    for (let i = 0; i < currentTickets.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < currentTickets.length; j++) {
        if (
          currentTickets[min].segments[0].duration >
          currentTickets[j].segments[0].duration
        ) {
          min = j;
        }
      }
      if (min !== i) {
        let k = currentTickets[min];
        currentTickets[min] = currentTickets[i];
        currentTickets[i] = k;
      }
    }
    return setCurrentTickets([...currentTickets]);
  };

  const sortTickets = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    if (e.target.value === "fastest") {
      sortFastest();
    }
    if (e.target.value === "cheapest") {
      let sortCurrentTickets = sortCheapest(currentTickets);
      setCurrentTickets([...sortCurrentTickets]);
    }
  };

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
          <Sort onChange={sortTickets} />
          <ul className={styles.ticketsList}>
            {currentTickets.map((ticket, index) => (
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
