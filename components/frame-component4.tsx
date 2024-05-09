import type { NextPage } from "next";
import MeshDetails from "./mesh-details";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <section className={styles.skyyeWaveTitleParent}>
      <div className={styles.skyyeWaveTitle}>
        <div className={styles.gradient} />
        <h1 className={styles.introducingSkyyewave}>Introducing SkyyeWave</h1>
      </div>
      <div className={styles.priviNet}>
        <div className={styles.gradient1} />
        <div className={styles.priviNetContent}>
          <div className={styles.privinetTheVisionary}>
            PriviNet, the visionary in connected experiences, unveils SkyyeWave.
            This transformative technology enables unprecedented long-range,
            low-power data transmission, redefining what's possible for asset
            tracking, remote monitoring, and large-scale connected environments.
          </div>
        </div>
        <div className={styles.skyyeWaveFeatures}>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <div className={styles.featureIconShape} />
              </div>
              <h1 className={styles.keyFeatures}>Key Features</h1>
            </div>
          </div>
          <div className={styles.meshFeature}>
            <div className={styles.efficiencyFeature}>
              <b className={styles.expansiveYetEfficientContainer}>
                <p className={styles.expansiveYet}>{`Expansive Yet `}</p>
                <p className={styles.efficient}>Efficient</p>
              </b>
              <div className={styles.skyyewaveEstablishesRobust}>
                SkyyeWave establishes robust communication over vast distances
                (up to 10km), optimizing power consumption for long-lasting
                deployments.
              </div>
            </div>
            <MeshDetails
              meshForUnmatched="Mesh for Unmatched "
              resilience="Resilience"
              devicesCollaborateToFormA="Devices collaborate to form a self-healing network, ensuring data delivery even in unpredictable environments."
            />
            <MeshDetails
              meshForUnmatched="Skyye AI for "
              resilience="Intelligent Adaptation"
              devicesCollaborateToFormA="Our AI engine dynamically optimizes routes and device behavior, ensuring peak network performance."
              propWidth="419px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
