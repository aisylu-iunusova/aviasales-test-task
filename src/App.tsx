import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Button from "./components/Button";
import Ticket from "./components/Ticket";

const App = () => {
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
            <li className={styles.ticketItem}>
              <Ticket />
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
