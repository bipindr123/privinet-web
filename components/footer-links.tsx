import type { NextPage } from "next";
import styles from "./footer-links.module.css";

const FooterLinks: NextPage = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.gradient} />
      <div className={styles.socialMediaIcons}>
        <div className={styles.imagineAGoogle}>
          Imagine a Google for the physical world, revealing patterns and trends
          invisible to the naked eye. That's the potential of Skyye AI.
        </div>
        <div className={styles.footerBackground}>
          <div className={styles.footerContent}>
            <b className={styles.retail}>Retail</b>
            <div className={styles.realTimeInventoryManagement}>
              Real-time inventory management, personalized customer experiences,
              data-driven store layouts.
            </div>
          </div>
          <div className={styles.footerContent1}>
            <b className={styles.airports}>Airports</b>
            <div className={styles.optimizePassengerFlow}>
              Optimize passenger flow, enhance baggage tracking, improve
              operational efficiency.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.smartCitiesBlock}>
        <div className={styles.smartCitiesTitle}>
          <div className={styles.smartCitiesDescription}>
            <b className={styles.precisionAgriculture}>
              <p className={styles.precision}>{`Precision `}</p>
              <p className={styles.agriculture}>Agriculture</p>
            </b>
            <div className={styles.dataDrivenIrrigationCrop}>
              Data-driven irrigation, crop health insights, and maximized
              yields.
            </div>
          </div>
          <div className={styles.smartCitiesDescription1}>
            <b className={styles.industrialAutomation}>
              <p className={styles.industrial}>{`Industrial `}</p>
              <p className={styles.automation}>Automation</p>
            </b>
            <div className={styles.predictiveMaintenanceReduce}>
              Predictive maintenance, reduced downtime, streamlined operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
