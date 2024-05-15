import type { NextPage } from "next";
import { useCallback } from "react";
import HeaderBackground from "../components/header-background";
import GroupComponent1 from "../components/group-component1";
import Background from "../components/background";
import FinalFooter from "../components/finalFooter";
import Footer1 from "../components/footer1";
import MemberContainerOne from "../components/member-container-one";
import MemberContainerTwo from "../components/team-members-second-row";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import { useRouter } from "next/router";
import styles from "./desktop-about-us.module.css";
import MemberContainerThree from "../components/member-container-three";

const DesktopAboutUs: NextPage = () => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactText1Click = useCallback(() => {
    router.push("/desktop-contact");
  }, [router]);

  return (
    <div className={styles.desktopAboutUs}>
      <div className={styles.desktopAboutUsChild} />
      <HeaderBackground />
      <section className={styles.heroContainer}>
        {/* <GroupComponent1 /> */}
        <Background />
        {/* <img
            className={styles.linevideoEzgif1Icon}
            loading="lazy"
            alt=""
            src="/graph.png"
          /> */}
      </section>
      <section className={styles.teamContentWrapper}>
        <div className={styles.teamContent}>
          <div className={styles.teamHeading}>
            <h1 className={styles.meetOurVisionary}>Meet Our Visionary Team</h1>
          </div>
          <div className={styles.ledByA}>
            Led by a group of industry pioneers, our team combines deep
            technical expertise with strategic foresight. Each member is
            dedicated to pushing the boundaries of technology to deliver robust,
            innovative solutions that not only meet but exceed the expectations
            of our clients.
          </div>
        </div>
      </section>
      <section className={styles.teamMembers}>
        <div className={styles.memberList}>
          <MemberContainerOne />
          <MemberContainerTwo />
          <MemberContainerThree />
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FinalFooter />
      
    </div>
  );
};

export default DesktopAboutUs;
