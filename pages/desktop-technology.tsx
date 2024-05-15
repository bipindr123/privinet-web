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
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.footerBranding}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logoIcon}
              alt=""
              src="/logo@2x.png"
              onClick={onLogoImageClick}
            />
            <div className={styles.footerActions}>
              <div className={styles.socialMedia}>
                <div className={styles.followUsBlock}>
                  <div className={styles.followUs}>Follow us</div>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.socialIconsChild}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.footerContact}>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactDetails}>
                      <img
                        className={styles.mailIcon}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className={styles.contactprivinetcom}>
                      brad@privinet.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.legal}>
          <img
            className={styles.legalDividerIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.legalDetails}>
            <div className={styles.legalLinks}>
              <div className={styles.termsOfServicesParent}>
                <div className={styles.termsOfServices}>Terms of services</div>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div className={styles.cookies}>Cookies</div>
                <div className={styles.contact} onClick={onContactText1Click}>
                  Contact
                </div>
              </div>
              <div className={styles.privinetAll}>
                © 2024 PriviNet . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesktopTechnology;
