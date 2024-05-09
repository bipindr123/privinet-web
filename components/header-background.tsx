import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./header-background.module.css";
import { NavBar } from "./navbar";

const HeaderBackground: NextPage = () => {
  const router = useRouter();

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onTechnologyTextClick = useCallback(() => {
    router.push("/desktop-technology");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={styles.headerBackground}>
      <NavBar />

      <div className={styles.blackTranslucid} />
      <div className={styles.gradient} />
      <div className={styles.headerSlogan}>
        <h1 className={styles.pioneeringDataDrivenConnect}>
          Pioneering Data-Driven Connectivity for a Smarter World
        </h1>
      </div>
      <div className={styles.headerVideo}>
        <img
          className={styles.backvideo1Ezgif1Icon}
          alt=""
          src="/about1.gif"
        />
      </div>
      <div className={styles.atPrivinetWe}>
        At PriviNet, we are dedicated to redefining how data and connectivity
        drive progress in an increasingly digital landscape. With a steadfast
        commitment to excellence and innovation, we deliver network solutions
        that transform complex data into actionable insights, empowering
        businesses, communities, and individuals to achieve their fullest
        potential.
      </div>
    </section>
  );
};

export default HeaderBackground;
