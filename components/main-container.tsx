import type { NextPage } from "next";
import styles from "./main-container.module.css";

const MainContainer: NextPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.skyyeAiWrapper}>
        <div className={styles.skyyeAi}>Skyye AI</div>
      </div>
      <div className={styles.gradientParent}>
        <div className={styles.gradient} />
        <div className={styles.intelligentConnectivityLimiContainer}>
          <span className={styles.intelligentConnectivityLimiContainer1}>
            <span>{`Intelligent Connectivity, Limitless Potential. With `}</span>
            <b>Skyye Ai</b>
            <span>{`, we're unlocking the power of intelligent connectivity, paving the way for boundless opportunities. `}</span>
          </span>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.dynamicOptimizationBlockWrapper}>
            <div className={styles.dynamicOptimizationBlock}>
              <b className={styles.dynamicOptimization}>
                <p className={styles.dynamic}>{`Dynamic `}</p>
                <p className={styles.optimization}>Optimization</p>
              </b>
              <div className={styles.skyyeAiContinuously}>
                Skyye AI continuously analyzes network data, tailoring
                performance to the unique demands of your devices, applications,
                and environment.
              </div>
            </div>
          </div>
          <div className={styles.dynamicOptimizationIcon}>
            <img
              className={styles.proactiveIntelligenceIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.proactiveIntelligenceBlock}>
            <div className={styles.proactiveIntelligenceTitle}>
              <b className={styles.proactiveIntelligence}>
                <p className={styles.proactive}>{`Proactive `}</p>
                <p className={styles.intelligence}>Intelligence</p>
              </b>
              <div className={styles.predictiveAlgorithmsAnticipa}>
                Predictive algorithms anticipate disruptions, pinpoint potential
                optimizations, and safeguard your network.
              </div>
            </div>
          </div>
          <div className={styles.limitlessAdaptabilityBlock}>
            <img
              className={styles.limitlessAdaptabilityTitle}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.limitlessAdaptabilityDescrip}>
            <div className={styles.backgroundVideo}>
              <b className={styles.limitlessAdaptability}>
                <p className={styles.limitless}>{`Limitless `}</p>
                <p className={styles.adaptability}>Adaptability</p>
              </b>
              <div className={styles.skyyeAisSelfLearning}>
                Skyye AI's self-learning capabilities ensure your connectivity
                solution evolves alongside your ever-changing needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
