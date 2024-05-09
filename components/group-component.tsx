import type { NextPage } from "next";
import styles from "./group-component.module.css";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

const GroupComponent: NextPage = () => {
  return (
    <section className={styles.gradientParent}>
      {/* <div className={styles.gradient} /> */}
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.ellipseWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.services}>Services</div>
            </div>
          </div>
          <h1 className={styles.benefitsFeatures}>{`Benefits & Features`}</h1>
        </div>
      </div>
      <div className={styles.frameDiv}></div>
      <div className={styles.gradientGroup}>
        <div className={styles.gradient1} />
        <div className={styles.frameParent2}>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>Seamless Reach</div>
                <div className={styles.cardDescription}>
                  Connect devices and sensors across vast distances, unlocking
                  untapped potential in remote and challenging environments.
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>Unwavering Reliability</div>
                <div className={styles.cardDescription}>
                  Say goodbye to outages. Count on a network that delivers
                  critical data consistently, no matter the conditions.
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>Intelligent Evolution</div>
                <div className={styles.cardDescription}>
                  PriviNet's AI-driven UCN anticipates and adapts, ensuring your
                  network is always optimized for your evolving needs.
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>SkyyeWave™</div>
                <div className={styles.cardDescription}>
                  Our proprietary LPWAN extends connectivity far beyond the
                  limits of traditional networks, unlocking remote and
                  challenging environments while being able to process more
                  data.
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>SkyyeAI™</div>
                <div className={styles.cardDescription}>
                  Intelligent algorithms continuously analyze network data and
                  device needs, optimizing for performance, efficiency, and
                  security.
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={styles.customCard}>
                <div className={styles.cardHeading}>Adaptable Design</div>
                <div className={styles.cardDescription}>
                  Our UCN effortlessly integrates with your existing
                  infrastructure, scaling as your needs evolve.
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
