import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./sensor-benefit.module.css";

export type SensorBenefitType = {
  sensorData?: string;
  unleashed?: string;
  collectRichEnvironmentalI?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const SensorBenefit: NextPage<SensorBenefitType> = ({
  sensorData,
  unleashed,
  collectRichEnvironmentalI,
  propWidth,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const sensorBenefitStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const sensorBenefitTitleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const sensorDataUnleashedContainerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.sensorBenefit} style={sensorBenefitStyle}>
      <div
        className={styles.sensorBenefitTitle}
        style={sensorBenefitTitleStyle}
      >
        <b
          className={styles.sensorDataUnleashedContainer}
          style={sensorDataUnleashedContainerStyle}
        >
          <p className={styles.sensorData}>{sensorData}</p>
          <p className={styles.unleashed}>{unleashed}</p>
        </b>
      </div>
      <div className={styles.collectRichEnvironmental}>
        {collectRichEnvironmentalI}
      </div>
    </div>
  );
};

export default SensorBenefit;
