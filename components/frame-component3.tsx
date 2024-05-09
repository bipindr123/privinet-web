import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <section className={styles.desktopAboutUsInner}>
      <div className={styles.joinOurJourneyParent}>
        <h1 className={styles.joinOurJourney}>Join Our Journey</h1>
        <div className={styles.stepIntoTheFutureWithPrivWrapper}>
          <div className={styles.stepIntoThe}>
            Step into the future with PriviNet and discover how enhanced
            connectivity can revolutionize your approach to data and
            decision-making. Join us on this transformative journey to unlock
            new possibilities and build a smarter, more connected world.
          </div>
        </div>
        <div className={styles.joinUsCTAButton}>
          <Button
            className={styles.joinUsCTAButtonChild}
            endIcon={<img width="5px" height="10px" src="/vector-6.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "17",
              background: "#3b8dcb",
              borderRadius: "41px",
              "&:hover": { background: "#3b8dcb" },
              width: 198,
            }}
            onClick={onGroupButtonClick}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
