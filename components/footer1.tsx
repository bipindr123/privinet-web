import type { NextPage } from "next";
import styles from "./footer1.module.css";

const Footer1: NextPage = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.footerContentDetails}>
          <div className={styles.footerSpacer}>2024</div>
          <div className={styles.footerSpacer1}>2026</div>
          <div className={styles.footerSpacer2}>2028</div>
          <div className={styles.footerSpacer3}>2030</div>
          <div className={styles.footerSpacer4}>2032</div>
        </div>
        <div className={styles.yearColumn}>
          <div className={styles.year}>Year</div>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
