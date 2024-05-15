import type { NextPage } from "next";
import styles from "./test.module.css";

const test: NextPage = () => {
  return (
    <>
      <div className={styles.background1}>
        <div className={styles.test}>test</div>
        <div className={styles.test2}>test2</div>
      </div>
    </>
  );
};

export default test;
