import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

const FrameComponent6: NextPage = () => {
  return (
    <div className={styles.aITitleParent}>
      <div className={styles.aITitle}>
        <div className={styles.aiPowered}>AI-powered</div>
      </div>
      <h1 className={styles.unlockThePower}>
        Unlock the Power of Skyye AI Integration
      </h1>
      <div className={styles.aILogo}>
        <div className={styles.gradient} />
        <div className={styles.aILogoShape} />
        <img
          className={styles.logoSkyye1}
          loading="lazy"
          alt=""
          src="/logo-skyye-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent6;
