import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component7.module.css";
import { NavBar } from "./navbar";

const FrameComponent7: NextPage = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop-about-us");
  }, [router]);

  const onApplicationTextClick = useCallback(() => {
    router.push("/desktop-application");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.gradientParent}>
      <div className={styles.gradient} />
      <NavBar />
      <div className={styles.hero}>
        <div className={styles.revolutionizingCommunicationParent}>
          <h1 className={styles.revolutionizingCommunication}>
            Revolutionizing Communication in the Digital Age
          </h1>
          <div
            className={styles.theUcnEmergency}
          >{`The UCN Emergency Connectivity Solution is designed to provide a reliable lifeline, delivering unbroken signals and critical communication channels even in the most challenging conditions. `}</div>
        </div>
      </div>
      <div className={styles.backvideo1Ezgif1Parent}>
        <img className={styles.backvideo1Ezgif1Icon} alt="" src="/tech1.gif" />
      </div>
    </div>
  );
};

export default FrameComponent7;
