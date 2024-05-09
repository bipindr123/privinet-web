import type { NextPage } from "next";
import styles from "./group-component1.module.css";

const GroupComponent1: NextPage = () => {
  return (
    <div className={styles.backgroundVideoParent}>
      <img
        className={styles.backgroundVideoIcon}
        loading="lazy"
        alt=""
        src="/about3.gif"
      />
      <div className={styles.gradientParent}>
        <div className={styles.heroContentArea}>
          <div className={styles.revenueProjectionCardParent}>
            <div className={styles.revenueProjectionCard}>
              <div className={styles.circleIcon}>
                <div className={styles.circleShape} />
              </div>
              <div className={styles.revenueProjections}>
                Revenue Projections
              </div>
            </div>
            <h1 className={styles.poisedForExponential}>
              Poised for Exponential Growth
            </h1>
          </div>
        </div>
        <div className={styles.gradientGroup}>
          <div className={styles.gradient1} />
          <div className={styles.marketGrowthCard}>
            <div
              className={styles.asBusinessesIncreasingly}
            >{`As businesses increasingly rely on seamless connectivity and cutting-edge AI-powered services to drive growth and innovation, PriviNet stands at the forefront of this technological revolution, poised for exponential growth. `}</div>
          </div>
          <div className={styles.revenueGraphicProjection}>
            Revenue Graphic Projection
            <div>
              <img
                className={styles.linevideoEzgif1Icon}
                loading="lazy"
                alt=""
                src="/graph.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
