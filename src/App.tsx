import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Filter from "./components/Filter";

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
        <div className={styles.main}></div>
      </div>
    </div>
  );
};

export default App;
