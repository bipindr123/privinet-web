import type { NextPage } from "next";
import styles from "./background1.module.css";

const Background1: NextPage = () => {
  return (
    <section className={styles.background}>
      <div className={styles.background1} />
      <div className={styles.rangeContainer}>
        <div className={styles.frameParent}>
          <div className={styles.waveTechnologyLabelWrapper}>
            <div className={styles.waveTechnologyLabel}>
              <div className={styles.connectivityExtensionBlock}>
                <div className={styles.skyyewave}>SkyyeWave</div>
              </div>
              <div className={styles.connectivityExtensionTitle}>
                <div className={styles.wrapperBackgroundvideo2Ezgif}>
                  <img
                    className={styles.backgroundvideo2Ezgif1Icon}
                    loading="lazy"
                    alt=""
                    src="/backgroundvideo2ezgif-1@2x.png"
                  />
                </div>
                <h1 className={styles.extendingConnectivityBeyond}>
                  Extending Connectivity Beyond Limits
                </h1>
              </div>
              <div className={styles.rangeOptimizationDescription}>
                <div className={styles.imagineAWorld}>
                  Imagine a world where distance doesn't matter. SkyyeWave
                  connects seamlessly, from cities to remote areas. We've
                  engineered a breakthrough solution that combines:
                </div>
              </div>
            </div>
          </div>
          <div className={styles.meshIntegrationDescription}>
            <div className={styles.gradient} />
            <div className={styles.meshIntegrationDescriptionChild} />
          </div>
          <div className={styles.dataInsightsTitle}>
            <div className={styles.useCases}>
              <div className={styles.retailAirports}>
                <b className={styles.extendedRange}>Extended Range</b>
              </div>
              <div className={styles.advancedDesignsAnd}>
                Advanced designs and optimized protocols maximize signal reach,
                unlocking connectivity in remote and harsh environments.
              </div>
            </div>
            <div className={styles.useCases1}>
              <div className={styles.enhancedDataCapacityWrapper}>
                <b className={styles.enhancedDataCapacityContainer}>
                  <p className={styles.enhancedData}>{`Enhanced Data `}</p>
                  <p className={styles.capacity}>Capacity</p>
                </b>
              </div>
              <div className={styles.innovativeTechniquesBoost}>
                Innovative techniques boost data throughput within LoRaWAN
                limitations, enabling richer IoT data collection without
                requiring additional licensing.
              </div>
            </div>
            <div className={styles.agricultureAutomation}>
              <b className={styles.meshNetworkIntegrationContainer}>
                <p className={styles.meshNetwork}>{`Mesh Network `}</p>
                <p className={styles.integration}>Integration</p>
              </b>
              <div className={styles.skyyewaveSeamlesslyIntegrate}>
                SkyyeWave seamlessly integrates with mesh technologies,
                providing redundancy and extending coverage even further.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient1} />
    </section>
  );
};

export default Background1;
