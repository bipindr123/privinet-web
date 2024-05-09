import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <section className={styles.featureCardsWrapper}>
      <div className={styles.featureCards}>
        <div className={styles.featureCard}>
          <div className={styles.featureTitle}>
            <h1 className={styles.thePowerOf}>
              The Power of Our AI-Powered, Multi-RAT/RAN UCN
            </h1>
            <div className={styles.featureDescription}>
              <div className={styles.multiRatmultiRanMrmrSo}>
                Multi-RAT/Multi-RAN (MR/MR) solutions unify networks, enhancing
                management, data flow, and security. Skyye AI by PriviNet excels
                as a top MR/MR system, streamlining network operations.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitCards}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <img
                className={styles.benefitIconShape}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <b className={styles.extendedRange}>Extended Range</b>
            <div className={styles.benefitDescription}>
              <div className={styles.reachUnderservedAreas}>
                Reach underserved areas, opening untapped markets.
              </div>
            </div>
          </div>
          <div className={styles.securityCard}>
            <div className={styles.securityIcon}>
              <img
                className={styles.securityIconShape}
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className={styles.securityContent}>
              <b className={styles.unmatchedSecurity}>Unmatched Security</b>
              <div className={styles.securityDescription}>
                <div className={styles.skyyeAisProactiveContainer}>
                  <p
                    className={styles.skyyeAisProactive}
                  >{`Skyye AI's proactive protection and `}</p>
                  <p className={styles.blockchainTechnology}>
                    blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.scalabilityCard}>
            <div className={styles.scalabilityIcon}>
              <img
                className={styles.scalabilityIconShape}
                alt=""
                src="/vector-22.svg"
              />
            </div>
            <div className={styles.scalabilityContent}>
              <b className={styles.limitlessScalability}>
                Limitless Scalability
              </b>
              <div className={styles.scalabilityDescription}>
                <div className={styles.aNetworkThat}>
                  A network that seamlessly grows with your ambitions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
