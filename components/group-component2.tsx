import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "./frame-component1";
import styles from "./group-component2.module.css";

const GroupComponent2: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <footer className={styles.footerContainer}>
        <FrameComponent1
          followUsDisplay="flex"
          followUsMinWidth="unset"
          followUsHeight="23px"
          onLogoImage1Click={onLogoImageClick}
        />
        <img
          className={styles.decorationElementIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </footer>
      <div className={styles.legalContainerWrapper}>
        <div className={styles.legalContainer}>
          <div className={styles.legalLinks}>
            <div className={styles.termsOfServices}>Terms of services</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.cookies}>Cookies</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.privinetAll}>
            © 2024 PriviNet . All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
