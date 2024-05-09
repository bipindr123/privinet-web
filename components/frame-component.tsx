import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  const router = useRouter();

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <div className={styles.scrollTopParent}>
      <img
        className={styles.scrollTopIcon}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
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
  );
};

export default FrameComponent;
