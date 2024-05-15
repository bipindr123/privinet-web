import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import GroupComponent from "../components/group-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";
import FinalFooter from "../components/finalFooter";

const DesktopHome: NextPage = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  return (
    <div className={styles.desktopHome}>
      <Footer />
      <img
        className={styles.contentBackgroundIcon}
        alt=""
        src="/homepage3.gif"
      />
      <div className={styles.desktopHomeInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.aboutUsWrapper}>
              <div className={styles.aboutUs}>About us</div>
            </div>
            <div className={styles.experienceTheFutureOfConneParent}>
              <h1 className={styles.experienceTheFuture}>
                Experience the Future of Connected Devices
              </h1>
              <div className={styles.privinetShattersThe}>
                PriviNet shatters the limits of traditional connectivity. Our
                Universal Connectivity Network (UCN) is designed for the scale,
                resilience, and adaptability demanded by the Internet of Things.
              </div>
              <Button
                className={styles.frameChild}
                endIcon={<img width="5px" height="10px" src="/vector-1.svg" />}
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
                  height: 52,
                }}
                onClick={onGroupButtonClick}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <GroupComponent />
      <div className={styles.gradient} />
      <div className={styles.gradienttop} />

      <section className={styles.backgroundParent}>
        {/* <div className={styles.gradient} /> */}
        <img className={styles.backgroundIcon} alt="" src="/homepage2.gif" />
        <div className={styles.frameItem} />
      </section>
      <FinalFooter />
    </div>
  );
};

export default DesktopHome;
