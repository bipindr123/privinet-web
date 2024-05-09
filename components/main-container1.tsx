import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./main-container1.module.css";

const MainContainer1: NextPage = () => {

  return (
    <section className={styles.mainContainer}>
      <div className={styles.gradient} />

      <div className={styles.mainContainerInner}>
        <div className={styles.connectivityForRemoteChalParent}>
          <h1
            className={styles.connectivityForRemote}
          >{`Connectivity for Remote & Challenging Environments`}</h1>
          <div className={styles.privinetsProprietaryLpwanContainer}>
            <span className={styles.privinetsProprietaryLpwanContainer1}>
              <span>{`PriviNet's proprietary LPWAN technology, `}</span>
              <b>SkyyeWave</b>
              <span>{`, shatters the limits of traditional networks. `}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer1;
