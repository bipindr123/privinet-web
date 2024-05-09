import type { NextPage } from "next";
import styles from "./background.module.css";

const Background: NextPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.background1} />
      <div className={styles.applicationBackground}>
        <div className={styles.gradientbottom} />
        <div className={styles.gradienttop} />
        <img
          className={styles.backgroundvideo2Ezgif1Icon}
          alt=""
          src="/about2.gif"
        />
        <div className={styles.applicationOptions}>
          <div className={styles.gradient} />
          <div className={styles.ourMissionIs}>
            Our mission is clear: to harness the power of advanced connectivity
            to facilitate the flow of data that organizations need to make
            informed decisions and create a better world. We provide the tools
            and insights that turn challenges into opportunities for growth and
            innovation.
          </div>
          <h1 className={styles.unlockingPotentialThrough}>
            Unlocking Potential Through Connectivity
          </h1>
          <div className={styles.applicationsList} />
          <div className={styles.trafficOptimizationResource}>
            Traffic optimization, resource management, public safety
          </div>
          <b className={styles.smartCities}>Smart Cities</b>
          <div className={styles.ourMission}>Our Mission</div>
          <div className={styles.applicationOptionsChild} />
          <div className={styles.applicationsList1} />
          <div className={styles.dataDrivenIrrigationCrop}>
            Data-driven irrigation, crop health, yield maximization
          </div>
          <b className={styles.precisionAgriculture}>Precision Agriculture</b>
          <div className={styles.applicationsList2} />
          <div className={styles.realTimeAssetTracking}>
            Real-time asset tracking, route optimization, efficiency gains
          </div>

          <b className={styles.logisticsSupply}>{`Logistics & Supply Chain`}</b>
        </div>
      </div>
    </div>
  );
};

export default Background;
