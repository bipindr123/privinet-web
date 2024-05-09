import type { NextPage } from "next";
import styles from "./trial-integration.module.css";

const TrialIntegration: NextPage = () => {
  return (
    <div className={styles.trialIntegration}>
      <img
        className={styles.backgroundvideo2Ezgif1Icon}
        loading="lazy"
        alt=""
        src="/backgroundvideo2ezgif-1-2@2x.png"
      />
      <div className={styles.contactUsBlock}>
        <div className={styles.gradient} />
        <div className={styles.contactIcon}>
          <h1 className={styles.dataIsPower}>
            Data is Power. Skyye AI Unlocks It.
          </h1>
        </div>
        <div className={styles.footerLogoBlock}>
          <b className={styles.smartCities}>Smart Cities</b>
          <div className={styles.realTimeTrafficManagement}>
            Real-time traffic management, optimized resource allocation,
            enhanced public safety.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialIntegration;
