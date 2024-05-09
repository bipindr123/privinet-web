import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./footer.module.css";
import { NavBar } from "../components/navbar";

const Footer: NextPage = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onTechnologyTextClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  return (
    <section className={styles.footer}>
      <NavBar />
      
      <div className={styles.blackTranslucid} />
      <div className={styles.gradient} />
      <div className={styles.frameParent}>

        <div className={styles.frameGroup}>
          
          <div className={styles.frameWrapper}>
            <div className={styles.pioneeringTheFutureOfConneParent}>
              <div className={styles.homepageHeader}>
                <img
                  className={styles.backvideo1Ezgif1Icon}
                  alt=""
                  src="/homepage.gif"
                />
              </div>
              <h1 className={styles.pioneeringTheFutureContainer}>
                <p
                  className={styles.pioneeringTheFuture}
                >{`Pioneering the Future `}</p>
                <p
                  className={styles.ofConnectivityAnd}
                >{`of Connectivity and AI `}</p>
                <p className={styles.integration}>Integration</p>
              </h1>
              <div className={styles.welcomeToPrivinet}>
                Welcome to PriviNet, where we revolutionize connectivity and AI
                integration with Skyye AI.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className={styles.footerChild}
        endIcon={<img width="5px" height="10px" src="/button-shape.svg" />}
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
    </section>
  );
};

export default Footer;
