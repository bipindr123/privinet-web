import type { NextPage } from "next";
import SensorBenefit from "./sensor-benefit";
import styles from "./benefit-list.module.css";

const BenefitList: NextPage = () => {
  return (
    <section className={styles.benefitList}>
      <div className={styles.benefitItem}>
        <div className={styles.benefitTitleArea}>
          <h1 className={styles.benefits}>{`Benefits `}</h1>
        </div>
        <div className={styles.benefitDetails}>
          <div className={styles.locationBenefit}>
            <b className={styles.locationWithoutLimits}>
              {" "}
              Location Without Limits
            </b>
            <div className={styles.trackValuableAssets}>
              Track valuable assets, ensure student safety, or monitor critical
              equipment with precision, indoors, outdoors, or across sprawling
              sites.
            </div>
          </div>
          <SensorBenefit
            sensorData="Sensor Data "
            unleashed="Unleashed"
            collectRichEnvironmentalI="Collect rich environmental information, optimize resource usage, and gain insights, no matter how remote the location."
          />
          <SensorBenefit
            sensorData="IoT Scalability"
            unleashed="Simplified"
            collectRichEnvironmentalI="Expand your network confidently, knowing SkyyeWave adapts to meet evolving demands."
            propWidth="385px"
            propPadding="unset"
            propAlignSelf="unset"
            propFlex="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitList;
