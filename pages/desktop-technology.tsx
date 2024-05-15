import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import BenefitList from "../components/benefit-list";
import SkyyeWaveContact from "../components/skyye-wave-contact";
import { useRouter } from "next/router";
import styles from "./desktop-technology.module.css";
import FinalFooter from "../components/finalFooter";

const DesktopTechnology: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <div className={styles.desktopTechnology}>
      <div className={styles.desktopTechnologyChild} />
      <div className={styles.blackTranslucid} />
      <section className={styles.mainContent}>
        <FrameComponent7 />
        <FrameComponent6 />
      </section>
      <FrameComponent5 />
      <section className={styles.gradientParent}>
        <div className={styles.gradient} />
        <div className={styles.smartCitiesUse}>
          Smart Cities use advanced tech to improve living standards and city
          functions. But integrating diverse technologies, like IoT devices,
          across different networks (cellular, LPWANs, Wi-Fi) is challenging due
          to silos, hindering communication, data analysis, and security while
          increasing maintenance costs.
        </div>
      </section>
      <section className={styles.smartCitiesManagement}>
        <h1 className={styles.poweringSimplifiedNetwork}>
          Powering Simplified Network Management for Smart Cities
        </h1>
        <div className={styles.smartCitiesManagementDescri}>
          <div className={styles.integratingSkyyeAi}>
            Integrating Skyye AI into Smart City initiatives simplifies network
            management, saves time and resources, and enhances citizen
            experiences. By ensuring smooth network operations, Skyye AI
            optimizes Smart City applications, unlocking urban infrastructure's
            full potential. With Skyye AI, Smart Cities achieve efficiency,
            sustainability, and citizen well-being through innovative
            connectivity solutions.
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <BenefitList />
      <SkyyeWaveContact />
      <section className={styles.footerBackground}>
        <section className={styles.gradient1} />
        <img
          className={styles.backgroundvideotech4Ezgif1Icon}
          loading="lazy"
          alt=""
          src="/tech2.gif"
        />
        <div className={styles.footerCurve} />
      </section>
      <FinalFooter />

    </div>
  );
};

export default DesktopTechnology;
