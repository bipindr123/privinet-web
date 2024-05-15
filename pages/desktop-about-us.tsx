import type { NextPage } from "next";
import { useCallback } from "react";
import HeaderBackground from "../components/header-background";
import GroupComponent1 from "../components/group-component1";
import Background from "../components/background";
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
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.footerContent}>
          <div className={styles.footerLogoAndSocialMedia}>
            <img
              className={styles.logoIcon}
              alt=""
              src="/logo@2x.png"
              onClick={onLogoImageClick}
            />
            <div className={styles.footerSocialMediaContainer}>
              <div className={styles.followUs}>
                <div className={styles.followUsParent}>
                  <div className={styles.followUs1}>Follow us</div>
                  <div className={styles.socialMediaIcons}>
                    <img
                      className={styles.socialMediaIconsChild}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.footerContact}>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactIconWrapper}>
                      <img
                        className={styles.contactIcon}
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
        <div className={styles.copyright}>
          <img
            className={styles.designElementIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.legalAndCopyright}>
            <div className={styles.legalLinksParent}>
              <div className={styles.legalLinks}>
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

export default DesktopAboutUs;
