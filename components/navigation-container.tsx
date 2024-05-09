import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./navigation-container.module.css";

const NavigationContainer: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onTechnologyTextClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  return (
    <section className={styles.navigationContainer}>
      <div className={styles.gradient} />
      <header className={styles.navbar}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          onClick={onLogoImageClick}
        />
        <nav className={styles.navigationItems}>
          <nav className={styles.navigationLinks}>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </div>
            <div
              className={styles.application}
              onClick={onApplicationTextClick}
            >
              Application
            </div>
            <div className={styles.technology} onClick={onTechnologyTextClick}>
              Technology
            </div>
            <div className={styles.contact}>Contact</div>
          </nav>
        </nav>

      </header>
      <div className={styles.heroContainerWrapper}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.introduction}>
              <div className={styles.getInTouchParent}>
                <h1 className={styles.getInTouch}>Get in Touch</h1>
                <div className={styles.pleaseFillOut}>
                  Please fill out the next form, and one of our experts will get
                  back to you as soon as possible.
                </div>
              </div>
              <div className={styles.formFields}>
                <div className={styles.iconSetParent}>
                  <img
                    className={styles.iconSet}
                    loading="lazy"
                    alt=""
                    src="/vector2.svg"
                  />
                  <b className={styles.fullName}>Full Name*</b>
                </div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-12.svg"
                  />
                  <b className={styles.email}>Email*</b>
                </div>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-23.svg"
                  />
                  <b className={styles.phone}>Phone*</b>
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <b className={styles.message}>Message</b>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.heroContainerChild}
            endIcon={<img width="5px" height="10px" src="/vector-4.svg" />}
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
          >
            Send message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NavigationContainer;
